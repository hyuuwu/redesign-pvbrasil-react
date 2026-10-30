import { Link } from "react-router-dom";

export default function Wholesale() {
  const benefits = [
    { icon: "inventory_2", title: "Mix de produtos", text: "Informática, telefonia, eletrônicos, utilidades e ferramentas para compor o estoque da sua empresa." },
    { icon: "support_agent", title: "Atendimento comercial", text: "Contato direto com uma equipe preparada para entender o perfil e a demanda do seu negócio." },
    { icon: "local_shipping", title: "Logística especializada", text: "Entrega em Salvador e Região Metropolitana, além de opções de envio para outras localidades." },
  ];

  const steps = [
    { number: "01", button: "Iniciar conversa", title: "Fale com um consultor", text: "Inicie o atendimento pelo WhatsApp do setor de atacado.", message: "Olá! Gostaria de falar com um consultor sobre compras no atacado." },
    { number: "02", button: "Apresentar empresa", title: "Apresente seu negócio", text: "Informe seu CNPJ, segmento de atuação e as categorias de interesse.", message: "Olá! Gostaria de apresentar minha empresa e informar meu CNPJ, segmento e categorias de interesse para comprar no atacado." },
    { number: "03", button: "Consultar condições", title: "Receba as condições", text: "Consulte disponibilidade, catálogo e condições comerciais aplicáveis ao pedido.", message: "Olá! Gostaria de receber o catálogo e consultar disponibilidade e condições comerciais para compras no atacado." },
    { number: "04", button: "Revisar pedido", title: "Confirme seu pedido", text: "Alinhe pagamento, separação dos produtos e modalidade de entrega com o consultor.", message: "Olá! Gostaria de alinhar os detalhes de pagamento e entrega para confirmar meu pedido no atacado." },
  ];

  const audiences = ["Lojas de informática", "Assistências técnicas", "Revendedores", "Vendedores em marketplaces", "Empresas", "Integradores de tecnologia"];

  const categories = [
    { name: "Informática", image: "/images/real-motherboard.jpg", description: "Componentes, periféricos e acessórios." },
    { name: "Telefonia", image: "https://images.unsplash.com/photo-1695753456538-3d29fa0a4ba0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Acessórios e soluções para dispositivos móveis." },
    { name: "Eletrônicos", image: "/images/real-electronics-store.jpg", description: "Produtos para diferentes perfis de consumo." },
    { name: "Utilidades", image: "/images/real-tools.jpg", description: "Itens variados para ampliar o mix da sua loja." },
  ];

  const brands = [
    { name: "GET", image: "/images/get.png" },
    { name: "Fiolux", image: "/images/fiolux.png" },
    { name: "X-Cell", image: "/images/xcell.jpg" },
    { name: "Bright", image: "/images/bright.png" },
    { name: "Maxprint", image: "/images/maxprint.png" },
  ];

  const faqs = [
    { question: "Preciso ter CNPJ para comprar?", answer: "Sim. Para comprar pelo canal de atacado, é necessário possuir um CNPJ ativo e realizar o cadastro da empresa com nossa equipe comercial." },
    { question: "Existe pedido mínimo?", answer: "Sim. O pedido mínimo é de R$ 400,00, com liberdade para escolher produtos sortidos, respeitando os múltiplos de quantidade de cada item." },
    { question: "Quais são as formas de pagamento?", answer: "Aceitamos cartões de crédito, Pix e cartão de débito. Também oferecemos pagamento por boleto, sujeito à análise e aprovação de crédito." },
    { question: "Como recebo o catálogo?", answer: "O catálogo atualizado pode ser solicitado pelo WhatsApp ou por e-mail. Nossa equipe enviará as opções disponíveis para você montar seu pedido." },
    { question: "Os produtos possuem garantia?", answer: "Sim. Os produtos possuem garantia de acordo com as normas, os prazos e as condições estabelecidas por cada fabricante." },
    { question: "Vocês enviam para todo o Brasil?", answer: "Sim. Realizamos entregas em todo o Brasil. As opções de transporte, os prazos e os custos são calculados conforme o destino e o volume do pedido." },
  ];

  const wholesaleWhatsapp = "https://wa.me/5571999285059?text=Olá%2C%20quero%20conhecer%20as%20condições%20para%20compras%20no%20atacado.";

  return (
    <main className="flex-grow pt-20 animate-fade-in-up">
      <section className="border-b border-[#233554] bg-deep-navy">
        <div className="mx-auto grid min-h-[620px] max-w-container-max items-center gap-12 px-margin-mobile py-20 md:grid-cols-12 md:px-margin-desktop md:py-28">
          <div className="md:col-span-7">
            <span className="inline-block rounded-DEFAULT border border-electric-cyan/30 bg-electric-cyan/10 px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Canal B2B</span>
            <h1 className="mt-6 font-headline-lg text-4xl text-on-surface md:font-headline-xl md:text-headline-xl">Seu negócio abastecido com variedade e atendimento próximo</h1>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">Uma área dedicada a lojistas, revendedores e empresas que buscam produtos de procedência e suporte comercial para comprar melhor.</p>
            <a href={wholesaleWhatsapp} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-DEFAULT bg-electric-cyan px-7 py-3.5 font-button text-button uppercase text-deep-navy transition-all hover:shadow-[0_4px_20px_rgba(0,216,255,0.3)]">
              Falar com o setor de atacado
              <span className="material-symbols-outlined text-xl" aria-hidden="true">arrow_forward</span>
            </a>
          </div>
          <div className="hidden md:col-span-5 md:block">
            <img src="/images/real-warehouse.jpg" alt="Corredor de um centro de distribuição com produtos armazenados" className="aspect-square w-full rounded-xl border border-outline-variant object-cover shadow-[0_4px_30px_rgba(0,0,0,0.4)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop md:py-24">
        <div className="mb-12 max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Por que comprar conosco</span>
          <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Estrutura para apoiar sua operação</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-xl border border-outline-variant bg-surface-dark p-8 transition-all hover:border-electric-cyan/50">
              <span className="material-symbols-outlined text-3xl text-electric-cyan" aria-hidden="true">{benefit.icon}</span>
              <h3 className="mt-5 font-headline-md text-headline-md text-on-surface">{benefit.title}</h3>
              <p className="mt-3 font-body-md text-body-md text-on-surface-variant">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#233554] bg-surface-dark/40">
        <div className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop md:py-24">
          <div className="mb-12 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Passo a passo</span>
            <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Como comprar no atacado</h2>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">Um processo comercial direto para entender sua demanda e montar o pedido adequado ao seu negócio.</p>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="relative flex flex-col rounded-xl border border-outline-variant bg-surface-dark p-7">
                <span className="font-label-sm text-4xl font-bold text-electric-cyan/30">{step.number}</span>
                <h3 className="mt-5 font-headline-md text-xl text-on-surface">{step.title}</h3>
                <p className="mt-3 font-body-md text-body-md text-on-surface-variant">{step.text}</p>
                <div className="mt-auto pt-6">
                  <a
                    href={`https://wa.me/5571999285059?text=${encodeURIComponent(step.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${step.button} pelo WhatsApp`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-DEFAULT border border-electric-cyan px-3 py-3 text-center font-button text-sm font-semibold leading-snug text-electric-cyan transition-colors hover:bg-electric-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-deep-navy"
                  >
                    <span className="material-symbols-outlined shrink-0 text-xl" aria-hidden="true">chat</span>
                    <span>{step.button}</span>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-container-max gap-12 px-margin-mobile py-20 md:grid-cols-12 md:px-margin-desktop md:py-24">
        <div className="md:col-span-5">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Para quem é</span>
          <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Atendimento para diferentes modelos de negócio</h2>
          <p className="mt-4 font-body-md text-body-md text-on-surface-variant">O canal de atacado é voltado a quem compra para revenda, uso corporativo ou integração em projetos.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 md:col-span-7">
          {audiences.map((audience) => (
            <li key={audience} className="flex items-center gap-3 rounded-lg border border-outline-variant bg-surface-dark p-5 font-body-md text-on-surface">
              <span className="material-symbols-outlined text-electric-cyan" aria-hidden="true">check_circle</span>
              {audience}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[#233554] bg-surface-dark/40">
        <div className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop md:py-24">
          <div className="mb-12 max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Categorias</span>
            <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Um mix para abastecer sua loja</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article key={category.name} className="group overflow-hidden rounded-xl border border-outline-variant bg-surface-dark transition-all hover:border-electric-cyan/50">
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img src={category.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-xl text-on-surface">{category.name}</h3>
                  <p className="mt-2 font-body-md text-sm text-on-surface-variant">{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop md:py-24">
        <div className="mb-10 text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Parceiros</span>
          <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Marcas presentes no nosso mix</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {brands.map((brand) => (
            <figure key={brand.name} tabIndex={0} className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-deep-navy">
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-outline-variant bg-surface-dark p-6 transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none">
                <img src={brand.image} alt={`Logo ${brand.name}`} className="h-full w-full object-contain" />
              </div>
              <figcaption className="mt-4 text-center font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100">
                {brand.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/parceiros" className="inline-flex items-center gap-2 rounded-DEFAULT border border-electric-cyan px-6 py-3 font-button text-button uppercase text-electric-cyan transition-colors hover:bg-electric-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-deep-navy">
            Ver todos os parceiros
            <span className="material-symbols-outlined text-xl" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
      </section>

      <section className="border-y border-[#233554] bg-surface-dark/40">
        <div className="mx-auto grid max-w-container-max items-center gap-10 px-margin-mobile py-20 md:grid-cols-12 md:px-margin-desktop md:py-24">
          <div className="md:col-span-7">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Área de cobertura</span>
            <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Atendimento local e opções de envio</h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">Conte com atendimento em Salvador e Região Metropolitana e consulte modalidades de envio para outros destinos. Prazos e custos são confirmados conforme endereço e volume do pedido.</p>
          </div>
          <div className="flex justify-center md:col-span-5">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan shadow-[0_0_50px_rgba(0,216,255,0.12)]">
              <span className="material-symbols-outlined text-7xl" aria-hidden="true">local_shipping</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-margin-mobile py-20 md:px-margin-desktop md:py-24">
        <div className="mb-10 text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Dúvidas frequentes</span>
          <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Antes de fazer seu pedido</h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-outline-variant bg-surface-dark p-6 open:border-electric-cyan/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-headline-md text-lg text-on-surface">
                {faq.question}
                <span className="material-symbols-outlined text-electric-cyan transition-transform group-open:rotate-45" aria-hidden="true">add</span>
              </summary>
              <p className="mt-4 border-t border-outline-variant/60 pt-4 font-body-md text-body-md text-on-surface-variant">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-container-max px-margin-mobile pb-24 md:px-margin-desktop">
        <div className="relative overflow-hidden rounded-xl border border-electric-cyan/30 bg-surface-dark p-8 text-center md:p-14">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-cyan/15 blur-[70px]" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Pronto para abastecer seu negócio?</h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">Fale com o setor comercial para receber o catálogo atualizado e consultar as condições disponíveis.</p>
            <a href={wholesaleWhatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-DEFAULT bg-electric-cyan px-7 py-3.5 font-button text-button uppercase text-deep-navy transition-all hover:shadow-[0_4px_20px_rgba(0,216,255,0.3)]">
              Quero comprar no atacado
              <span className="material-symbols-outlined text-xl" aria-hidden="true">chat</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
