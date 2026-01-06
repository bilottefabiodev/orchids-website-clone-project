import Image from "next/image";

const AiLeveledPlayingField = () => {
  return (
    <section className="bg-background-primary pt-24 pb-48 md:pb-64">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative bg-[#E8E6E3] rounded-[30px] text-text-dark pt-16 md:pt-24 pb-64 md:pb-[320px] lg:pb-[350px]">
          <div className="px-6 lg:px-20 text-center max-w-4xl mx-auto">
            <p className="font-display text-base font-bold uppercase tracking-wider text-text-dark/60">
              Tudo mudou!
            </p>
            <h2 className="font-display text-4xl md:text-[42px] leading-tight font-bold mt-4 text-balance text-text-dark">
              <span className="text-gradient-primary">IA nivelou o jogo</span> -
              2025 é o último ano em que IA é &apos;novidade&apos;
            </h2>
          </div>

          <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-x-12 gap-y-16 items-center px-4 sm:px-6 lg:px-16">
            <div className="relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/PRINT-NOTICIAS-3.png"
                alt="Colagem de notícias sobre o crescimento da Inteligência Artificial"
                width={871}
                height={391}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-8 items-center lg:items-start lg:pl-8">
              <div className="text-center lg:text-left">
                <p className="font-display font-bold text-5xl md:text-6xl text-text-dark">
                  132%
                </p>
                <p className="font-supporting text-base md:text-lg text-text-dark/80 mt-1">
                  de crescimento de 2022 vs 2025
                </p>
              </div>

              <svg
                width="42"
                height="65"
                viewBox="0 0 42 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-8 self-center lg:self-start"
              >
                <path
                  d="M1 1C1 1 20.6667 21.6667 1 42.3333C-18.6667 63 41 64 41 64"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="text-center lg:text-left">
                <p className="font-display font-bold text-5xl md:text-6xl text-text-dark leading-tight">
                  U$ 391
                  <br />
                  bilhões
                </p>
                <p className="font-supporting text-base md:text-lg text-text-dark/80 mt-2">
                  de valor no mercado de AI
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[85%] max-w-7xl translate-y-[20%] sm:translate-y-[25%] lg:translate-y-[30%]">
            <div className="relative bg-[#191919] rounded-[30px] p-8 md:p-12 lg:p-16 w-full grid lg:grid-cols-2 lg:gap-12 items-center min-h-[300px] md:min-h-[340px]">
              <div className="text-white text-balance z-10">
                <h3 className="font-display text-4xl leading-tight md:text-5xl font-bold">
                  Por isso, em 2 dias juntos, vamos:
                </h3>
                <p className="font-body text-xl text-text-secondary mt-6 max-w-md">
                  <strong className="text-white font-bold">
                    Automatizar seu negócio com IA e cobrar 2x mais
                  </strong>{" "}
                  pelo seu serviço ou mentoria, plugando IA na entrega que você
                  já faz.
                </p>
              </div>
              <div className="hidden lg:block absolute inset-0 bg-cover bg-right bg-no-repeat rounded-[30px]">
                 {/* The image of the woman is part of the layout but not provided as an asset. 
                    If it were provided, it would be structured like this:
                    <Image src="/path-to-woman-image.avif" layout="fill" objectFit="contain" objectPosition="right" alt="Amanda Lourenço" className="rounded-[30px]" /> 
                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiLeveledPlayingField;