import Image from 'next/image';
import { Plus } from 'lucide-react';

const PricingCard = () => {
  const features = [
    '2 dias de conteúdo 100% prático e aplicável',
    'Conhecimento que aplico em empresas de 3 continentes',
    'Cases reais de empresas que testam as práticas',
    'Suporte para implementação no seu negócio',
  ];

  return (
    <section id="oferta" className="bg-[#E8E5E0]">
      <div className="container mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="text-text-dark">
            <span className="mb-4 inline-block rounded-md bg-white/70 px-3 py-1 text-sm font-semibold text-text-dark-alt">
              Cabe no meu bolso?
            </span>
            <h2 className="font-display text-4xl font-bold leading-tight text-text-dark md:text-5xl mb-4">
              Esse workshop presencial poderia facilmente custar R$ 997.
            </h2>
            <p className="text-text-dark-alt mb-6">
              Se você não está disposto a investir isso para transformar seu negócio, talvez o problema não seja a velocidade da IA...
            </p>
            <p className="text-text-dark-alt mb-8">
              Mas como este é um evento ao vivo e online, e eu quero que o máximo de infoprodutores possam aplicar IA do jeito certo...
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Plus className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-text-dark-alt">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="rounded-3xl bg-[#1F1F1F] p-8 text-center text-white shadow-2xl md:p-12">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/Logo-WIAN-ht-11.avif"
                alt="Workshop IA para negócios"
                width={150}
                height={42}
                className="mx-auto mb-6"
              />
              <h3 className="font-body text-lg text-text-secondary mb-4">
                Você garante sua vaga por apenas:
              </h3>
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span className="font-display text-4xl text-white md:text-5xl">R$</span>
                <span className="font-display text-[120px] leading-none text-white md:text-[140px]">47</span>
                <span className="font-display text-4xl text-white md:text-5xl">,00</span>
              </div>
              <p className="text-sm text-text-tertiary mb-6">
                (Menos que um jantar no iFood)
              </p>

              <div className="mb-6 h-8" />

              <a
                href="#oferta"
                className="block w-full rounded-lg bg-gradient-to-r from-primary via-accent to-[#F2B263] py-4 text-center font-bold uppercase text-white shadow-[0_8px_30px_rgba(209,84,73,0.3)] transition-transform duration-200 hover:scale-105"
              >
                GARANTIR INGRESSO | LOTE 01
              </a>
              <div className="mt-6 flex items-center justify-center gap-2">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/26a0-4.svg"
                  alt="Aviso"
                  width={16}
                  height={16}
                  className="opacity-70"
                />
                <p className="text-xs text-text-tertiary">O LOTE pode virar a qualquer momento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;