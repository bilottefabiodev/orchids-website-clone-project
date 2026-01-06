import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const CompetitorIcon = () => (
  <ChevronRight className="text-[#b53535] w-5 h-5 flex-shrink-0 mt-1" strokeWidth={4} />
);

const NumberedCircle = ({ number }: { number: number }) => (
  <div className="flex items-center justify-center w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1">
    <span className="text-sm font-bold font-body text-secondary-foreground">{number}</span>
  </div>
);

const GoldenOpportunity = () => {
  const competitorAdvantages = [
    'Cortando custos operacionais',
    'Aumentando margem de lucro',
    'Escalando sem contratar mais gente',
    'Automatizando processos que antes precisavam de 5 pessoas',
  ];

  const options = [
    'Continuar gastando com equipe enquanto sua margem diminui',
    'Aprender a aplicar IA do jeito certo nos dias 29 e 30/11',
  ];

  return (
    <section className="bg-background-primary w-full py-24 px-4 sm:px-10">
      <div className="container mx-auto max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[1/1] w-full">
               <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-MEME-1A-8.avif"
                alt="Meme de uma mulher bebendo café com a legenda 'profissionais que usam IA assistindo a concorrência dormir'"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
               <div className="absolute bottom-6 right-6 bg-[rgba(10,10,10,0.8)] border border-border-subtle rounded-xl p-5 max-w-[calc(100%-48px)]">
                <p className="font-body text-sm text-muted-foreground leading-snug">
                  profissionais que usam IA assistindo a concorrência dormir
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start text-left gap-y-8">
            <span className="font-body text-sm text-muted-foreground border border-border-subtle rounded-xl px-5 py-2.5">
              A oportunidade de ouro
            </span>

            <h2 className="font-display text-4xl lg:text-[42px] font-bold text-text-primary leading-tight">
              Enquanto você lê isso, experts de todos os nichos usam IA para <span className="text-gradient-primary">converter 2x mais, com time menor e mais lucro!</span>
            </h2>

            <div className="w-full flex flex-col items-start gap-y-6">
              <h3 className="font-display text-[28px] font-bold text-text-primary leading-tight">
                A Pergunta É:
              </h3>
              <p className="font-body text-lg text-muted-foreground">
                Quanto tempo você vai ficar pagando R$ 10k, R$ 15k, R$ 20k por mês em equipe fazendo trabalho que uma IA poderia fazer?
              </p>
              <p className="font-body text-lg font-bold text-text-primary">
                Enquanto você espera, seus concorrentes já estão:
              </p>
              <ul className="space-y-3">
                {competitorAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-x-3">
                    <CompetitorIcon />
                    <span className="font-body text-lg text-muted-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-lg font-bold text-text-primary pt-4">
                Você tem duas opções:
              </p>
              <ul className="space-y-4">
                {options.map((option, index) => (
                  <li key={index} className="flex items-start gap-x-4">
                    <NumberedCircle number={index + 1} />
                    <span className="font-body text-lg text-muted-foreground">{option}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#oferta"
              className="mt-6 font-body text-lg font-bold text-primary-foreground uppercase bg-gradient-to-br from-[#D94A2B] to-[#F89456] rounded-full px-8 py-6 shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ boxShadow: '0 4px 20px rgba(232, 103, 63, 0.4)' }}
            >
              GARANTIR MINHA VAGA ANTES QUE ACABE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenOpportunity;