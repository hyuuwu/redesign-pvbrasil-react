import { Link } from "react-router-dom";
import { CONTACT, formatPhone, whatsappLink } from "../data/contact";
import { NAV_LINKS } from "./navLinks";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto grid max-w-container-max gap-10 px-margin-mobile py-14 md:px-margin-desktop sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/" className="w-fit opacity-80 transition-opacity hover:opacity-100">
            <img alt="PV Brasil Importação Logo" className="h-16 w-auto object-contain" src="/images/logo.png" />
          </Link>
          <p className="max-w-xs font-body-md text-sm text-on-surface-variant">
            Distribuidora e atacadista de eletrônicos, informática e telefonia na Bahia.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Navegação</h2>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-body-md text-sm text-on-surface-variant transition-colors hover:text-electric-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Contato</h2>
          <ul className="flex flex-col gap-2 font-body-md text-sm text-on-surface-variant">
            <li>
              <a href={whatsappLink(CONTACT.whatsappRetail)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-electric-cyan">
                Varejo: {formatPhone(CONTACT.whatsappRetail)}
              </a>
            </li>
            <li>
              <a href={whatsappLink(CONTACT.whatsappWholesale)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-electric-cyan">
                Atacado: {formatPhone(CONTACT.whatsappWholesale)}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors hover:text-electric-cyan">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Endereço</h2>
          <address className="font-body-md text-sm not-italic text-on-surface-variant">
            <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-electric-cyan">
              {CONTACT.address.street}<br />
              {CONTACT.address.district}
            </a>
          </address>
          <ul className="mt-4 flex flex-col gap-1 font-body-md text-sm text-on-surface-variant">
            {CONTACT.hours.map((slot) => (
              <li key={slot.days}>
                {slot.days}: <span className="text-on-surface">{slot.time ?? "Fechado"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-outline-variant/60">
        <p className="mx-auto max-w-container-max px-margin-mobile py-6 font-label-sm text-label-sm text-slate-gray md:px-margin-desktop">
          © {new Date().getFullYear()} PV Brasil Atacado LTDA. Todos os direitos reservados. {/* e feito por luiz, obv*/}
        </p>
      </div>
    </footer>
  );
}
