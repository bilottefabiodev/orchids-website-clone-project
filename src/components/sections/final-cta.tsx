import React from 'react';
import Image from 'next/image';

const FinalCtaSection = () => {
  return (
    <section id="final-cta" className="relative bg-background-primary py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <p className="font-display font-bold text-[200px] md:text-[300px] lg:text-[430px] leading-none text-white opacity-[0.03]">
          DECISÃO
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-xl">
          <div className="inline-block border border-border-subtle rounded-3xl px-4 py-[3px] mb-6">
            <p className="font-body text-sm text-text-secondary">A decisão</p>
          </div>

          <div className="flex items-start gap-4 md:gap-6 mb-6">
            <div className="flex-shrink-0 pt-2">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/26a0-4.svg"
                alt="Warning icon"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-text-primary !leading-tight">
              Últimas Vagas<br />Disponíveis
            </h2>
          </div>

          <div className="space-y-4 text-lg text-text-secondary font-body max-w-lg">
            <p>
              Este é um workshop <strong className="font-bold text-text-primary">AO VIVO</strong>, e por questões técnicas e de qualidade, eu limitei as vagas a <strong className="font-bold text-text-primary">200 pessoas.</strong>
            </p>
            <p className="font-bold text-xl text-text-primary !mt-6">
              Vagas restantes: 87
            </p>
            <p>
              Quando acabar, acabou. Não vai ter <strong className="font-bold text-text-primary">"link de acesso depois"</strong> ou <strong className="font-bold text-text-primary">"gravação disponível".</strong>
            </p>
            <p className="!mt-2">
              Ou você garante sua vaga agora, ou vai ficar de fora.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#oferta"
              className="inline-block bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-primary-foreground font-bold uppercase rounded-full py-4 px-10 text-center tracking-wider shadow-[0_4px_20px_rgba(232,103,63,0.3)] transition-transform duration-300 hover:scale-105"
            >
              Garantir Ingresso | Lote 01
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;