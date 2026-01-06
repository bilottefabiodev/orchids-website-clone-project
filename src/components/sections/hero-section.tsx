import { Globe, CalendarDays, Clock, Video } from 'lucide-react';
import Image from 'next/image';

const InfoBadge = ({ icon: Icon, text }: {icon: React.ElementType;text: string;}) =>
<div className="inline-flex w-auto items-center gap-1.5 rounded-full border border-primary/30 bg-transparent px-2.5 py-1 backdrop-blur-sm md:gap-2 md:border-2 md:px-5 md:py-2.5">
    <Icon className="h-3.5 w-3.5 text-white md:h-5 md:w-5" strokeWidth={2} />
    <span className="text-[11px] font-normal text-white md:text-sm">{text}</span>
  </div>;


const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/BG-TOPO-PV-WIAN-DESKTOP-DARK-1B-14.avif"
          alt="Workshop IA Background"
          fill
          className="object-cover object-center grayscale opacity-30"
          priority
        />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]/90 z-[1]" />
      
      <div className="container relative z-10 mx-auto px-6 pt-8 pb-16 md:px-8 md:pt-12 lg:pt-16 lg:pb-24 !w-full !h-full !max-w-full">
        
        {/* Content */}
        <div className="flex flex-col !w-full !h-full max-w-4xl mx-auto lg:mx-0">
          {/* Logo */}
          <div className="mb-6 flex items-start gap-1.5 !w-[99px] !h-[31px]">
            <div className="relative h-[30px] w-[30px] flex-shrink-0">
              {/* Pixelated circle logo */}
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect width="6" height="6" fill="#E8673F" rx="1" />
                  </pattern>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#dots)" strokeWidth="10" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[4px] font-normal text-white/60">Workshop</span>
              <h2 className="font-display text-[7px] font-bold leading-tight text-white">
                IA para<br />negócios digitais
              </h2>
            </div>
          </div>

          {/* Info Badges */}
          <div className="mb-32 flex flex-wrap items-start gap-2 md:flex-col md:items-start md:gap-3 !w-[142px] !h-[61px]">
            <InfoBadge icon={Globe} text="Negócios digitais" />
            <InfoBadge icon={CalendarDays} text="Dias 29 e 30/11" />
            <InfoBadge icon={Clock} text="Das 10h às 17h" />
            <InfoBadge icon={Video} text="AO VIVO no Zoom" />
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 font-display text-[1.65rem] font-bold leading-[1.15] text-white md:text-5xl lg:text-[3.5rem]">
            Como aplicar{' '}
            <span className="bg-gradient-to-r from-[#D15449] via-[#E88B4E] to-[#F2B263] bg-clip-text text-transparent">
              IA no seu Negócio Digital para Reduzir até 70% da carga operacional
            </span>{' '}
            <span className="font-body text-[1.15rem] font-normal italic text-white md:text-3xl lg:text-[2.5rem]">
              (mesmo sem saber programar ou usar Make/n8n)!
            </span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-base leading-relaxed text-white/90 md:text-lg">
            <strong>Em Apenas 2 dias</strong>, você vai ver na prática{' '}
            <strong>quais IAs usar</strong>, como implementar e{' '}
            <strong>onde elas realmente fazem diferença no seu faturamento</strong>.
          </p>

          {/* CTA Button */}
          <a
            href="#oferta"
            className="mb-6 inline-block w-full transform rounded-xl bg-gradient-to-r from-[#D15449] via-[#E88B4E] to-[#F2B263] py-5 text-center text-base font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(209,84,73,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(209,84,73,0.6)] md:text-lg md:shadow-[0_10px_35px_rgba(209,84,73,0.5)]">
            GARANTIR INGRESSO | LOTE 01
          </a>

          {/* Progress Bar */}
          <div className="w-full">
            <div className="mb-2 h-3 overflow-hidden rounded-full border-2 border-white/20 bg-transparent">
              <div
                className="h-full bg-gradient-to-r from-[#8B4A4A] via-[#8B4A4A] to-[#8B4A4A]"
                style={{ width: '100%' }} />
            </div>
            <p className="text-center text-sm text-white/70">
              <span className="font-bold">100% do LOTE 1</span> vendido a R$47
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;