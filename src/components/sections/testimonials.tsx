import Image from "next/image";
import { FC, SVGProps } from "react";

const testimonialData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-01a-7.avif",
    quote: "Dobramos a taxa de conversão. Cortamos reuniões e custos inúteis e hoje tomamos decisões rápidas. Tudo aconteceu em poucas semanas de mentoria.",
    name: "Marília Ponte",
    handle: "@mariliapoonte",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-02a-5.avif",
    quote: "Uma apresentadora com 1 milhão de seguidores me seguiu agora vindo do vídeo que postei hoje criado com IA. Caramba, que metodologia sensacional. Muito obrigada, Amanda.",
    name: "Liz Valz",
    handle: "@lizvalz",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-03-6.avif",
    quote: "A Amanda não só ensinou IA, ela virou a chave da nossa operação. Hoje, a gente só foca no que realmente move a receita. Você tem cadeirinha de camarote no nosso coração, Amanda.",
    name: "Marina Ratton",
    handle: "@marinaratton",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-04-4.avif",
    quote: "Eu cheguei me sentindo babá dos meus clientes, Sem saber monetizar meu conhecimento e saí com direção, mentoria criada e os primeiros 15k faturados em 5 dias. O método da Amanda me ajudou a transformar burnout em plano, caos em posicionamento, e a raiva do mercado em movimento. Foi a primeira vez que me senti líder, e não só uma executora.",
    name: "Nathalia Rabello",
    handle: "@nathaliarabello_",
  },
];

interface TestimonialCardProps {
  image: string;
  quote: string;
  name: string;
  handle: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ image, quote, name, handle }) => (
  <article className="bg-[#E8E6E3] rounded-3xl p-10 text-[#1A1A1A] flex flex-col">
    <div className="mb-6">
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
    </div>
    <div className="relative mb-6 flex-grow">
      <span className="font-serif text-7xl text-accent-primary absolute -top-6 -left-2 z-0">“</span>
      <p className="relative z-10 font-body text-lg text-[#1a1a1a] leading-relaxed">
        {quote}
      </p>
    </div>
    <div className="mt-auto">
      <h3 className="font-body font-bold text-base text-[#1a1a1a]">
        {name} | {handle}
      </h3>
    </div>
  </article>
);

const ArrowIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="68" height="66" viewBox="0 0 68 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.5 2.49988C22.5 10.4999 50.6667 36.8332 65.5 63.4999" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M65.5 63.5L50.5 61.5L54 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Testimonials = () => {
  return (
    <section className="bg-background-primary py-24">
      <div className="container">
        <div className="flex items-start gap-4 mb-16 md:mb-20">
          <h2 className="font-display text-[42px] font-bold text-white leading-tight">
            Elas não sabiam nada<br />sobre Inteligência Artificial
          </h2>
          <div className="pt-6 hidden md:block">
            <ArrowIcon className="w-16 h-auto text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <TestimonialCard {...testimonialData[0]} />
            <TestimonialCard {...testimonialData[2]} />
          </div>
          <div className="flex flex-col gap-6 md:mt-16">
            <TestimonialCard {...testimonialData[1]} />
            <TestimonialCard {...testimonialData[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;