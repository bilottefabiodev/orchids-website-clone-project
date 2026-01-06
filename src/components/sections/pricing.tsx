import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

const StarIcon = () => (
  <div className="w-8 h-8 flex-shrink-0">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.0834 16.9242L22.8251 15.1428L24.6065 14.4011L22.8251 13.6594L22.0834 11.878L21.3418 13.6594L19.5604 14.4011L21.3418 15.1428L22.0834 16.9242ZM17.2051 19.3148L17.751 18.066L19.0001 17.5199L17.751 16.9741L17.2051 15.7252L16.6591 16.9741L15.4099 17.5199L16.6591 18.066L17.2051 19.3148ZM17.2051 8.87803L17.751 7.62916L19.0001 7.08331L17.751 6.53746L17.2051 5.28859L16.6591 6.53746L15.4099 7.08331L16.6591 7.62916L17.2051 8.87803ZM11.878 11.878L13.6594 11.1364L14.4011 9.35498L15.1428 11.1364L16.9242 11.878L15.1428 12.6197L14.4011 14.4011L13.6594 12.6197L11.878 11.878Z" fill="url(#paint0_radial_pricing)" />
      <defs>
        <radialGradient id="paint0_radial_pricing" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.2421 11.1011) rotate(135.003) scale(15.9082)">
          <stop stopColor="#F89456" />
          <stop offset="1" stopColor="#D94A2B" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

export default function PricingSection() {
  const listItems = [
    "2 dias de conteúdo 100% prático e aplicável",
    "Conhecimento que aplico em empresas de 3 continentes",
    "Cases reais e estratégias testadas na prática",
    "Suporte para implementação no seu negócio"
  ];

  return (
    <>
      <section id="oferta" className="bg-[#E8E6E3] py-24 text-[#1A1A1A]">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-start gap-8 text-balance">
              <div className="border border-primary text-primary font-bold text-sm rounded-full py-2 px-4 inline-block font-body">
                Cabe no meu bolso?
              </div>
              <h2 className="font-display text-4xl lg:text-[42px] font-bold leading-tight">
                Esse workshop presencial poderia facilmente custar R$ 997.
              </h2>
              <p className="font-supporting text-lg text-text-dark/80">
                Se você não está disposto a investir isso para transformar seu negócio, talvez o problema não seja a velocidade da IA...
              </p>
              <p className="font-supporting text-lg text-text-dark/80">
                Mas como este é um evento ao vivo e online, e eu quero que o máximo de infoprodutores possam aplicar IA do jeito certo...
              </p>
              <ul className="space-y-6 mt-4">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <StarIcon />
                    <span className="font-supporting text-lg pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1A1A1A] rounded-[20px] p-8 lg:p-12 text-white border border-[#3A3A3A] shadow-[0_4px_20px_0_rgba(0,0,0,0.3)] flex flex-col items-center text-center">
              <Image
                src="https://amandalourenco.com/wp-content/uploads/2025/11/INVESTIMENTO.svg"
                alt="Workshop IA para negócios"
                width={249}
                height={113}
                className="mb-8"
              />
              <h3 className="font-supporting text-xl font-bold mb-4">
                Você garante sua vaga por apenas:
              </h3>
              <div className="flex items-baseline justify-center leading-none text-white my-4">
                <span className="font-display text-5xl font-normal self-start -mr-2">R$</span>
                <span className="font-display text-[120px] font-bold">47</span>
                <span className="font-display text-5xl font-normal">,00</span>
              </div>
              <p className="font-supporting italic text-base text-muted-foreground mb-8">
                (Menos que um jantar no iFood)
              </p>
              <Image
                src="https://amandalourenco.com/wp-content/uploads/2025/11/Meios-de-pagamento.svg"
                alt="Meios de pagamento: Hotmart, PIX, Visa, Amex"
                width={341}
                height={30}
                className="mb-8"
              />
              <div className="w-full max-w-sm mb-6">
                <div className="bg-[#2a2a2a] rounded-full h-2.5 w-full">
                  <div className="bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end h-2.5 rounded-full w-[100%]"></div>
                </div>
                <p className="text-muted-foreground text-sm mt-2 font-supporting">100% do LOTE 1 vendido a R$47</p>
              </div>
              <a href="#" className="w-full text-center bg-gradient-to-br from-accent-gradient-start to-accent-gradient-end text-white font-bold font-body text-lg py-6 px-10 rounded-full shadow-[0_4px_12px_rgba(232,103,63,0.3)] hover:scale-105 transition-transform duration-300 block mb-6">
                GARANTIR INGRESSO | LOTE 01
              </a>
              <div className="flex items-center gap-2 text-sm font-supporting">
                <AlertTriangle className="w-5 h-5 text-warning-icon" />
                <span>O LOTE pode virar a qualquer momento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-[440px] relative">
                <Image
                  src="https://amandalourenco.com/wp-content/uploads/2025/11/amanda-11-scaled.jpg"
                  alt="Amanda Lourenço em um momento casual"
                  width={440}
                  height={550}
                  className="rounded-lg border-[10px] border-white shadow-2xl -rotate-3"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 text-balance">
              <h2 className="font-display text-4xl lg:text-[42px] font-bold text-white">
                Por que tão barato?
              </h2>
              <p className="font-supporting text-lg text-text-secondary">
                Deixa eu ser direta com você:<br/>Eu poderia cobrar R$ 997 por esse workshop. Mas a verdade é que eu ganho dinheiro aplicando IA em empresas, não vendendo curso de IA.
              </p>
              <p className="font-supporting text-lg text-text-secondary">
                Este workshop é a porta de entrada para você conhecer meu trabalho.
              </p>
              <p className="font-supporting text-lg text-text-secondary">
                Alguns alunos vão adorar, implementar sozinhos e ter ótimos resultados (e eu fico feliz com isso).
              </p>
              <p className="font-supporting text-lg text-text-secondary">
                Outros vão perceber que precisam de ajuda para implementar no nível que empresas de 7-8 dígitos implementam... e aí sim, vão contratar minha agência.
              </p>
              <h3 className="font-supporting text-lg font-bold text-white mt-4">É um ganha-ganha:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border-subtle rounded-[20px] p-6 flex items-start gap-4">
                  <StarIcon />
                  <p className="font-body text-base text-text-secondary pt-1">
                    Você tem acesso a conteúdo de alto nível por um preço simbólico
                  </p>
                </div>
                <div className="bg-card border border-border-subtle rounded-[20px] p-6 flex items-start gap-4">
                  <StarIcon />
                  <p className="font-body text-base text-text-secondary pt-1">
                    Mostro na prática o que sei fazer (e algumas pessoas vão querer ir mais fundo)
                  </p>
                </div>
              </div>
              <h3 className="font-display text-4xl font-bold text-white mt-6">
                Simples assim!
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}