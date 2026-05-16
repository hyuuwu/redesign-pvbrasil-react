import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col gap-4">
        <div className="opacity-80 hover:opacity-100 transition-opacity">
          <Link to="/">
            <img
              alt="PV Brasil Importação Logo"
              className="h-16 w-auto object-contain"
              src="/images/logo.png"
            />
          </Link>
        </div>
        <p className="font-label-sm text-label-sm text-slate-gray max-w-sm">
          © 2026 PV Brasil Importação. Distribuidora & Varejista de Eletrônicos.
        </p>
      </div>
    </footer>
  );
}
