import Image from 'next/image';

const ResultsShowcase = () => {
  return (
    <section className="bg-background-primary py-16 md:py-24">
      <div className="container">
        <div className="bg-background-tertiary border border-dashed border-border-subtle rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-12">
            <div className="lg:col-span-3 flex flex-col gap-8 w-full">
              <h2 className="font-display text-7xl md:text-[96px] leading-none text-white text-center lg:text-left">
                R$0 <span className="text-gradient-primary">→ R$500k</span>
              </h2>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-0-A-500K-DESKTOP-10.avif"
                alt="Gráfico de resultados mostrando o crescimento de uma conta de 1.832 para 80.9 mil seguidores, e um painel de faturamento mostrando R$514 mil."
                width={472}
                height={222}
                className="w-full max-w-[472px] h-auto rounded-lg mx-auto lg:mx-0"
              />
            </div>

            <div className="lg:col-span-2 w-full">
              <p className="font-body text-xl md:text-2xl leading-relaxed text-text-secondary text-center lg:text-left">
                Vou abrir como saí do 0 aos 500k em 6 meses, sem time, aplicando IA na minha operação como mentora e prestadora de serviço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;