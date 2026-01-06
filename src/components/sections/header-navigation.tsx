import Image from 'next/image';
import Link from 'next/link';

const HeaderNavigation = () => {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/Logo-WIAND-ht-1a-1.avif";

  return (
    <header className="fixed top-0 left-0 bg-secondary z-50 !w-full !h-5">
      <div className="container !w-[724px] !h-[69px] !max-w-[724px]">
        {/* Mobile Navigation */}
        <div className="flex items-center justify-center py-4">
          <Link href="/">
            <Image
              src={logoUrl}
              alt="Workshop IA para negócios digitais logo"
              width={250}
              height={70}
              priority />
          </Link>
        </div>
      </div>
    </header>);

};

export default HeaderNavigation;