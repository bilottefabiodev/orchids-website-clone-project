import React from 'react';

const GuaranteeSection = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Risco Zero
          </p>

          <div className="relative my-12 flex h-[300px] w-[300px] md:h-[350px] md:w-[350px] items-center justify-center">
            {/* Outer spinning rings */}
            <div
              className="absolute inset-0 animate-spin rounded-full border border-dashed border-primary/30"
              style={{ animationDuration: '30s' }}
            />
            <div
              className="absolute inset-8 animate-spin rounded-full border border-dashed border-primary/30"
              style={{ animationDuration: '25s', animationDirection: 'reverse' }}
            />
            <div
              className="absolute inset-16 animate-spin rounded-full border border-dashed border-primary/30"
              style={{ animationDuration: '20s' }}
            />

            {/* Central static element */}
            <div className="relative flex h-[192px] w-[192px] md:h-[224px] md:w-[224px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[6px] border-dotted border-primary/80"></div>
              <div className="z-10 flex flex-col items-center justify-center">
                <span className="font-display text-7xl font-bold leading-none text-primary md:text-8xl">
                  7
                </span>
                <span className="mt-1 font-body text-sm font-bold tracking-[0.3em] text-primary md:text-base">
                  DIAS
                </span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Garantia Incondicional de 7 Dias
          </h2>

          <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl">
            Se até 7 dias após o workshop você achar que não valeu a pena, é só me mandar um e-mail e eu devolvo 100% do seu investimento.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;