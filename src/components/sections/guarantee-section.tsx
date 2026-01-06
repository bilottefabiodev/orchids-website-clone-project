import React from 'react';

const GuaranteeBadge = () => {
  return (
    <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]">
      {/* Dashed rings */}
      <div className="absolute inset-0 border border-dashed border-accent/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute inset-[15%] border border-dashed border-accent/20 rounded-full animate-[spin_50s_linear_infinite_reverse]"></div>
      <div className="absolute inset-[30%] border border-dashed border-accent/20 rounded-full animate-[spin_40s_linear_infinite]"></div>
      
      {/* Central dotted pattern and text */}
      <div
        className="absolute w-[45%] h-[45%] rounded-full flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: 'radial-gradient(var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      >
        <div className="relative">
          <span className="font-display text-gradient-primary text-[110px] sm:text-[140px] lg:text-[180px] leading-none">
            7
          </span>
          <span className="block font-display text-white text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] -mt-1 sm:-mt-2 lg:-mt-4">
            DIAS
          </span>
        </div>
      </div>
    </div>
  );
};

const GuaranteeSection = () => {
  return (
    <section className="bg-background-primary py-24 md:py-32 relative overflow-hidden">
      {/* Background concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[50vw] max-w-[800px] aspect-square rounded-full border border-accent/10"></div>
        <div className="absolute w-[70vw] max-w-[1100px] aspect-square rounded-full border border-accent/10"></div>
        <div className="absolute w-[90vw] max-w-[1400px] aspect-square rounded-full border border-accent/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <GuaranteeBadge />
          
          <div className="border border-white/10 rounded-full px-5 py-2 -mt-10 sm:-mt-12 z-10 bg-background-primary">
            <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-widest text-text-secondary">
              Risco Zero
            </p>
          </div>
        </div>

        <h2 className="font-display text-3xl md:text-4xl text-white mt-12 mb-6 max-w-xl">
          Garantia Incondicional de 7 Dias
        </h2>

        <p className="font-body text-text-secondary text-base md:text-lg max-w-xl lg:max-w-2xl leading-relaxed">
          Se até 7 dias após o workshop você achar que não valeu a pena, é só me mandar um e-mail e eu devolvo 100% do seu investimento.
          <br /><br />
          Sem perguntas, sem burocracia.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;