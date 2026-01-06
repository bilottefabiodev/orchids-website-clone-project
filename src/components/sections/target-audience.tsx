import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const IconCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 text-[#86efac] mt-1">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 text-[#fca5a5] mt-1">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const positiveCriteria = [
  "Você tem um negócio digital e quer <highlight>aumentar sua margem de lucro</highlight>",
  "Você está cansado de pagar equipe para fazer trabalho operacional",
  "Você já investiu em cursos de IA mas nunca conseguiu aplicar na prática",
  "Você quer <highlight>reduzir custos</highlight> sem perder qualidade",
  "Você não sabe programar e não quer aprender Make ou N8n",
  "Você quer entender onde a IA realmente funciona (e onde não funciona)",
];

const negativeCriteria = [
  "Você espera fórmulas mágicas ou resultados sem implementar",
  "Você quer promptzinhos prontos sem entender a estratégia",
  "Você não tem um negócio digital ou não está faturando ainda",
  "Você acha que IA vai fazer tudo sozinha sem você precisar entender o processo",
];

const renderWithHighlight = (text: string, highlightClass: string) => {
  const parts = text.split(/<\/?highlight>/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={highlightClass}>{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};

const TargetAudienceSection = () => {
  return (
    <section className="bg-[#E8E5E0] py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-md border border-[rgba(30,30,30,0.3)] px-4 py-1.5 font-bold uppercase text-sm font-body text-[#1E1E1E]">
            É para você!
          </span>
          <h2 className="font-display text-4xl leading-tight lg:text-[52px] text-[#1E1E1E] mb-16 max-w-2xl">
            Para quem é este Worshop?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Positive Column */}
          <div className="bg-[#122019] rounded-3xl p-8 lg:p-12 border border-white/10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/ESTRELA-POSITIVO-2.svg"
              alt="Ícone Workshop é para você"
              width={80}
              height={80}
              className="mb-8"
            />
            <h3 className="font-display text-white text-3xl mb-8 text-left">
              Este Workshop É Para Você Se:
            </h3>
            <ul className="space-y-5 text-left">
              {positiveCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <IconCheck />
                  <p className="text-text-secondary text-base leading-relaxed">
                    {renderWithHighlight(item, "text-[#86efac]")}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Negative Column */}
          <div className="bg-[#21181A] rounded-3xl p-8 lg:p-12 border border-white/10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/ESTRELA-NEGATIVO-3.svg"
              alt="Ícone Workshop não é para você"
              width={80}
              height={80}
              className="mb-8"
            />
            <h3 className="font-display text-white text-3xl mb-8 text-left">
              Este Workshop NÃO É Para Você Se:
            </h3>
            <ul className="space-y-5 text-left">
              {negativeCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <IconX />
                  <p className="text-text-secondary text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
            <Link href="#oferta" className="inline-block">
                <Button 
                    size="lg" 
                    className="h-auto bg-gradient-to-r from-primary via-accent to-amber-400 text-white font-bold uppercase rounded-lg px-10 py-5 text-base shadow-[0_8px_30px_rgba(209,84,73,0.3)] transition-transform duration-200 hover:scale-105"
                >
                    SIM, EU QUERO APLICAR IA NO MEU NEGÓCIO!
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;