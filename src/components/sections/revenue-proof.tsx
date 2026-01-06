import Image from "next/image";

const RevenueProof = () => {
  return (
    <section className="bg-background-primary py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-8 rounded-3xl border-2 border-dashed border-primary px-6 py-10 md:p-10 lg:flex-row">
          <div className="flex w-full flex-col items-center gap-6 text-center lg:w-[49%] lg:items-start lg:text-left">
            <h2 className="font-display text-[72px] font-bold leading-none text-white md:text-[104px]">
              R$0 ➜ R$500k
            </h2>
            <div className="w-full max-w-[380px] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-0-A-500K-DESKTOP-10.avif"
                alt="Print de dashboard mostrando crescimento"
                width={380}
                height={171}
                className="h-auto w-full rounded-[20px]"
              />
            </div>
          </div>
          <div className="w-full lg:w-[45%]">
            <h2 className="font-body text-2xl font-medium text-text-secondary md:text-[32px] md:leading-[1.3]">
              Vou abrir como saí do{" "}
              <span className="text-gradient-primary">
                0 aos 500k em 6 meses
              </span>
              , sem time, aplicando IA na minha operação como{" "}
              <span className="text-gradient-primary">
                mentora e prestadora de serviço.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueProof;