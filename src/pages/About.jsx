export default function About() {
  return (
    <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 flex flex-col gap-6 z-10">
          <span className="font-label-sm text-label-sm text-electric-cyan uppercase tracking-wider bg-electric-cyan/10 px-3 py-1 rounded-full w-fit">Nossa História</span>
          <h1 className="font-headline-xl text-headline-xl text-white leading-tight">
            Distribuição e Atacado de <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-muted-teal">Excelência</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Fundada em Feira de Santana, Bahia, no ano de 2022, a PV Brasil destaca-se como distribuidora e atacadista de tecnologia. Somos especialistas em importação de eletrônicos e atuamos como distribuidores autorizados das principais marcas mundiais.
          </p>
        </div>
        <div className="md:col-span-7 relative">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#233554] shadow-[0px_4px_30px_rgba(0,0,0,0.5)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark/80 via-transparent to-transparent z-10 mix-blend-multiply"></div>
            <img alt="High-tech warehouse operations" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/m.jpg" />
          </div>
          {/* Glass accent */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-electric-cyan/20 blur-[60px] rounded-full z-0"></div>
        </div>
      </section>

      {/* Mission Bento Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-dark border border-[#233554] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-electric-cyan/30 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-electric-cyan text-3xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>public</span>
                <h2 className="font-headline-md text-headline-md text-white">Nossa Missão</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Democratizar o acesso à tecnologia de elite no Brasil através de uma cadeia de suprimentos otimizada, transparente e rigorosamente controlada. Garantimos que cada componente importado chegue ao destino final com sua integridade e performance originais preservadas.
              </p>
            </div>
          </div>
          
          <div className="bg-surface-dark border border-[#233554] rounded-xl p-8 flex flex-col gap-4 group hover:border-electric-cyan/30 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.1)] transition-all duration-300">
            <span className="material-symbols-outlined text-electric-cyan text-3xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>verified</span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white">Autenticidade</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Certificação de origem para 100% do nosso portfólio. Tolerância zero para falsificações.
            </p>
          </div>
          
          <div className="bg-surface-dark border border-[#233554] rounded-xl p-8 flex flex-col gap-4 group hover:border-electric-cyan/30 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.1)] transition-all duration-300 md:col-start-3 md:row-start-1">
            <span className="material-symbols-outlined text-electric-cyan text-3xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>speed</span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white">Agilidade</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Logística internacional avançada para reduzir prazos e otimizar custos de importação.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">Pilares da Nossa Operação</h2>
          <div className="w-16 h-1 bg-electric-cyan mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface/50 backdrop-blur-md border border-outline-variant hover:border-electric-cyan/50 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-all duration-300 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-deep-navy border border-electric-cyan/30 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-electric-cyan" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>precision_manufacturing</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-white mb-2 text-lg">Qualidade Exata</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Curadoria técnica de marcas globais renomadas.
            </p>
          </div>
          
          <div className="bg-surface/50 backdrop-blur-md border border-outline-variant hover:border-electric-cyan/50 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-all duration-300 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-deep-navy border border-electric-cyan/30 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-electric-cyan" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>shield_locked</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-white mb-2 text-lg">Segurança</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Processos aduaneiros 100% transparentes e em conformidade.
            </p>
          </div>
          
          <div className="bg-surface/50 backdrop-blur-md border border-outline-variant hover:border-electric-cyan/50 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-all duration-300 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-deep-navy border border-electric-cyan/30 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-electric-cyan" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>support_agent</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-white mb-2 text-lg">Suporte Especializado</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Atendimento B2B focado em resolver gargalos técnicos.
            </p>
          </div>
          
          <div className="bg-surface/50 backdrop-blur-md border border-outline-variant hover:border-electric-cyan/50 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-all duration-300 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-deep-navy border border-electric-cyan/30 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-electric-cyan" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>hub</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-white mb-2 text-lg">Rede Global</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Parcerias diretas com fabricantes na Ásia e América do Norte.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
