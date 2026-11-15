import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { CONTACT, whatsappLink } from "../data/contact";

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

const googleMapsUrl = CONTACT.mapsUrl;

export default function Home() {
  usePageTitle();
  const videoRef = useRef(null);
  const [videoRevealed, setVideoRevealed] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const reviewsSectionRef = useRef(null);
  const [reviewsVisible, setReviewsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let inView = false;
    const updatePlayback = () => {
      if (inView && !document.hidden) {
        // Browsers may block playback; native controls remain available.
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        if (inView) setVideoRevealed(true);
        updatePlayback();
      },
      { threshold: [0, 0.35] },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, []);

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
            className="w-full h-full object-cover object-[center_25%] opacity-60 mix-blend-luminosity"
            alt="Fachada da PV Brasil Importação"
            src="/images/m.jpg"
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-40 flex flex-col justify-center min-h-[716px]">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan font-label-sm text-label-sm rounded-DEFAULT mb-6 backdrop-blur-md uppercase tracking-widest">
              Distribuidora Autorizada
            </span>
            <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-6">
              Distribuidora e Varejista <br />de Eletrônicos.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Tecnologia, telefonia, informática e utilidades para lojistas e consumidores, com marcas selecionadas, atendimento especializado e distribuição em toda a Bahia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => window.open(whatsappLink(CONTACT.whatsappRetail), '_blank', 'noopener')} className="bg-electric-cyan text-deep-navy font-button text-button px-8 py-4 rounded-DEFAULT hover:shadow-[0px_4px_20px_rgba(0,216,255,0.3)] transition-all duration-300 text-center uppercase cursor-pointer">
                Fale com um consultor
              </button>
              <button onClick={() => window.open(whatsappLink(CONTACT.whatsappWholesale), '_blank', 'noopener')} className="bg-transparent border-[1.5px] border-electric-cyan text-electric-cyan font-button text-button px-8 py-4 rounded-DEFAULT hover:bg-electric-cyan/10 transition-all duration-300 text-center uppercase cursor-pointer">
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
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>workspace_premium</span>
            </div>
            <div>
              <h3 className="font-headline-md text-[18px] leading-snug font-semibold text-on-surface">Garantia de Fábrica</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Produtos originais com garantia conforme as condições de cada fabricante.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="home-video-title" className="mx-auto max-w-container-max px-margin-mobile pt-20 md:px-margin-desktop md:pt-24">
        <div className="mb-8 max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-electric-cyan">Conheça a PV Brasil</span>
          <h2 id="home-video-title" className="mt-3 font-headline-lg text-headline-lg text-on-surface">Veja de perto a nossa loja</h2>
        </div>
        <div className={`home-reel mx-auto overflow-hidden rounded-xl border border-outline-variant bg-black ${videoRevealed ? "home-reel-revealed" : ""}`}>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            controls
            muted={videoMuted}
            onVolumeChange={(event) => setVideoMuted(event.currentTarget.muted || event.currentTarget.volume === 0)}
            playsInline
            preload="metadata"
            aria-label="Vídeo de apresentação da PV Brasil"
          >
            <source src="/AQO0twbSUrMTubI5A3cveGf0N26JQOJiPUBLxJVIP2gAQkLV727TnXihG27O7Sf2or3ajoVrs1dbD_6SiPqGnZKYoXYO5QtVRYLLWXY.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
          <div className="home-reel-gradient" aria-hidden="true" />
          <button
            type="button"
            aria-label={videoMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
            aria-pressed={!videoMuted}
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;
              video.muted = !videoMuted;
              if (videoMuted && video.volume === 0) video.volume = 1;
              setVideoMuted(video.muted);
            }}
            className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-electric-cyan/40 bg-deep-navy/90 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-deep-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-cyan"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">{videoMuted ? "volume_off" : "volume_up"}</span>
            {videoMuted ? "Ativar som" : "Desativar som"}
          </button>
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
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">Avaliações de quem compra com a gente e aprova!</p>
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
