import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const featuredPartners = [
  { name: "GET", image: "/images/get.png" },
  { name: "X-Cell", image: "/images/xcell.jpg" },
  { name: "Bright", image: "/images/bright.png" },
  { name: "Maxprint", image: "/images/maxprint.png" },
];

const googleReviews = [
  {
    name: "Alessandro Costa Valiensi",
    text: "Excelente atendimento com cordialidade, qualidade, preço e pontualidade.",
  },
  {
    name: "Hugo Santiago",
    text: "Bom atendimento e variedade de produtos com preços bem acessíveis!",
  },
  {
    name: "Alan Felipe Carneiro da Silva",
    text: "Loja com excelente atendimento e preço!",
  },
];

const googleMapsUrl = "https://www.google.com/maps/place/PV+Brasil+Importa%C3%A7%C3%A3o+-+Salvador/data=!4m6!3m5!1s0x71605898aeaf5a3:0x433b3a7344811cab!8m2!3d-12.9850633!4d-38.5160685!16s%2Fg%2F11n5r51s4w";

export default function Home() {
  const reviewsSectionRef = useRef(null);
  const [reviewsVisible, setReviewsVisible] = useState(false);

  useEffect(() => {
    const section = reviewsSectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReviewsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const renderStars = (prefix) => (
    [1, 2, 3, 4, 5].map((star) => (
      <span
        key={`${prefix}-${star}`}
        className={`material-symbols-outlined filled-star text-xl ${reviewsVisible ? "animate-star-pop" : "opacity-0"}`}
        style={{ animationDelay: `${(star - 1) * 110}ms` }}
        aria-hidden="true"
      >
        star
      </span>
    ))
  );

  return (
    <main className="flex-grow pt-20 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-deep-navy border-b border-[#233554]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover object-right opacity-60 mix-blend-luminosity"
            alt="Hero background"
            src="/images/real-warehouse.jpg"
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-40 flex flex-col justify-center min-h-[716px]">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan font-label-sm text-label-sm rounded-DEFAULT mb-6 backdrop-blur-md uppercase tracking-widest">
              Distribuidora Autorizada
            </span>
            <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-6">
              Distribuidora e Varejista <br />de Eletronicos.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Tecnologia, telefonia, informática e utilidades para lojistas e consumidores, com marcas selecionadas, atendimento especializado e distribuição em toda a Bahia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => window.open('https://wa.me/5571986629647', '_blank')} className="bg-electric-cyan text-deep-navy font-button text-button px-8 py-4 rounded-DEFAULT hover:shadow-[0px_4px_20px_rgba(0,216,255,0.3)] transition-all duration-300 text-center uppercase cursor-pointer">
                Fale com um consultor
              </button>
              <button onClick={() => window.open('https://wa.me/5571999285059', '_blank')} className="bg-transparent border-[1.5px] border-electric-cyan text-electric-cyan font-button text-button px-8 py-4 rounded-DEFAULT hover:bg-electric-cyan/10 transition-all duration-300 text-center uppercase cursor-pointer">
                Setor de Atacado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 border-b border-[#233554]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 bg-surface-dark/50 p-6 rounded-lg border border-[#233554] backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-electric-cyan/10 flex items-center justify-center text-electric-cyan border border-electric-cyan/20">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>local_shipping</span>
            </div>
            <div>
              <h3 className="font-headline-md text-[18px] leading-snug font-semibold text-on-surface">Envio Especializado</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Frota própria com entrega de baixo custo ou gratuita em Salvador e Região Metropolitana, além de envio nacional.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-dark/50 p-6 rounded-lg border border-[#233554] backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-electric-cyan/10 flex items-center justify-center text-electric-cyan border border-electric-cyan/20">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>verified</span>
            </div>
            <div>
              <h3 className="font-headline-md text-[18px] leading-snug font-semibold text-on-surface">Marcas Oficiais</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Distribuidora autorizada PIX, X-Cell, Toshiba, Maketech e Bright.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-dark/50 p-6 rounded-lg border border-[#233554] backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-electric-cyan/10 flex items-center justify-center text-electric-cyan border border-electric-cyan/20">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>shield</span>
            </div>
            <div>
              <h3 className="font-headline-md text-[18px] leading-snug font-semibold text-on-surface">Compra Segura</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Transações criptografadas ponta a ponta para revendedores.</p> {/* num ta erradu isso?*/}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Preview */}
      <section className="max-w-container-max mx-auto px-margin-mobile py-20 md:px-margin-desktop md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Marcas parceiras</span>
            <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Produtos de marcas que o mercado reconhece</h2>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
              Distribuímos produtos de parceiros selecionados para oferecer variedade, procedência e segurança ao seu negócio.
            </p>
          </div>
          <Link to="/parceiros" className="w-fit rounded-DEFAULT border border-electric-cyan px-6 py-3 font-button text-button uppercase text-electric-cyan transition-colors hover:bg-electric-cyan/10">
            Ver todos os parceiros
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featuredPartners.map((partner) => (
            <div key={partner.name} className="flex aspect-[4/3] items-center justify-center rounded-xl border border-outline-variant bg-surface-dark p-6 transition-all hover:border-electric-cyan/50 hover:shadow-[0_4px_20px_rgba(0,216,255,0.12)]">
              <img src={partner.image} alt={`Logo ${partner.name}`} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section ref={reviewsSectionRef} className="border-y border-[#233554] bg-surface-dark/40">
        <div className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop md:py-24">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Avaliações no Google</span>
              <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">A experiência de quem já comprou com a gente</h2>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">Comentários públicos e reais do perfil da PV Brasil Importação em Salvador.</p>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-outline-variant bg-surface-dark px-5 py-4">
              <span className="font-headline-lg text-4xl text-on-surface">5,0</span>
              <div>
                <div className="flex text-electric-cyan" aria-label="5 de 5 estrelas">
                  {renderStars("summary")}
                </div>
                <p className="mt-1 font-body-md text-sm text-on-surface-variant">29 avaliações no Google</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {googleReviews.map((review) => (
              <article key={review.name} className="flex min-h-64 flex-col justify-between rounded-xl border border-outline-variant bg-surface-dark p-7 transition-all hover:border-electric-cyan/50 hover:shadow-[0_4px_20px_rgba(0,216,255,0.1)]">
                <div>
                  <div className="flex text-electric-cyan" aria-label="5 de 5 estrelas">
                    {renderStars(review.name)}
                  </div>
                  <blockquote className="mt-5 font-body-lg text-body-lg text-on-surface">“{review.text}”</blockquote>
                </div>
                <div className="mt-7 border-t border-outline-variant/60 pt-5">
                  <p className="font-button text-button text-on-surface">{review.name}</p>
                  <p className="mt-1 font-label-sm text-label-sm text-on-surface-variant">Avaliação pública no Google</p>
                </div>
              </article>
            ))}
          </div>

          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-DEFAULT border border-electric-cyan px-6 py-3 font-button text-button uppercase text-electric-cyan transition-colors hover:bg-electric-cyan/10">
            Ver todas no Google
            <span className="material-symbols-outlined text-xl" aria-hidden="true">open_in_new</span>
          </a>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="mx-auto w-full max-w-container-max px-margin-mobile py-20 md:px-margin-desktop md:py-24">
        <div className="relative overflow-hidden rounded-xl border border-electric-cyan/30 bg-surface-dark p-8 md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-electric-cyan/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Atendimento para empresas</span>
            <h2 className="mt-3 font-headline-lg text-headline-lg text-on-surface">Condições pensadas para quem compra no atacado</h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">Conheça o canal exclusivo para lojistas, revendedores e empresas e fale diretamente com nosso setor comercial.</p>
            <Link to="/atacado" className="mt-8 inline-flex rounded-DEFAULT bg-electric-cyan px-7 py-3.5 font-button text-button uppercase text-deep-navy transition-all hover:shadow-[0_4px_20px_rgba(0,216,255,0.3)]">
              Conhecer o atacado
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
