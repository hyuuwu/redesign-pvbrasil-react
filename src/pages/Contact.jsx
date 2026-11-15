import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { CONTACT, formatPhone, whatsappLink } from "../data/contact";

const SUBJECTS = [
  { value: "varejo", label: "Compra no varejo", number: CONTACT.whatsappRetail },
  { value: "atacado", label: "Compra no atacado (CNPJ)", number: CONTACT.whatsappWholesale },
  { value: "parceria", label: "Parceria / fornecedor", number: CONTACT.whatsappRetail },
  { value: "outro", label: "Outro assunto", number: CONTACT.whatsappRetail },
];

const channels = [
  {
    icon: "chat",
    label: "WhatsApp Varejo",
    value: formatPhone(CONTACT.whatsappRetail),
    href: whatsappLink(CONTACT.whatsappRetail),
    external: true,
  },
  {
    icon: "storefront",
    label: "WhatsApp Atacado",
    value: formatPhone(CONTACT.whatsappWholesale),
    href: whatsappLink(CONTACT.whatsappWholesale),
    external: true,
  },
  {
    icon: "mail",
    label: "E-mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: "location_on",
    label: CONTACT.address.name,
    value: `${CONTACT.address.street} - ${CONTACT.address.district}`,
    href: CONTACT.mapsUrl,
    external: true,
  },
];

const inputClasses =
  "w-full rounded-lg border border-outline-variant bg-deep-navy px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan";

export default function Contact() {
  usePageTitle("Contato");
  const [form, setForm] = useState({ name: "", company: "", subject: SUBJECTS[0].value, message: "" });

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = SUBJECTS.find((item) => item.value === form.subject) ?? SUBJECTS[0];
    const lines = [
      `Olá! Meu nome é ${form.name.trim()}.`,
      form.company.trim() && `Empresa: ${form.company.trim()}`,
      `Assunto: ${subject.label}`,
      "",
      form.message.trim(),
    ].filter((line) => line !== false && line !== "");
    window.open(whatsappLink(subject.number, lines.join("\n")), "_blank", "noopener");
  };

  return (
    <main className="flex-grow pt-[120px] pb-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto animate-fade-in-up">
      <header className="mb-16 max-w-2xl">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Fale conosco</span>
        <h1 className="mt-3 font-headline-lg text-4xl text-on-surface md:font-headline-xl md:text-headline-xl">Como podemos ajudar?</h1>
        <p className="mt-6 font-body-lg text-body-lg text-on-surface-variant">
          Tire dúvidas, solicite o catálogo ou peça um orçamento. Nossa equipe responde pelo WhatsApp e por e-mail no horário comercial.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <section aria-labelledby="contact-form-title" className="rounded-xl border border-outline-variant bg-surface-dark p-6 md:p-10 lg:col-span-7">
          <h2 id="contact-form-title" className="font-headline-md text-headline-md text-on-surface">Envie uma mensagem</h2>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            Preencha os campos e sua mensagem será aberta no WhatsApp do setor responsável, pronta para enviar.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Nome *</span>
              <input required autoComplete="name" value={form.name} onChange={update("name")} className={inputClasses} placeholder="Seu nome" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Empresa</span>
              <input autoComplete="organization" value={form.company} onChange={update("company")} className={inputClasses} placeholder="Opcional" />
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Assunto</span>
              <select value={form.subject} onChange={update("subject")} className={inputClasses}>
                {SUBJECTS.map((subject) => (
                  <option key={subject.value} value={subject.value}>{subject.label}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Mensagem *</span>
              <textarea required rows={5} value={form.message} onChange={update("message")} className={`${inputClasses} resize-y`} placeholder="Conte o que você procura" />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-DEFAULT bg-electric-cyan px-7 py-3.5 font-button text-button uppercase text-deep-navy transition-all hover:shadow-[0_4px_20px_rgba(0,216,255,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-cyan sm:col-span-2 sm:w-fit"
            >
              Enviar pelo WhatsApp
              <span className="material-symbols-outlined text-xl" aria-hidden="true">send</span>
            </button>
          </form>
        </section>

        <aside className="flex flex-col gap-gutter lg:col-span-5">
          <ul className="flex flex-col gap-4">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-xl border border-outline-variant bg-surface-dark p-5 transition-all hover:border-electric-cyan/50 hover:shadow-[0_4px_20px_rgba(0,216,255,0.12)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-electric-cyan/20 bg-electric-cyan/10 text-electric-cyan">
                    <span className="material-symbols-outlined" aria-hidden="true">{channel.icon}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-label-sm text-label-sm uppercase text-electric-cyan">{channel.label}</span>
                    <span className="block break-words font-body-md text-body-md text-on-surface">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-outline-variant bg-surface-dark p-6">
            <span className="mb-4 block font-label-sm text-label-sm uppercase text-electric-cyan">Horário de funcionamento</span>
            <ul className="flex flex-col gap-3">
              {CONTACT.hours.map((slot) => (
                <li key={slot.days} className="flex items-center justify-between border-b border-outline-variant/30 pb-2 last:border-0 last:pb-0">
                  <span className="font-body-md text-body-md text-on-surface-variant">{slot.days}</span>
                  {slot.time ? (
                    <span className="font-body-md text-body-md font-medium text-on-surface">{slot.time}</span>
                  ) : (
                    <span className="rounded bg-electric-cyan/10 px-2 py-1 font-label-sm text-label-sm text-electric-cyan/70">Fechado</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
