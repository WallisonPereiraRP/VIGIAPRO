import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
// @ts-ignore
import "leaflet/dist/leaflet.css";
// @ts-ignore
import "./VigiaProContact.css";

// ─── CONFIGURAÇÃO EMAILJS ──────────────────────────────────────────────────────
// 1. Crie conta gratuita em https://www.emailjs.com
// 2. Crie um Email Service e um Email Template
// 3. Substitua as três constantes abaixo com seus dados reais
const EMAILJS_SERVICE_ID  = "service_p9d4yp5";
const EMAILJS_TEMPLATE_ID = "template_cxciizr";
const EMAILJS_PUBLIC_KEY  = "O3P8EiD2pSYLuzTtk";
// No template do EmailJS, use as variáveis: {{from_name}}, {{from_email}}, {{message}}
// ──────────────────────────────────────────────────────────────────────────────

// ─── CONFIGURAÇÃO DO MAPA ─────────────────────────────────────────────────────
const MAP_LAT  = -21.138193;
const MAP_LNG  = -47.823577;
const MAP_ZOOM = 15;
const ADDRESS_LINE1 = "R. Itajubá, 1065 - Jardim Javari,";
const ADDRESS_LINE2 = "14060-115 - Ribeirão Preto - SP";
// ──────────────────────────────────────────────────────────────────────────────

// Corrige o problema dos ícones padrão do Leaflet com bundlers (Vite/Webpack)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Status = "idle" | "sending" | "success" | "error";

export const VigiaProContact: React.FC = () => {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const mapRef              = useRef<HTMLDivElement>(null);
  const mapInstance         = useRef<L.Map | null>(null);

  // ── Inicializa o mapa Leaflet ──────────────────────────────────────────────
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [MAP_LAT, MAP_LNG],
      zoom: MAP_ZOOM,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Marcador customizado na cor do projeto
    const icon = L.divIcon({
      className: "",
      html: `<div style="
        width:20px;height:20px;
        background:#003E7E;
        border:3px solid #fff;
        border-radius:50%;
        box-shadow:0 2px 8px rgba(0,0,0,0.4);
      "></div>`,
      iconSize:    [20, 20],
      iconAnchor:  [10, 10],
      popupAnchor: [0, -14],
    });

    L.marker([MAP_LAT, MAP_LNG], { icon })
      .addTo(map)
      .bindPopup(`<b>BASE CENTRAL</b><br>${ADDRESS_LINE1}<br>${ADDRESS_LINE2}`)
      .openPopup();

    mapInstance.current = map;

    // Força o Leaflet a recalcular o tamanho do container após a montagem
    setTimeout(() => map.invalidateSize(), 0);

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  // ── Handlers do formulário ─────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setStatus("sending");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const btnLabel: Record<Status, string> = {
    idle:    "Enviar Mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada! ✓",
    error:   "Erro ao enviar. Tente novamente.",
  };

  return (
    <section id="contact-container" className="contact-section">
      <div className="contact-card">

        {/* LEFT — Formulário */}
        <div className="contact-form-side">
          <h2 className="contact-title">Fale Conosco</h2>

          <div className="contact-field">
            <label className="contact-label">SEU NOME</label>
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Como podemos te chamar?"
              value={form.name}
              onChange={handleChange}
              disabled={status === "sending"}
            />
          </div>

          <div className="contact-field">
            <label className="contact-label">E-MAIL DE CONTATO</label>
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder="exemplo@email.com"
              value={form.email}
              onChange={handleChange}
              disabled={status === "sending"}
            />
          </div>

          <div className="contact-field">
            <label className="contact-label">SUA MENSAGEM</label>
            <textarea
              name="message"
              className="contact-textarea"
              placeholder="Em que podemos ajudar?"
              value={form.message}
              onChange={handleChange}
              rows={5}
              disabled={status === "sending"}
            />
          </div>

          <button
            className={`contact-submit-btn contact-submit-btn--${status}`}
            onClick={handleSubmit}
            disabled={status === "sending"}
          >
            {btnLabel[status]}
          </button>
        </div>

        {/* RIGHT — Mapa interativo + card de endereço */}
        <div className="contact-image-side">
          <div ref={mapRef} className="contact-map" />

          <div className="contact-address-card">
            <span className="contact-address-label">BASE CENTRAL</span>
            <p className="contact-address-text">
              {ADDRESS_LINE1},<br />{ADDRESS_LINE2}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
