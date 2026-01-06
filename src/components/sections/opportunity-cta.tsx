import Image from 'next/image';

const FourPointStarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <defs>
      <radialGradient id="star-gradient-opportunity" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(20)">
        <stop stopColor="#F2B263" />
        <stop offset="1" stopColor="#D15449" />
      </radialGradient>
    </defs>
    <path d="M20 0L24.305 15.695L40 20L24.305 24.305L20 40L15.695 24.305L0 20L15.695 15.695L20 0Z" fill="url(#star-gradient-opportunity)" />
  </svg>
);

const CutIcon = () => (
  <svg className="h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 9L1.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 6H1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const competitorActions = [
  "Cortando custos operacionais",
  "Aumentando margem de lucro",
  "Escalando sem contratar mais gente",
  "Automatizando processos que antes precisavam de 5 pessoas",
];

const clarityItems = [
  "Como criar novas fontes digitais de lucro com IA",
  "Como ter vantagem de 12 meses sobre qualquer concorrente e posicionamento inovador",
  "Por que mentoria de “aulas gravadas + hotseat” vai morrer (e o que colocar no lugar)",
  "Como transformar views em vendas (conteúdo com IA)",
  "Como cobrar 2x mais plugando IA na entrega que você já faz",
  "As melhores e mais essenciais IAs para negócios",
];

export default function OpportunityCta() {
  return (
    <section className="w-full bg-background-secondary text-white">
      <div className="container mx-auto px-6 py-24 md:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            A oportunidade de <span className="text-gradient-primary">ouro</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-text-secondary md:text-xl">
            Enquanto você lê isso, experts de todos os nichos usam IA para converter 2x mais, com time menor e mais lucro!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          <div className="relative transform md:-rotate-1">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-MEME-1A-8.avif"
              alt="Meme of a woman drinking coffee looking satisfied"
              width={570}
              height={570}
              className="w-full rounded-3xl"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white p-2 px-4 text-sm font-bold text-background-tertiary shadow-md md:text-base">
              profissionais que usam IA assistindo a concorrência dormir 🥳
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-body text-xl text-text-secondary">A Pergunta É:</p>
            <h3 className="mt-4 font-body text-2xl font-bold text-white">
              Quanto tempo você vai ficar pagando R$ 10k, R$ 15k, R$ 20k por mês em equipe fazendo trabalho que uma IA poderia fazer?
            </h3>
            <p className="mt-8 font-body text-base text-text-secondary">
              Enquanto você espera, seus concorrentes já estão:
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {competitorActions.map((action, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CutIcon />
                  <span className="font-body text-text-secondary">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="font-body text-xl text-text-secondary">Você tem duas opções:</p>
          <div className="mt-6 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex items-center gap-6 rounded-3xl border border-border-subtle bg-destructive p-6">
              <span className="font-display text-4xl text-white">1</span>
              <p className="font-body text-xl text-white">Continuar gastando com equipe enquanto sua margem diminui</p>
            </div>
            <div className="flex items-center gap-6 rounded-3xl border border-border-subtle bg-transparent p-6">
              <span className="font-display text-4xl text-white">2</span>
              <p className="font-body text-xl text-white">
                Aprender a aplicar <span className="text-gradient-primary">IA do jeito certo</span> nos dias 29 e 30/11
              </p>
            </div>
          </div>
          <a
            href="#oferta"
            className="mt-10 inline-block rounded-xl bg-gradient-to-br from-primary via-accent to-[#F2B263] px-10 py-5 font-body text-lg font-bold uppercase text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105"
          >
            Garantir minha vaga antes que acabe
          </a>
        </div>

        <div className="mt-24 flex flex-col items-center pt-8">
          <div className="rounded-lg border border-white/20 px-6 py-2 font-body text-sm text-text-tertiary">
            Clareza total
          </div>
          <h2 className="mt-8 text-center font-display text-4xl text-white">
            Você vai sair desse workshop <span className="text-gradient-primary">com clareza de:</span>
          </h2>

          <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clarityItems.map((text, index) => (
              <div key={index} className="flex h-full flex-col gap-6 rounded-3xl border border-border-subtle bg-background-card p-8">
                <FourPointStarIcon />
                <p className="font-body leading-relaxed text-text-secondary">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}