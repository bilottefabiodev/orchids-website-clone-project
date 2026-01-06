import Image from "next/image";
import { ChevronRight } from "lucide-react";

const InstructorBio = () => {
  return (
    <section className="bg-gradient-to-b from-[#E8E5E0] to-[#0A0A0A]">
      <div className="container mx-auto pt-[120px] pb-[60px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-12">
          {/* Left Column: Image */}
          <div className="flex-1 w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[550px] aspect-[592/739]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-80px)] aspect-square border-2 border-dashed border-[#E88B4E] rounded-full z-0 opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square border-2 border-solid border-[#E88B4E] rounded-full z-0 opacity-20"></div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-INDIV-AMANDA-BIO-9.avif"
                alt="Amanda Lourenço, an expert in AI for digital businesses."
                fill
                className="rounded-3xl object-cover grayscale a z-10"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 550px"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex-1 w-full lg:w-1/2">
            <span className="bg-[#F5F3F0] text-[#1E1E1E] font-bold font-body text-sm rounded-md py-1 px-3">
              Quem te guiará
            </span>

            <h2 className="font-display text-[#1E1E1E] text-[52px] leading-none mt-6">
              Eu Sou Amanda Lourenço
            </h2>

            <div className="space-y-4 mt-6 font-body text-balance leading-relaxed">
              <p className="text-[#2D2D2D]">
                E desde 2023 tenho uma agência de automações com Inteligência Artificial que aplica e executa IA em empresas do mundo inteiro: China, Estados Unidos, Índia.
              </p>
              <p className="text-text-secondary">
                Tudo aquilo que a galera aqui no Brasil fica mentindo pra você, dizendo que funciona, eu já testei na prática e sei exatamente o que funciona e o que não funciona.
              </p>
              <p className="text-text-secondary">
                O que que é papo e o que que dá dinheiro de verdade.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-4 mt-12">
              <div className="flex items-center justify-between bg-[#1e1e1e]/50 backdrop-blur-sm rounded-xl py-3 px-4 md:px-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#b72025] text-white text-[10px] font-bold font-secondary flex-shrink-0">ESPM</div>
                  <span className="font-bold text-white text-sm md:text-base">MBA Inteligência de Negócios & Mídias Digitais</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/50 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between bg-[#1e1e1e]/50 backdrop-blur-sm rounded-xl py-3 px-4 md:px-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-black text-[9px] font-bold font-secondary flex-shrink-0">emb.</div>
                  <span className="font-bold text-white text-sm md:text-base">Gerenta de Produto, Dados e Inteligência de Mercado</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/50 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between bg-[#1e1e1e]/50 backdrop-blur-sm rounded-xl py-3 px-4 md:px-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#a11116] text-white text-[10px] font-bold font-secondary flex-shrink-0">PUCPR</div>
                  <span className="font-bold text-white text-sm md:text-base">Engenharia Química (PUCPR)</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/50 flex-shrink-0" />
              </div>
            </div>

            <p className="font-body font-bold text-lg text-white mt-12">
              E já te aviso:
            </p>
            <div className="space-y-3 mt-3 font-body text-text-secondary text-balance leading-relaxed">
              <p>
                Não venha esperando modinha, promptzinho imbecil que você nunca mais vai usar, ou hackezinho de produtividade.
              </p>
              <p>
                Vou te mostrar na prática onde usar IA faz sentido e onde não faz sentido nenhum. Chega de tentar te vender que é o primeiro passo que você tem que dar.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Card: 0 to 500k */}
        <div className="mt-16 lg:mt-24 border-2 border-dashed border-white/20 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="bg-background-tertiary border border-border-subtle rounded-xl p-4 w-full max-w-[280px] mx-auto shadow-lg relative">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[10px] text-text-tertiary font-secondary truncate">My workspace / 2024 / Mentoria 01</p>
                  <div className="w-5 h-5 rounded-full bg-muted flex-shrink-0"></div>
                </div>
                <div className="bg-background-primary p-3 rounded-md relative border border-border-subtle">
                  <div className="flex gap-4 text-[11px] text-text-secondary font-body font-bold mb-2">
                    <p>Insights</p>
                    <p className="text-text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary">Summary</p>
                    <p>... (314)</p>
                  </div>
                  <div className="flex justify-start items-center space-x-6 mt-4">
                    <div>
                      <p className="font-bold text-xl text-text-primary">1.832</p>
                      <p className="text-xs text-text-tertiary font-body">Views</p>
                    </div>
                    <div>
                      <p className="font-bold text-xl text-text-primary">103,9 mil</p>
                      <p className="text-xs text-text-tertiary font-body">Results</p>
                    </div>
                  </div>
                  <div className="absolute top-[60px] left-[80px] w-[80px] h-[25px] border-2 border-primary rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left flex-1">
              <h3 className="font-display text-white text-[32px] md:text-4xl leading-tight text-balance">
                Vou abrir como saí do R$0 <span className="text-gradient-primary">→</span> R$500k em 6 meses, <span className="text-nowrap">sem time</span>, aplicando IA na minha operação como mentora e prestadora de serviço.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorBio;