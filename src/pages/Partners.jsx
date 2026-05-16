export default function Partners() {
  const partners = [
    { id: "get", name: "GET", image: "/images/get.png" },
    { id: "fiolux", name: "Fiolux", image: "/images/fiolux.png" },
    { id: "x-cell", name: "X-Cell", image: "/images/xcell.jpg" },
    { id: "bright", name: "Bright", image: "/images/bright.png" },
    { id: "maxprint", name: "Maxprint", image: "/images/maxprint.png" },
    { id: "aquario", name: "Aquário", image: "/images/gluglu.png", scale: "scale-150" },
    { id: "waveone", name: "Waveone", image: "/images/waveone.png" },
    { id: "brasforma", name: "Brasforma", image: "/images/brasforma.jpg" }
  ];

  return (
    <main className="flex-grow pt-[120px] pb-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto animate-fade-in-up">
      <header className="mb-16 text-center">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">Nossos Parceiros</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          Trabalhamos com as melhores marcas do mercado para garantir produtos de alta qualidade, confiabilidade e inovação. Conheça as marcas que confiam na distribuição da PV Brasil.
        </p>
        <div className="w-16 h-1 bg-electric-cyan mx-auto rounded-full mt-8"></div>
      </header>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-surface-dark border border-outline-variant hover:border-electric-cyan/50 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-all duration-300 rounded-xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer aspect-square">
              {/* Container da Imagem */}
              <div className="w-full h-full mb-4 flex items-center justify-center">
                <img
                  // Se houver uma imagem (partner.image), ele usa. Se não tiver, usa o quadrado transparente (placeholder).
                  src={partner.image || "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='transparent'/%3E%3C/svg%3E"}
                  alt={`Logo ${partner.name}`}
                  // Se for o placeholder transparente, deixamos a opacidade baixa, se não, usamos a imagem com opacidade 100% arredondada.
                  className={`w-full h-full object-contain transition-all duration-300 rounded-md ${partner.image ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'} ${partner.scale || ''}`}
                />
              </div>
              <h3 className="font-label-sm text-electric-cyan uppercase tracking-widest">{partner.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
