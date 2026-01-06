import Image from "next/image";
import { Clock, CalendarDays, Presentation } from "lucide-react";

const day1Blocks = [
  {
    title: "Bloco 1: Fundamentos de IA para Negócios Digitais",
    items: [
      "O que realmente é IA e como ela funciona nos bastidores",
      "Diferença entre IA que vende curso e IA que dá resultado",
      "Os 3 tipos de IA que você precisa conhecer (e qual usar em cada situation)",
      "Onde a IA funciona de verdade e onde é só papo",
      "Cases reais de empresas que aumentaram margem usando IA",
    ],
  },
  {
    title: "Bloco 2: IA no Atendimento e Vendas",
    items: [
      "Como automatizar até 80% do atendimento ao cliente",
      "IA para qualificação de leads (sem perder vendas)",
      "Como criar scripts de vendas com IA que realmente convertem",
      "Chatbots que funcionam vs. chatbots que afastam cliente",
      "Prática: Implementando seu primeiro agente de atendimento",
    ],
  },
  {
    title: "Bloco 3: IA na Criação de Conteúdo",
    items: [
      "Como usar IA para criar conteúdo que não parece robótico",
      "Estrutura para criar posts, e-mails e copies com IA",
      "IA para roteiros de vídeo e criação de conteúdo em escala",
      "Como manter sua voz e personalidade usando IA",
      "Prática: Criando um mês de conteúdo em 1 hora",
    ],
  },
];

const timelineEvents = [
  { time: "10h", event: "Start" },
  { time: "12h30", event: "Almoço" },
  { time: "14h", event: "Retorno" },
  { time: "17h", event: "Encerramento" },
];

const BlockCard = ({ title, items }: { title: string; items: string[] }) => {
  const colonIndex = title.indexOf(":");
  const blockLabel = colonIndex !== -1 ? title.substring(0, colonIndex + 1) : title;
  const blockTitle = colonIndex !== -1 ? title.substring(colonIndex + 1) : "";

  return (
    <div className="bg-[#E8E6E3] text-text-dark rounded-2xl p-8 flex flex-col">
      <h3 className="text-xl font-body text-[#1A1A1A] mb-6 min-h-[3.75rem]">
        <strong className="font-bold">{blockLabel}</strong>
        {blockTitle}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-white text-[#1A1A1A] rounded-lg px-4 py-3 text-sm font-body"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ScheduleDay1 = () => {
  return (
    <section id="cronograma" className="bg-background-primary py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-x-24 gap-y-12 items-start">
          <div className="flex flex-col items-start">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/Logo-WIAN-ht-11.avif"
              alt="Logo Workshop IA para negócios digitais"
              width={168}
              height={168}
              className="mb-4"
            />
            <span className="border border-white/20 px-3 py-1 rounded-full text-xs font-supporting text-text-secondary uppercase mb-4">
              Workshop
            </span>
            <h2 className="font-display text-4xl text-white font-bold mb-6">
              Cronograma do nosso workshop. 2 Dias de Conteúdo 100% Prático!
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-x-6 gap-y-3 text-sm text-text-secondary">
              <span className="border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
                Ambos os dias seguirão esse cronograma
              </span>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <CalendarDays className="h-4 w-4" />
                <span>Dias 29 e 30/11 das 10h às 17h</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Presentation className="h-4 w-4" />
                <span>AO VIVO no Zoom</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 shrink-0">
            {timelineEvents.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-border-subtle"
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-text-secondary" />
                  <span className="text-2xl font-bold text-white font-body">
                    {item.time}
                  </span>
                </div>
                <span className="text-lg text-text-secondary font-body">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-6xl md:text-7xl lg:text-[80px] font-bold text-white">
            Dia 1: Sábado
          </h2>
          <p className="text-text-secondary text-lg mt-2">
            29/11, sábado, das 10h às 17h
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {day1Blocks.map((block, index) => (
              <BlockCard key={index} title={block.title} items={block.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDay1;