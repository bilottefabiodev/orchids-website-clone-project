"use client";

import * as React from "react";
import Image from "next/image";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// FourPointStarIcon Component
const FourPointStarIcon = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 0L24.4721 15.5279L40 20L24.4721 24.4721L20 40L15.5279 24.4721L0 20L15.5279 15.5279L20 0Z"
      fill="url(#paint0_radial_faq)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_faq"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20 20) rotate(90) scale(20)"
      >
        <stop stopColor="#D15449" />
        <stop offset="1" stopColor="#F2B263" />
      </radialGradient>
    </defs>
  </svg>
);

// Accordion Components (adapted from shadcn/ui for self-containment)
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("mb-4 overflow-hidden rounded-xl border-none bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between p-6 text-left font-body text-lg font-bold text-text-dark transition-all hover:bg-gray-50",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-5 w-5 shrink-0 text-text-dark/80 transition-transform duration-200 group-data-[state=open]:hidden" />
      <Minus className="h-5 w-5 shrink-0 text-text-dark/80 transition-transform duration-200 group-data-[state=closed]:hidden" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base transition-all"
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "item-1",
    question: "O workshop é ao vivo ou gravado?",
    answer: "O workshop é 100% AO VIVO nos dias 29 e 30/11. A gravação pode ser adquirida à parte.",
  },
  {
    id: "item-2",
    question: "Preciso saber programar?",
    answer: "Não. O workshop é focado em aplicação prática sem necessidade de conhecimento técnico avançado.",
  },
  {
    id: "item-3",
    question: "Funciona para qualquer nicho?",
    answer: "Sim. Os princípios e ferramentas funcionam para infoprodutos, agências, consultorias, e-commerce e qualquer negócio digital.",
  },
  {
    id: "item-4",
    question: "Vou aprender a usar Make ou N8n?",
    answer: "Não. O foco é em soluções práticas e diretas, sem necessidade de ferramentas técnicas complexas.",
  },
  {
    id: "item-5",
    question: "Tem suporte após o workshop?",
    answer: "Sim. Você terá acesso ao grupo de alunos para tirar dúvidas e trocar experiências.",
  },
  {
    id: "item-6",
    question: "Posso parcelar?",
    answer: "Não. O investimento de R$ 47 é à vista devido ao valor reduzido.",
  },
  {
    id: "item-7",
    question: "Tem garantia?",
    answer: "Sim. Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-[#E8E5E0] py-20 text-text-dark md:py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.75fr,1fr] lg:gap-16">
          <div>
            <div className="mb-4 inline-block rounded-lg border border-text-dark/30 px-3 py-1 font-body text-sm font-bold uppercase">
              FAQ
            </div>
            <h2 className="mb-8 font-display text-[52px] leading-[1.1] text-text-dark">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="font-body text-base leading-relaxed text-[#5c5c5c]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="h-fit rounded-2xl bg-white p-8 text-text-dark shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:sticky lg:top-28">
            <FourPointStarIcon className="mb-4 h-10 w-10" />
            <h3 className="font-body text-xl font-bold leading-[1.3]">
              Se ainda tiver dúvidas, minha equipe está a disposição:
            </h3>
            <p className="mt-2 font-body text-base leading-relaxed text-[#5c5c5c]">
              Entre em contato com a gente pelo Whatsapp:
            </p>
            <div className="mt-6 flex items-center gap-4 border-b border-gray-200 pb-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-dhara-suporte-13.avif"
                alt="Dhara Loise, Head Comercial"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-body text-base font-bold text-text-dark">
                  Dhara Loise
                </p>
                <p className="font-body text-sm text-[#5c5c5c]">
                  Head Comercial
                </p>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#00c7a3] p-4 text-center font-body text-base font-bold text-white transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Suporte por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;