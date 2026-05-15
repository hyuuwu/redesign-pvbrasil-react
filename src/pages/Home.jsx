export default function Home() {
  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-deep-navy border-b border-[#233554]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover object-right opacity-60 mix-blend-luminosity"
            alt="Hero background"
            src="/images/hero.jpg"
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
              Especializada em hardware (PC Gamer), telefonia e utilidades. Somos distribuidores autorizados das marcas PIX, X-Cell, Toshiba, Maketech e Bright.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => window.open('https://wa.me/5571981921193', '_blank')} className="bg-electric-cyan text-deep-navy font-button text-button px-8 py-4 rounded-DEFAULT hover:shadow-[0px_4px_20px_rgba(0,216,255,0.3)] transition-all duration-300 text-center uppercase cursor-pointer">
                Falar com Consultor
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
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Transações criptografadas ponta a ponta para revendedores.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
