export default function Location() {
  return (
    <main className="flex-grow pt-[120px] pb-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto animate-fade-in-up">
      <header className="mb-16">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">Nossa Localização</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Visite nossas unidades na Bahia. Espaços meticulosamente projetados para demonstrar a excelência do hardware em um ambiente imersivo, combinando consultoria técnica especializada com uma experiência tátil incomparável.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-24">
        <div className="lg:col-span-8 bg-surface-dark rounded-xl border border-outline-variant overflow-hidden relative min-h-[500px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] group hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-shadow duration-300 flex flex-col">
          <div className="w-full flex-grow relative bg-surface-dim">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7933807994477!2d-38.51864692575396!3d-12.985063260078435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71605898aeaf5a3%3A0x433b3a7344811cab!2sPV%20Brasil%20Importa%C3%A7%C3%A3o%20-%20Salvador!5e0!3m2!1sen!2sbr!4v1778860007984!5m2!1sen!2sbr"
              className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-surface-dark rounded-xl border border-outline-variant p-8 relative overflow-hidden group hover:border-electric-cyan/50 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-all duration-300 flex-1">
            <div className="w-10 h-10 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-electric-cyan" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>storefront</span>
            </div>
            <span className="font-label-sm text-label-sm text-electric-cyan mb-4 block">NOSSAS UNIDADES</span>
            <div className="flex flex-col gap-4 mb-8">
              <address className="not-italic font-body-md text-body-md text-on-surface-variant">
                <strong className="text-on-surface block mb-1">Loja Barris</strong>
                Rua do Salete, 64<br />
                Barris, Salvador - BA
              </address>
            </div>
            <a href="https://www.google.com/maps/place/PV+Brasil+Importa%C3%A7%C3%A3o+-%20Salvador/data=!3m1!4b1!4m6!3m5!1s0x71605898aeaf5a3:0x433b3a7344811cab!8m2!3d-12.9850633!4d-38.5160685!16s%2Fg%2F11n5r51s4w?entry=ttu" target="_blank" rel="noopener noreferrer" className="w-full bg-transparent border-[1.5px] border-electric-cyan text-electric-cyan font-button text-button py-3 px-6 rounded hover:bg-electric-cyan/10 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>directions</span>
              Obter Direções
            </a>
          </div>

          <div className="bg-surface-dark rounded-xl border border-outline-variant p-8 relative overflow-hidden group hover:border-electric-cyan/50 hover:shadow-[0px_4px_20px_rgba(0,216,255,0.15)] transition-all duration-300 flex-1">
            <div className="w-10 h-10 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-electric-cyan" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>schedule</span>
            </div>
            <span className="font-label-sm text-label-sm text-electric-cyan mb-4 block">HORÁRIO DE FUNCIONAMENTO</span>
            <ul className="flex flex-col gap-4 w-full">
              <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                <span className="font-body-md text-body-md text-on-surface-variant">Segunda - Sexta</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                <span className="font-body-md text-body-md text-on-surface-variant">Sábado</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">08:00 - 15:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-on-surface-variant">Domingo</span>
                <span className="font-label-sm text-label-sm text-electric-cyan/70 bg-electric-cyan/10 px-2 py-1 rounded">Fechado</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
