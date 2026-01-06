import Image from "next/image";
import React from "react";

// The star icon with a radial gradient, as seen on the original site.
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient
        id="paint0_radial_why_cheap"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(16 16) rotate(90) scale(16)"
      >
        <stop stopColor="#D15449" />
        <stop offset="1" stopColor="#F2B263" />
      </radialGradient>
    </defs>
    <path
      d="M16 0L18.8284 13.1716L32 16L18.8284 18.8284L16 32L13.1716 18.8284L0 16L13.1716 13.1716L16 0Z"
      fill="url(#paint0_radial_why_cheap)"
    />
  </svg>
);

const WhyCheapSection = () => {
  return (
    <section className="bg-background-primary text-text-primary py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
            {/* Background Polaroid - Rotated Right */}
            <div className="absolute bg-white p-4 pb-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform rotate-3 transition-transform duration-300 hover:rotate-6">
              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/CTA-FOTO-AMANDA2-15.avif"
                  alt="Amanda Lourenço com seu parceiro"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 250px, 300px"
                />
              </div>
            </div>
            {/* Foreground Polaroid - Rotated Left */}
            <div className="relative bg-white p-4 pb-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform -rotate-3 transition-transform duration-300 hover:-rotate-6">
              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/CTA-FOTO-AMANDA2-15.avif"
                  alt="Amanda Lourenço com seu parceiro"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 250px, 300px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col [text-wrap:balance]">
            <h2 className="font-display text-[52px] leading-none text-white">
              Por que tão barato?
            </h2>
            <p className="font-body text-lg text-text-secondary mt-8">
              Deixa eu ser direta com você:
            </p>
            <p className="font-body text-lg text-text-secondary mt-4 leading-relaxed">
              Eu poderia cobrar R$ 997 por esse workshop. Mas a verdade é que{" "}
              <span className="text-gradient-primary font-bold">
                eu ganho dinheiro aplicando IA em empresas, não vendendo curso
                de IA.
              </span>
            </p>
            <p className="font-body text-lg text-text-secondary mt-4 leading-relaxed">
              Este workshop é a porta de entrada para você conhecer meu
              trabalho.
            </p>
            <p className="font-body text-lg text-text-secondary mt-4 leading-relaxed">
              Alguns alunos vão adorar, implementar sozinhos e ter ótimos
              resultados (e eu fico feliz com isso).
            </p>
            <p className="font-body text-lg text-text-secondary mt-4 leading-relaxed">
              Outros vão perceber que precisam de ajuda para implementar no
              nível que empresas de 7-8 dígitos implementam... e aí sim, vão
              contratar minha agência.
            </p>

            <h3 className="font-body text-2xl font-bold text-white mt-10">
              É um ganha-ganha:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 text-left items-start">
                <StarIcon />
                <p className="text-text-secondary text-base leading-relaxed">
                  Você tem acesso a conteúdo de alto nível por um preço simbólico
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 text-left items-start">
                <StarIcon />
                <p className="text-text-secondary text-base leading-relaxed">
                  Mostro na prática o que sei fazer (e algumas pessoas vão
                  querer ir mais fundo)
                </p>
              </div>
            </div>
            
            <h3 className="font-body text-2xl text-white font-bold mt-10">
              Simples assim!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCheapSection;