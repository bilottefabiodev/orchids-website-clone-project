import Image from 'next/image';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-01a-7.avif",
    alt: "Marília Ponte",
    headline: "Dobramos a taxa de conversão",
    text: "Cortamos reuniões e custos inúteis e hoje tomamos decisões rápidas. Tudo aconteceu em poucas semanas de mentoria.",
    name: "Marília Ponte",
    handle: "@mariliapoonte"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-02a-5.avif",
    alt: "Liz Valz",
    headline: "Uma apresentadora com 1 milhão de seguidores me seguiu agora",
    text: "vindo do vídeo que postei hoje criado com IA. Caramba, que metodologia sensacional. Muito obrigada, Amanda.",
    name: "Liz Valz",
    handle: "@lizvalz"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-03-6.avif",
    alt: "Marina Ratton",
    headline: "A Amanda não só ensinou IA, ela virou a chave da nossa operação.",
    text: "Hoje, a gente só foca no que realmente move a receita. Você tem cadeirinha de camarote no nosso coração, Amanda.",
    name: "Marina Ratton",
    handle: "@marinaratton"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-04-4.avif",
    alt: "Nathalia Rabello",
    headline: "Eu cheguei me sentindo babá dos meus clientes,",
    text: "Sem saber monetizar meu conhecimento e saí com direção, mentoria criada e os primeiros 15k faturados em 5 dias.\n\nO método da Amanda me ajudou a transformar burnout em plano, caos em posicionamento, e a raiva do mercado em movimento.\n\nFoi a primeira vez que me senti líder, e não só uma executora.",
    name: "Nathalia Rabello",
    handle: "@nathaliarabello_"
  }
];

const QuoteIcon = () => (
    <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.824 28H1.36L14.184 0.951999H18.96L12.824 28Z" fill="#D9D4CE" />
      <path d="M30.424 28H18.96L31.784 0.951999H36.56L30.424 28Z" fill="#D9D4CE" />
    </svg>
  );

const TestimonialsCarousel = () => {
  return (
    <section className="bg-[#1a1a1a] py-20 md:py-[100px] font-body text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-center items-start mb-16 md:mb-20">
          <h2 className="text-[19px] leading-[1.4] text-center md:text-left text-[#f5f3f0]">
            Elas não sabiam nada sobre <br />Inteligência Artificial
          </h2>
          <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block ml-4 -mt-2 shrink-0">
            <path d="M1 51C1 51 32 50.5 45.5 25.5C59 0.5 35 1 35 1" stroke="#F5F3F0" strokeWidth="2"></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={cn(
                "bg-[#f5f3f0] rounded-2xl px-10 py-12 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out hover:scale-[1.02]",
                i % 2 !== 0 && "md:mt-16"
              )}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      width={80}
                      height={80}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                    <QuoteIcon />
                  </div>
                  <h3 className="font-bold text-2xl text-[#2d2d2d] leading-[1.2] mb-4">
                    {testimonial.headline}
                  </h3>
                  <div className="space-y-4 text-base text-[#2d2d2d] leading-[1.6]">
                    {testimonial.text.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <p className="mt-8 text-base text-[#2d2d2d] leading-[1.6]">
                  <strong>{testimonial.name}</strong> | {testimonial.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;