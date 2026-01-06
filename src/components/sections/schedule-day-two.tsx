"use client";

import React from 'react';

type ScheduleItem = {
  block: string;
  title: string;
  items: string[];
};

const scheduleData: ScheduleItem[] = [
  {
    block: "Bloco 4:",
    title: "IA na Operação e Gestão",
    items: [
      "Automatizir processos internos que comem seu tempo",
      "IA para análise de dados e tomada de decisão",
      "Como reduzir trabalho operacional em até 70%",
      "Integrações que realmente valem a pena (sem Make ou N8n)",
      "Prática: Mapeando processos para automatizar no SEU negócio",
    ],
  },
  {
    block: "Bloco 5:",
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
    block: "Bloco 6:",
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

const ScheduleCard = ({ block, title, items }: ScheduleItem) => (
  <div className="bg-background-light-alt rounded-3xl p-6 md:p-8 flex flex-col text-text-dark transition-transform duration-300 ease-in-out hover:-translate-y-2">
    <h3 className="font-body font-bold text-2xl text-text-dark mb-6">
      {block}
      <br />
      {title}
    </h3>
    <ul className="flex flex-col gap-3 flex-grow">
      {items.map((item, index) => (
        <li
          key={index}
          className="bg-white text-text-dark-alt rounded-full py-3 px-5 text-center text-sm font-body leading-tight"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ScheduleDayTwo = () => {
  return (
    <div className="bg-background-primary text-text-primary pt-8 pb-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
        <h2 className="font-display text-5xl md:text-7xl leading-none mb-2 md:mb-4">
          Dia 2: Domingo
        </h2>
        <p className="font-body text-lg md:text-xl text-text-secondary mb-12 md:mb-16">
          30/11, Domingo, das 10h às 17h
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {scheduleData.map((card) => (
            <ScheduleCard key={card.block} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDayTwo;