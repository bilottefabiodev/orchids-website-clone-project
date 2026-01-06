import { CalendarDays, Clock, Video } from "lucide-react";

const timelineItems = [
  { time: "10h", event: "Start", icon: Clock },
  { time: "12h30", event: "Almoço", icon: Clock },
  { time: "14h", event: "Retorno", icon: Clock },
  { time: "17h", event: "Encerramento", icon: Clock },
];

const day1Blocks = [
  {
    block: "Bloco 1:",
    title: "Fundamentos de IA para Negócios Digitais",
    details: [
      "O que realmente é IA e como ela funciona nos bastidores",
      "Diferença entre IA que vende curso e IA que dá resultado",
      "Os 3 tipos de IA que você precisa conhecer (e qual usar em cada situação)",
      "Onde a IA funciona de verdade e onde é só papo",
      "Cases reais de empresas que aumentaram margem usando IA",
    ],
  },
  {
    block: "Bloco 2:",
    title: "IA no Atendimento e Vendas",
    details: [
      "Como automatizar até 80% do atendimento ao cliente",
      "IA para qualificação de leads (sem perder vendas)",
      "Como criar scripts de vendas com IA que realmente convertem",
      "Chatbots que funcionam vs. chatbots que afastam cliente",
      "Prática: Implementando seu primeiro agente de atendimento",
    ],
  },
  {
    block: "Bloco 3:",
    title: "IA na Criação de Conteúdo",
    details: [
      "Como usar IA para criar conteúdo que não parece robótico",
      "Estrutura para criar posts, e-mails e copies com IA",
      "IA para roteiros de vídeo e criação de conteúdo em escala",
      "Como manter sua voz e personalidade usando IA",
      "Prática: Criando um mês de conteúdo em 1 hora",
    ],
  },
];

const day2Blocks = [
  {
    block: "Bloco 4:",
    title: "IA na Operação e Gestão",
    details: [
      "Automatizando processos internos que comem seu tempo",
      "IA para análise de dados e tomada de decisão",
      "Como reduzir trabalho operacional em até 70%",
      "Integrações que realmente valem a pena (sem Make ou N8n)",
      "Prática: Mapeando processos para automatizar no SEU negócio",
    ],
  },
  {
    block: "Bloco 5:",
    title: "IA em Marketing e Tráfego",
    details: [
      "Como usar IA para criar anúncios que convertem",
      "IA para análise de audiência e segmentação",
      "Otimização de campanhas com inteligência artificial",
      "Copy de anúncio com IA (do jeito certo)",
      "Prática: Criando campanha completa com IA",
    ],
  },
  {
    block: "Bloco 6:",
    title: "Implementação e Próximos Passos",
    details: [
      "Plano de ação: Por onde começar segunda-feira",
      "Priorização: O que implementar primeiro para ter resultado rápido",
      "Ferramentas essenciais (e gratuitas) para começar",
      "Como escalar sem depender de equipe técnica",
      "Q&A: Tire todas as suas dúvidas sobre implementação",
    ],
  },
];

const PixelLogo = () => {
  const pattern = [
    0, 0, 1, 0, 0,
    0, 1, 0, 1, 0,
    1, 0, 1, 0, 1,
    0, 1, 0, 1, 0,
    0, 0, 1, 0, 0,
  ];

  return (
    <div className="grid grid-cols-5 gap-[3px] w-12 h-12">
      {pattern.map((cell, i) => (
        <div
          key={i}
          className={cell ? "bg-gradient-to-br from-primary via-accent to-yellow-500" : "bg-transparent"}
        />
      ))}
    </div>
  );
};

interface ScheduleBlockCardProps {
  block: string;
  title: string;
  details: string[];
}

const ScheduleBlockCard = ({ block, title, details }: ScheduleBlockCardProps) => (
  <div className="bg-[#F5F3F0] text-[#1E1E1E] rounded-3xl p-6 flex flex-col gap-4 h-full">
    <p className="font-body font-bold text-base">{block}</p>
    <h4 className="font-body font-bold text-xl leading-tight">{title}</h4>
    <div className="flex flex-col gap-2 mt-2">
      {details.map((detail, i) => (
        <div key={i} className="bg-white rounded-full px-4 py-2">
          <p className="font-body text-sm text-[#2D2D2D] leading-snug text-center">{detail}</p>
        </div>
      ))}
    </div>
  </div>
);

const ScheduleOverview = () => {
    return (
        <section id="cronograma" className="bg-background-primary text-text-primary py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
                    <div className="lg:col-span-2 flex items-center gap-4">
                        <PixelLogo />
                        <div>
                            <p className="font-body text-sm text-text-secondary">Workshop</p>
                            <h3 className="font-display text-3xl text-white">IA para<br/>negócios digitais</h3>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-body text-sm text-text-secondary mb-2">Ambos os dias seguirão esse cronograma</p>
                        <div className="border border-border-subtle rounded-lg">
                            {timelineItems.map((item, index) => (
                                <div key={item.event} className={`flex items-center justify-between p-4 ${index < timelineItems.length - 1 ? 'border-b border-border-subtle' : ''}`}>
                                  <div className="flex items-center gap-4">
                                      <item.icon className="w-6 h-6 text-text-secondary" />
                                      <p className="font-display text-white text-3xl">{item.time}</p>
                                  </div>
                                  <p className="font-body text-text-secondary text-lg">{item.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center lg:text-left">
                    <span className="inline-block border border-border-subtle rounded-full px-4 py-1.5 font-body text-xs text-text-secondary mb-4">Workshop</span>
                    <h2 className="font-display text-4xl lg:text-5xl text-white max-w-3xl mx-auto lg:mx-0">
                        Cronograma do nosso workshop.
                        <span className="block font-body text-xl text-text-secondary mt-2">2 Dias de Conteúdo 100% Prático!</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                      <div className="flex items-center gap-2 border border-border-subtle rounded-full px-4 py-2">
                        <CalendarDays className="w-4 h-4 text-text-secondary" />
                        <span className="font-body text-sm text-text-secondary">Dias 29 e 30/11 das 10h às 17h</span>
                      </div>
                      <div className="flex items-center gap-2 border border-border-subtle rounded-full px-4 py-2">
                        <Video className="w-4 h-4 text-text-secondary" />
                        <span className="font-body text-sm text-text-secondary">AO VIVO no Zoom</span>
                      </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="mb-20">
                        <div className="mb-10">
                            <h3 className="font-display text-7xl lg:text-8xl text-white tracking-tighter">Dia 1: Sábado</h3>
                            <p className="font-body text-text-secondary mt-2 text-lg">29/11, sábado, das 10h às 17h</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {day1Blocks.map((block) => (
                                <ScheduleBlockCard key={block.title} {...block} />
                            ))}
                        </div>
                    </div>
                     <div>
                        <div className="mb-10">
                            <h3 className="font-display text-7xl lg:text-8xl text-white tracking-tighter">Dia 2: Domingo</h3>
                            <p className="font-body text-text-secondary mt-2 text-lg">30/11, Domingo, das 10h às 17h</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {day2Blocks.map((block) => (
                                <ScheduleBlockCard key={block.title} {...block} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ScheduleOverview;