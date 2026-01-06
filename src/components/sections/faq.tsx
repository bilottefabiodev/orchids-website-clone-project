"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { Plus, Minus, User, MessageSquareText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    value: "item-1",
    question: "O workshop é ao vivo ou gravado?",
    answer:
      "O workshop é 100% AO VIVO nos dias 29 e 30/11. A gravação pode ser adquirida à parte.",
  },
  {
    value: "item-2",
    question: "Preciso saber programar?",
    answer:
      "Não. O workshop é focado em aplicação prática sem necessidade de conhecimento técnico avançado.",
  },
  {
    value: "item-3",
    question: "Funciona para qualquer nicho?",
    answer:
      "Sim. Os princípios e ferramentas funcionam para infoprodutos, agências, consultorias, e-commerce e qualquer negócio digital.",
  },
  {
    value: "item-4",
    question: "Vou aprender a usar Make ou N8n?",
    answer:
      "Não. O foco é em soluções práticas e diretas, sem necessidade de ferramentas técnicas complexas.",
  },
  {
    value: "item-5",
    question: "Tem suporte após o workshop?",
    answer:
      "Sim. Você terá acesso ao grupo de alunos para tirar dúvidas e trocar experiências.",
  },
  {
    value: "item-6",
    question: "Posso parcelar?",
    answer:
      "Não. O investimento de R$ 47 é à vista devido ao valor reduzido.",
  },
  {
    value: "item-7",
    question: "Tem garantia?",
    answer:
      "Sim. Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.",
  },
];

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-6 font-bold text-lg text-left transition-all hover:no-underline group",
        className
      )}
      {...props}
    >
      <span className="font-body text-lg font-bold text-[#1A1A1A]">{children}</span>
      <div className="relative h-6 w-6">
        <Plus className="h-6 w-6 shrink-0 transition-transform duration-200 absolute inset-0 opacity-100 group-data-[state=open]:opacity-0" />
        <Minus className="h-6 w-6 shrink-0 transition-transform duration-200 absolute inset-0 opacity-0 group-data-[state=open]:opacity-100" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const FaqSection = () => {
  return (
    <section id="faq" className="bg-[#E8E6E3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-lg bg-white/80 px-4 py-1.5 text-sm font-semibold leading-6 text-[#1A1A1A] ring-1 ring-inset ring-gray-900/10">
            F A Q
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="mt-20">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-16">
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((faq) => (
                  <AccordionItem
                    key={faq.value}
                    value={faq.value}
                    className="border-none bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                    <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0">
                      <p className="text-base text-gray-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="font-body text-xl font-bold text-[#1A1A1A]">
                  Se ainda tiver dúvidas, minha equipe está a disposição:
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Entre em contato com a gente pelo Whatsapp:
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <User className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-base text-[#1A1A1A]">
                      Dhara Loise
                    </p>
                    <p className="text-sm text-gray-500">Head Comercial</p>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-8 w-full bg-[#4A7C59] hover:bg-[#3b6347] text-white rounded-full py-6 text-base font-bold">
                  <a href="#">
                    <MessageSquareText className="mr-2 h-5 w-5" />
                    Suporte por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;