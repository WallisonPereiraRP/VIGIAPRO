import React, { useState } from "react";
// @ts-ignore
import "./VigiaProPlans.css";

const WHATSAPP_NUMBER = "5516997925493";

interface PlanFeature {
  text: string;
}
interface Plan {
  id: number;
  name: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
}

const buildWhatsAppUrl = (planName: string) => {
  const message = encodeURIComponent(
    `Olá, tenho interesse no plano ${planName}!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const individualPlans: Plan[] = [
  {
    id: 1,
    name: "Individual 1",
    description: "Câmera externa colaborativa com 1 dia de gravação em nuvem.",
    features: [
      { text: "1 Câmera Externa de acesso colaborativo" },
      { text: "Câmeras IP HD de 1 mega" },
      { text: "1 dia de gravação em nuvem" },
      { text: "Aplicativo com 3 acessos por residência" },
      { text: "Obs.: Pode acessar câmeras externas de outros moradores da rua com mesmo plano ampliando a visualização colaborativa." },
      { text: "Taxa de ativação R$ 69,90" },
      { text: "Prazo de implantação: 5 dias" },
    ],
  },
  {
    id: 2,
    name: "Individual 2",
    description: "Câmera externa + câmera interna privada para mais proteção.",
    features: [
      { text: "1 Câmera Externa de acesso colaborativo" },
      { text: "1 Câmera interna privada" },
      { text: "Câmeras IP HD de 1 mega" },
      { text: "1 dia de gravação em nuvem" },
      { text: "Aplicativo com 3 acessos por residência" },
      { text: "Obs.: Pode acessar câmeras externas de outros moradores da rua com mesmo plano ampliando a visualização colaborativa." },
      { text: "Taxa de ativação R$ 99,90" },
      { text: "Prazo de implantação: 10 dias" },
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Individual 3",
    description: "Cobertura completa com 2 câmeras internas e 3 dias de gravação.",
    features: [
      { text: "1 câmera Externa de acesso colaborativo" },
      { text: "2 câmeras internas privadas" },
      { text: "Câmeras IP HD de 1 mega" },
      { text: "3 dias de gravação em nuvem" },
      { text: "Aplicativo com 3 acessos por residência" },
      { text: "Obs.: Pode acessar câmeras externas de outros moradores da rua com mesmo plano ampliando a visualização colaborativa." },
      { text: "Taxa de ativação R$ 139,90" },
      { text: "Prazo de implantação: 15 dias" },
    ],
  },
];

const vizinhancaPlans: Plan[] = [
  {
    id: 1,
    name: "Vizinhança 1",
    description: "6 câmeras colaborativas para monitorar toda a rua em conjunto.",
    features: [
      { text: "6 Câmeras externas de acesso colaborativo" },
      { text: "Câmeras IP HD de 1 mega" },
      { text: "1 dia de gravação em nuvem" },
      { text: "Aplicativo com 3 acessos por residência" },
      { text: "Obs: Mínimo de 15 moradores pagantes para implantação" },
      { text: "Taxa de ativação R$ 39,90" },
    ],
  },
  {
    id: 2,
    name: "Vizinhança 2",
    description: "Mais câmeras, postes e leitor de placas para segurança avançada.",
    features: [
      { text: "7 câmeras externas de acesso colaborativo" },
      { text: "2 postes (para todo o grupo)" },
      { text: "1 Leitor de placa" },
      { text: "Câmeras IP HD de 1 mega" },
      { text: "1 dia de gravação em nuvem" },
      { text: "Aplicativo com 3 acessos por residência" },
      { text: "Obs: Mínimo de 20 moradores pagantes para implantação" },
      { text: "Taxa de ativação R$ 49,90" },
      { text: "Prazo de implantação: 14 dias" },
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Vizinhança 3",
    description: "O plano mais completo: 8 câmeras, 3 postes e 3 dias de gravação.",
    features: [
      { text: "8 câmeras externas de acesso colaborativo" },
      { text: "3 postes (para todo o grupo)" },
      { text: "1 Leitor de placa" },
      { text: "Câmeras IP HD de 1 mega" },
      { text: "3 dias de gravação em nuvem" },
      { text: "Aplicativo com 3 acessos por residência" },
      { text: "Obs: Mínimo de 20 moradores pagantes para implantação" },
      { text: "Taxa de ativação R$ 59,90" },
      { text: "Prazo de implantação: 14 dias" },
    ],
  },
];

const tabInfo = {
  individual: "Uma câmera instalada na sua residência, integrada à rede colaborativa da rua. Você monitora sua casa e ainda amplia a visão de todos os vizinhos.",
  vizinhanca: "Segurança coletiva para ruas e bairros inteiros. Instalação e manutenção gratuitas — você paga apenas a assinatura mensal do serviço.",
};

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className="plan-check-icon"
  >
    <circle cx="10" cy="10" r="10" fill="#013E72" />
    <path
      d="M6 10L8.5 12.5L14 7"
      stroke="#FFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FeaturesList: React.FC<{ plan: Plan }> = ({ plan }) => (
  <>
    <ul className="plan-features">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="plan-feature-item">
          <CheckIcon />
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
    <a
      href={buildWhatsAppUrl(plan.name)}
      target="_blank"
      rel="noreferrer"
      className={`plan-cta-btn ${plan.highlighted ? "plan-cta-btn--highlighted" : ""}`}
    >
      Solicitar orçamento
    </a>
  </>
);

export const VigiaProPlans: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "vizinhanca">(
    "vizinhanca"
  );
  const plans = activeTab === "individual" ? individualPlans : vizinhancaPlans;

  return (
    <section id="plans-container" className="plans-container">
      {/* Header */}
      <div className="plans-header">
        <h2 className="plans-main-title">
          Escolha o melhor <br /> plano para você!
        </h2>
        <p className="plans-subtitle">
          Escolha o plano que combina com você, ou nos contate para mais
          informações
        </p>

        {/* Toggle */}
        <div className="plans-toggle">
          <button
            className={`plans-toggle-btn ${activeTab === "individual" ? "active" : ""}`}
            onClick={() => setActiveTab("individual")}
          >
            Individual
          </button>
          <button
            className={`plans-toggle-btn ${activeTab === "vizinhanca" ? "active" : ""}`}
            onClick={() => setActiveTab("vizinhanca")}
          >
            Vizinhança
          </button>
        </div>

        {/* Descrição contextual do tab ativo */}
        <p className="plans-tab-description">
          {tabInfo[activeTab]}
        </p>
      </div>

      {/* Cards */}
      <div className="plans-grid">
        {plans.map((plan) =>
          plan.highlighted ? (
            <div key={plan.id} className="plan-card plan-card--highlighted">
              <div className="plan-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-arch-decoration" />
              <div className="plan-features-wrapper">
                <FeaturesList plan={plan} />
              </div>
            </div>
          ) : (
            <div key={plan.id} className="plan-card">
              <div className="plan-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-features-wrapper">
                <FeaturesList plan={plan} />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
