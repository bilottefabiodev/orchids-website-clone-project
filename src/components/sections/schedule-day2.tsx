import React from 'react';

const scheduleBlocks = [
  {
    blockNumber: "Bloco 4:",
    title: "IA na Operação e Gestão",
    items: [
      "Automatizando processos internos que comem seu tempo",
      "IA para análise de dados e tomada de decisão",
      "Como reduzir trabalho operacional em até 70%",
      "Integrações que realmente valem a pena (sem Make ou N8n)",
      "Prática: Mapeando processos para automatizar no SEU negócio",
    ],
  },
  {
    blockNumber: "Bloco 5:",
    title: "IA em Marketing e Tráfego",
    items: [
      "Como usar IA para criar anúncios que convertem",
      "IA para análise de audiência e segmentação",
      "Otimização de campanhas com inteligência artificial",
      "Copy de anúncio com IA (do jeito certo)",
      "Prática: Criando campanha completa com IA",
    ],
  },
  {
    blockNumber: "Bloco 6:",
    title: "Implementação e Próximos Passos",
    items: [
      "Plano de ação: Por onde começar segunda-feira",
      "Priorização: O que implementar primeiro para ter resultado rápido",
      "Ferramentas essenciais (e gratuitas) para começar",
      "Como escalar sem depender de equipe técnica",
      "Q&A: Tire todas as suas dúvidas sobre implementação",
    ],
  },
];

const ScheduleDay2 = () => {
  return (
    <div id="cronograma-dia2" className="mt-16 lg:mt-24">
      <div className="text-left">
        <h2 className="font-display text-text-primary text-[56px] leading-none">
          Dia 2: Domingo
        </h2>
        <p className="font-body text-text-secondary text-lg mt-2">
          30/11, Domingo, das 10h às 17h
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {scheduleBlocks.map((block, index) => (
          <div key={index} className="bg-background-light rounded-[20px] p-8 lg:p-10 flex flex-col text-text-dark">
            <div>
              <h3 className="font-body text-lg font-bold">{block.blockNumber}</h3>
              <p className="font-body text-[28px] leading-tight font-bold mt-1">{block.title}</p>
            </div>
            <ul className="space-y-4 mt-6">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="bg-white rounded-full py-4 px-6 text-center font-body text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDay2;