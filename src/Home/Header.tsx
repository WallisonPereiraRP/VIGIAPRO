import React, { useState, useEffect } from 'react';
// @ts-ignore
import './VigiaProHeader.css';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export const VigiaProHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Serviços', href: 'services-container' },
    { label: 'Planos', href: 'plans-container' },
    // { label: 'Sobre nós', href: '#' },
    { label: 'Contato', href: 'contact-container' },
  ];

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="vigiapro-container">
      {/* --- NAVBAR --- */}
      <header className="vigiapro-navbar">
        <div className="vigiapro-logo">
          <img className="vigiapro-logo-img" src="/src/assets/LogoVigiaPro.png" alt="VigiaPro Logo" />
        </div>

        {/* Nav desktop */}
        <nav className="vigiapro-nav">
          <ul className="vigiapro-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`vigiapro-nav-link ${item.isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão WhatsApp desktop */}
        <a
          href="https://wa.me/5516997925493"
          target="_blank"
          rel="noreferrer"
          className="vigiapro-whatsapp-btn"
          aria-label="Contato via WhatsApp"
        >
          <img src="/src/assets/WhatsappIcon.svg" alt="" />
          <span>(16) 98765-4321</span>
        </a>

        {/* Botão hambúrguer (mobile) */}
        <button
          className={`vigiapro-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* --- MENU MOBILE --- */}
      <div className={`vigiapro-mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {/* Botão fechar */}
        <button
          className="vigiapro-mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <nav>
          <ul className="vigiapro-mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`vigiapro-mobile-nav-link ${item.isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://wa.me/5516997925493"
          target="_blank"
          rel="noreferrer"
          className="vigiapro-whatsapp-btn drawer"
        >
          <img src="/src/assets/WhatsappIcon.svg" alt="" />
          <span>(16) 98765-4321</span>
        </a>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {menuOpen && (
        <div className="vigiapro-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* --- HERO SECTION --- */}
      <section className="vigiapro-hero">
        <div className="vigiapro-hero-content">
          <span className="vigiapro-hero-subtitle">VIGIAPRO SECURITY</span>
          <h1 className="vigiapro-hero-title">
            Sua <br />
            tranquilidade <br />
            Não tem preço
          </h1>
          <p className="vigiapro-hero-description">
            Nossa tecnologia garante que ela nunca acabe
          </p>
          <button
            className="vigiapro-cta-btn"
            onClick={() => {
              const element = document.getElementById('plans-container');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Planos
          </button>
        </div>
      </section>
    </div>
  );
};
