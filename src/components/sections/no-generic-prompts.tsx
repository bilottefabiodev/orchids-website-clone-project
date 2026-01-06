import React from 'react';

const StarIcon = () => (
  // The dimensions and path are derived from inspecting the live website as assets were not provided.
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="star-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.6879 14.1953) rotate(90) scale(14.5)">
        <stop stopColor="var(--color-accent-gradient-start)" />
        <stop offset="1" stopColor="var(--color-accent-gradient-end)" />
      </radialGradient>
    </defs>
    <path 
      d="M14.6725 3.32185L17.3323 8.78443C17.521 9.17066 17.8943 9.42845 18.3245 9.46747L24.3211 9.98668C25.4385 10.0811 25.8824 11.4586 25.0416 12.2155L20.4721 16.3216C20.1601 16.5991 20.0177 17.027 20.0911 17.447L21.411 23.3271C21.6441 24.4239 20.5057 25.2673 19.5447 24.7171L14.2863 21.688C13.9168 21.4722 13.4682 21.4722 13.0987 21.688L7.84022 24.7171C6.87926 25.2673 5.74087 24.4239 5.97395 23.3271L7.29388 17.447C7.36725 17.027 7.22485 16.5991 6.91285 16.3216L2.34336 12.2155C1.50257 11.4586 1.94645 10.0811 3.06385 9.98668L9.06048 9.46747C9.49069 9.42845 9.86396 9.17066 10.0527 8.78443L12.7125 3.32185C13.2386 2.27411 14.1464 2.27411 14.6725 3.32185Z" 
      fill="url(#star-gradient)"
      transform="translate(0.5, 1)"
    />
  </svg>
);

const NoGenericPrompts = () => {
  const benefits = [
    {
      title: "IA produzindo conteúdo autêntico que vende",
      description: "Nada de prompt genérico ou conteúdo robótico, a IA vai falar com a sua voz."
    },
    {
      title: "Agente personalizado de vendas.",
      description: "Vou te mostrar o jeito mais fácil de ter um agente de vendas que realmente funciona, sem N8N ou caminhos complexos."
    },
    {
      title: "Agente de suporte aos alunos.",
      description: "Reduzindo seu suporte manual, liberando você para crescer o negócio."
    },
    {
      title: "Eliminação de tarefas operacionais repetitivas.",
      description: "Você para de gastar tempo com “tarefas novas” que não geram dinheiro e passa a focar no que importa: Receita."
    }
  ];

  return (
    <section className="bg-[#E8E6E3] text-[#1A1A1A] py-24 sm:py-32">
      <div className="container">
        <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="font-display text-text-primary text-3xl md:text-4xl lg:text-[42px] leading-tight max-w-4xl mx-auto" style={{ textWrap: 'balance' } as React.CSSProperties}>
            <span className="block font-body text-text-secondary text-sm md:text-base font-normal tracking-wide uppercase mb-4">
              Nada de prompts genéricos!
            </span>
            <span className="text-gradient-primary">Chega de prompt genérico</span>, IA tem que facilitar sua vida. Em dois dias você vai sair plano para:
          </h2>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {benefits.map((item, index) => (
              <div key={index} className="bg-[#1E1E1E] border border-[hsla(0,0%,100%,.1)] rounded-2xl p-8">
                <StarIcon />
                <h3 className="font-body text-lg font-bold text-text-primary mt-6 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-base text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoGenericPrompts;