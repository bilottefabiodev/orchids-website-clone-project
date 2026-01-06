import Image from "next/image";
import { GraduationCap } from "lucide-react";

const CredentialBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex w-full items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-lg">
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md">
      {icon}
    </div>
    <p className="font-body text-sm font-medium text-white">{text}</p>
  </div>
);

const InstructorSection = () => {
  const credentials = [
    {
      icon: (
        <div className="flex h-full w-full items-center justify-center rounded-md bg-[#D6001C]">
          <span className="font-bold text-white">ESPM</span>
        </div>
      ),
      text: "MBA Inteligência de Negócios & Mídias Digitais",
    },
    {
      icon: (
        <div className="flex h-full w-full items-center justify-center rounded-md bg-[#00AEEF]">
          <span className="font-bold text-white">ambev</span>
        </div>
      ),
      text: "Gerenta de Produto, Dados e Inteligência de Mercado",
    },
    {
      icon: (
        <div className="flex h-full w-full items-center justify-center rounded-md bg-black/30">
          <GraduationCap className="h-6 w-6 text-[#EC4899]" />
        </div>
      ),
      text: "Engenharia Química (PUCPR)",
    },
  ];

  return (
    <section id="instructor" className="bg-[#0A0A0A] py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-8">
          <div className="flex w-full flex-col items-center gap-8 lg:w-1/2 lg:items-start">
            <div className="w-fit">
              <h3 className="border-b-2 border-primary pb-2 font-body text-base font-bold uppercase tracking-[1.6px] text-muted-foreground">
                Quem te guiará
              </h3>
            </div>
            <h2 className="text-balance font-display text-5xl text-white md:text-[56px] lg:text-left text-center leading-[1.1]">
              Eu Sou Amanda Lourenço
            </h2>
            <div className="space-y-4 text-balance font-body text-lg font-medium leading-[1.6] text-muted-foreground lg:text-left text-center">
              <p>
                E desde 2023 tenho uma agência de automações com Inteligência
                Artificial que aplica e executa IA em empresas do mundo inteiro:
                China, Estados Unidos, Índia.
              </p>
              <p>
                Tudo aquilo que a galera aqui no Brasil fica mentindo pra você,
                dizendo que funciona, eu já testei na prática e sei exatamente o que
                funciona e o que não funciona.
              </p>
              <p>O que que é papo e o que que dá dinheiro de verdade.</p>
            </div>
            <div className="w-full rounded-2xl border border-white/10 p-6 text-left">
              <p className="font-body text-xl font-bold text-white">
                E já te aviso:
              </p>
              <p className="mt-2 font-body text-base font-medium text-muted-foreground">
                Não venha esperando modinha, promptzinho imbecil que você nunca
                mais vai usar, ou hackezinho de produtividade.
              </p>
              <p className="mt-4 font-body text-base font-medium text-muted-foreground">
                Vou te mostrar na prática onde usar IA faz sentido e onde não faz
                sentido nenhum. Chega de tentar te vender que é o primeiro passo
                que você tem que dar.
              </p>
            </div>
            <p className="text-balance font-body text-lg text-muted-foreground lg:text-left text-center">
              Vou abrir como saí do 0 aos 500k em 6 meses, sem time, aplicando
              IA na minha operação como mentora e prestadora de serviço.
            </p>
            <a
              href="#oferta"
              className="mt-4 rounded-full bg-gradient-to-br from-accent-gradient-start to-accent-gradient-end px-10 py-4 font-body text-base font-bold uppercase text-white shadow-[0_4px_12px_rgba(232,103,63,0.3)] transition-transform hover:scale-105"
            >
              GARANTIR INGRESSO | LOTE 01
            </a>
          </div>

          <div className="relative w-full lg:w-1/2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-INDIV-AMANDA-BIO-9.avif"
              alt="Amanda Lourenço"
              width={630}
              height={792}
              className="h-auto w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            />
            <div className="absolute bottom-6 right-6 flex w-[calc(100%-48px)] flex-col gap-4 sm:w-auto md:bottom-10 md:right-10">
              {credentials.map((cred, index) => (
                <CredentialBadge key={index} icon={cred.icon} text={cred.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;