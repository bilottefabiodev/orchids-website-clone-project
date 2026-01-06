import type { NextPage } from 'next';

const features = [
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

const FeatureIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.1333 13.8667L18.6667 10.4L22.1333 6.93333L21.0667 5.86667L19.4667 7.46667C18.4 6.93333 17.2 6.66667 16 6.66667C13.0667 6.66667 10.6667 9.06667 10.6667 12C10.6667 13.2 11.0667 14.2667 11.6 15.2L6.13333 20.6667L7.2 21.7333L12.6667 16.2667C13.6 16.8 14.8 17.0667 16 17.0667C18.9333 17.0667 21.3333 14.6667 21.3333 11.7333C21.3333 11.2 21.2 10.6667 21.0667 10.1333L23.2 12.8L22.1333 13.8667ZM16 15.2C14.2667 15.2 12.8 13.7333 12.8 12C12.8 10.2667 14.2667 8.8 16 8.8C17.7333 8.8 19.2 10.2667 19.2 12C19.2 13.7333 17.7333 15.2 16 15.2Z" fill="url(#paint0_radial_features_grid)" />
    <defs>
      <radialGradient id="paint0_radial_features_grid" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 14.2222) rotate(90) scale(12.4444)">
        <stop stopColor="var(--color-accent-gradient-start)" />
        <stop offset="1" stopColor="var(--color-accent-gradient-end)" />
      </radialGradient>
    </defs>
  </svg>
);

const FeaturesGrid: NextPage = () => {
  return (
    <section className="bg-[#f5f3f0] py-16 md:py-24">
      <div className="container">
        <div className="bg-background-tertiary rounded-[32px] p-8 md:p-12 lg:p-16 text-center">
          <p className="font-body font-bold text-sm uppercase tracking-wider text-text-tertiary mb-4">
            Nada de prompts genéricos!
          </p>
          <h2 className="font-display text-4xl md:text-[52px] leading-tight text-text-primary text-balance max-w-4xl mx-auto">
            <span className="text-gradient-primary">Chega de prompt genérico</span>
            , IA tem que facilitar sua vida. Em dois dias você vai sair plano para:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border-subtle">
                <FeatureIcon />
                <h3 className="font-body font-bold text-xl text-text-primary mt-6 mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;