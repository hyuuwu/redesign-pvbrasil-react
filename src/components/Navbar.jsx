import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClasses = (path, isMobile = false) => {
    const baseClasses = "font-button text-button transition-colors hover:bg-white/5 transition-all duration-300 scale-95 active:scale-90 transition-transform";
    
    if (isMobile) {
      if (location.pathname === path) {
        return "block w-full text-center py-4 font-button text-button text-electric-cyan bg-electric-cyan/10";
      }
      return "block w-full text-center py-4 font-button text-button text-on-surface-variant hover:text-electric-cyan hover:bg-white/5";
    }

    if (location.pathname === path) {
      return `${baseClasses} text-electric-cyan border-b-2 border-electric-cyan pb-1`;
    }
    return `${baseClasses} text-on-surface-variant hover:text-electric-cyan`;
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-t border-electric-cyan/20 shadow-[0px_4px_20px_rgba(0,216,255,0.1)]">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 relative z-50">
        {/* Brand */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              alt="PV Brasil Importação Logo"
              className="h-14 md:h-16 w-auto object-contain"
              src="/images/logo.png"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link className={getLinkClasses("/")} to="/">
            Início
          </Link>
          <Link className={getLinkClasses("/quem-somos")} to="/quem-somos">
            Quem Somos
          </Link>
          <Link className={getLinkClasses("/localizacao")} to="/localizacao">
            Localização
          </Link>
          <Link className={getLinkClasses("/parceiros")} to="/parceiros">
            Parceiros
          </Link>
        </div>

        {/* Trailing Actions & Search */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <a
            href="mailto:vendas@pvbrasilimportacao.com.br"
            className="bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/30 font-button text-button px-4 py-2.5 rounded-DEFAULT hover:bg-electric-cyan hover:text-deep-navy hover:shadow-[0px_4px_20px_rgba(0,216,255,0.3)] transition-all duration-300 flex items-center gap-2"
            title="Enviar E-mail"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>mail</span>
            <span className="hidden lg:inline">E-mail</span>
          </a>
          <a
            href="https://wa.me/5571981921193"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-button text-button px-4 py-2.5 rounded-DEFAULT hover:bg-[#25D366] hover:text-white hover:shadow-[0px_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 flex items-center gap-2"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chat</span>
            <span className="hidden md:inline">WhatsApp</span>
          </a>
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-electric-cyan hover:bg-white/5 transition-all duration-300 p-2 rounded-full scale-95 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-surface-dark border-b border-electric-cyan/20 shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-2">
          <Link className={getLinkClasses("/", true)} to="/" onClick={closeMobileMenu}>
            Início
          </Link>
          <Link className={getLinkClasses("/quem-somos", true)} to="/quem-somos" onClick={closeMobileMenu}>
            Quem Somos
          </Link>
          <Link className={getLinkClasses("/localizacao", true)} to="/localizacao" onClick={closeMobileMenu}>
            Localização
          </Link>
          <Link className={getLinkClasses("/parceiros", true)} to="/parceiros" onClick={closeMobileMenu}>
            Parceiros
          </Link>
        </div>
      </div>
    </nav>
  );
}
