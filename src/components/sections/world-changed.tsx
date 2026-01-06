import Image from "next/image";

const WaveArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1273"
    height="233"
    viewBox="0 0 1273 233"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 116.5C1 116.5 174.5 238.5 410.5 125.5C646.5 12.5002 612.433 1 847.5 1C1082.57 1 1144 116.5 1272 174.5"
      stroke="url(#paint0_linear_4039_588)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4039_588"
        x1="1"
        y1="96"
        x2="1225.5"
        y2="96"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-accent-gradient-start)" />
        <stop offset="1" stopColor="var(--color-accent-gradient-end)" />
      </linearGradient>
    </defs>
  </svg>
);

const WorldChanged = () => {
  return (
    <section className="bg-background-light text-text-dark">
      <div className="container mx-auto pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 items-center">
          <div className="text-center lg:text-left mb-16 lg:mb-0">
            <h2
              className="font-display text-8xl md:text-9xl lg:text-[150px] leading-none text-text-dark"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              O mundo mudou
            </h2>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <span className="font-body text-sm font-bold text-text-dark-alt border border-[#d2d2d2] rounded-full px-4 py-1">
              Tudo mudou!
            </span>

            <h3
              className="font-display text-3xl sm:text-[40px] text-text-dark leading-tight"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Hoje você tem acesso aos sistemas de IA que eram luxo das
              gigantes <span className="text-gradient-primary">bilionárias.</span>
            </h3>

            <div className="flex flex-col gap-y-3">
              <p className="flex items-center justify-center lg:justify-start text-xl font-bold text-text-dark-alt gap-2">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/1f92f-1.svg"
                  alt="Exploding head emoji"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                Tem noção da loucura que é isso?
              </p>
              <p className="text-base text-text-dark-alt leading-relaxed">
                <b>Traduzindo:</b> você tá diante da janela de oportunidade mais{" "}
                <b className="font-bold">bizarra</b> da história!
              </p>
            </div>

            <div className="mt-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/Selos-redes-sociais-2.avif"
                alt="Logos of Meta, Netflix, Amazon, Adobe, and Apple"
                width={800}
                height={254}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>

          <div className="lg:col-span-2 w-full mt-16 md:mt-24 lg:mt-8 -mb-20 sm:-mb-24 md:-mb-32 lg:-mb-40">
            <WaveArrowIcon className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldChanged;