import React from 'react';
import { PlusCircle, XCircle } from 'lucide-react';

const HighlightedText = ({ text }: { text: string }) => {
  const parts = text.split(/<strong>(.*?)<\/strong>/g);
  return (
    <span className="font-supporting text-base text-text-primary leading-relaxed">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold">{part}</strong>
        ) : (
          part
        )
      )}
    </span>
  );
};

const positiveItems = [
  "Você tem um negócio digital e quer <strong>aumentar sua margem de lucro</strong>",
  "Você está cansado de pagar equipe para fazer trabalho operacional",
  "Você já investiu em cursos de IA mas nunca conseguiu aplicar na prática",
  "Você quer <strong>reduzir custos</strong> sem perder qualidade",
  "Você não sabe programar e não quer aprender Make ou N8n",
  "Você quer entender onde a IA realmente funciona (e onde não funciona)",
];

const negativeItems = [
  "Você espera fórmulas mágicas ou resultados sem implementar",
  "Você quer promptzinhos prontos sem entender a estratégia",
  "Você não tem um negócio digital ou não está faturando ainda",
  "Você acha que IA vai fazer tudo sozinha sem você precisar entender o processo",
];

const ForWhoSection = () => {
  return (
    <section className="bg-background-primary pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="mb-7 inline-block rounded-full border border-accent-primary px-5 py-[10px] font-body text-base leading-none text-text-primary">
            É para você!
          </span>
          <h2 className="max-w-3xl font-display text-[42px] leading-tight text-text-primary">
            Para quem é{' '}
            <span className="text-gradient-primary">este Worshop?</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-[60px] lg:grid-cols-2">
          <div
            className="rounded-[20px] border border-[#4A7C59] bg-[#4A7C59]/20 bg-cover bg-center bg-no-repeat px-8 py-16 md:px-12 md:py-20"
            style={{
              backgroundImage:
                'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/ESTRELA-POSITIVO-2.svg")',
            }}
          >
            <h3 className="mb-[30px] font-body text-[28px] font-bold text-text-primary">
              Este Workshop É Para Você Se:
            </h3>
            <ul className="space-y-5">
              {positiveItems.map((item, index) => (
                <li key={index} className="flex items-start gap-[15px]">
                  <PlusCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#4A7C59]" fill="currentColor" />
                  <HighlightedText text={item} />
                </li>
              ))}
            </ul>
          </div>

          <div
             className="rounded-[20px] border border-warning-red bg-warning-red/20 bg-cover bg-center bg-no-repeat px-8 py-16 md:px-12 md:py-20"
             style={{
               backgroundImage:
                 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/ESTRELA-NEGATIVO-3.svg")',
             }}
          >
            <h3 className="mb-[30px] font-body text-[28px] font-bold text-text-primary">
              Este Workshop NÃO É Para Você Se:
            </h3>
            <ul className="space-y-5">
              {negativeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-[15px]">
                  <XCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-warning-red" fill="currentColor" />
                  <HighlightedText text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center md:mt-20">
          <a
            href="#oferta"
            className="inline-block rounded-full bg-gradient-to-br from-[#D94A2B] to-[#F89456] px-10 py-5 font-body text-base font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105"
            style={{boxShadow: '0 4px 12px rgba(232,103,63,0.3)'}}
          >
            Sim, eu quero aplicar ia no meu negócio!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;