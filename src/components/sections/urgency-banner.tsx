import React from 'react';
import { TriangleAlert } from 'lucide-react';

const UrgencyBanner = () => {
  return (
    <section 
      id="urgency"
      className="relative bg-[#0A0A0A] text-white py-24 md:py-32 overflow-hidden"
    >
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        aria-hidden="true"
      >
        <p 
          className="font-display font-bold uppercase select-none leading-none text-white/[.03] text-[18rem] md:text-[24rem] lg:text-[32rem]"
        >
          Decisão
        </p>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 max-w-6xl mx-auto items-start">
          
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            <span className="border border-white/30 rounded-md px-3 py-1.5 text-sm font-body mb-6">
              A decisão
            </span>
            <div className="flex items-start gap-4 md:gap-6 mb-[2.875rem]">
              <TriangleAlert className="h-12 w-12 md:h-16 md:w-16 text-[#F2B263] flex-shrink-0 mt-1" />
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.1] text-white">
                Últimas Vagas Disponíveis
              </h2>
            </div>
            <a 
              href="#oferta"
              className="text-white font-bold uppercase text-base md:text-lg bg-gradient-to-r from-[#D15449] via-[#E88B4E] to-[#F2B263] rounded-lg px-8 py-4 md:px-10 md:py-5 shadow-lg hover:shadow-[0_8px_30px_rgba(209,84,73,0.3)] transition-all duration-300 transform hover:scale-105"
            >
              GARANTIR INGRESSO | LOTE 01
            </a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-[#C7C7C7]">
              Este é um workshop AO VIVO, e por questões técnicas e de qualidade, eu limitei as vagas a 200 pessoas.
            </p>
            <p className="text-2xl font-bold text-white">
              Vagas restantes: 87
            </p>
            <p className="text-base leading-relaxed text-[#C7C7C7]">
              Quando acabar, acabou. Não vai ter "link de acesso depois" ou "gravação disponível".
            </p>
            <p className="text-base font-bold text-white leading-relaxed">
              Ou você garante sua vaga agora, ou vai ficar de fora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;