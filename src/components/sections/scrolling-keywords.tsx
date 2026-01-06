import React from 'react';

const FourPointStarIcon = ({ className }: {className?: string;}) =>
<svg
  width="32"
  height="32"
  viewBox="0 0 32 32"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  className={className}>

    <path d="M16 32L20.2428 20.2428L32 16L20.2428 11.7572L16 0L11.7572 11.7572L0 16L11.7572 20.2428L16 32Z" />
  </svg>;


const KEYWORDS = [
"inteligência artificial",
"negócios digitais",
"produtividade",
"escala",
"lucratividade"];


const ScrollingKeywords = () => {
  // We duplicate the keywords to create a seamless, infinite scrolling effect.
  // Using multiple copies ensures the content is wide enough for all screen sizes.
  // The CSS animation moves the container by -50%, which works perfectly with duplicated content.
  const marqueeKeywords = [...KEYWORDS, ...KEYWORDS, ...KEYWORDS, ...KEYWORDS];

  return (
    <section className="bg-background-primary py-4 font-body overflow-hidden !w-full !h-[58px]">
      <div className="flex animate-marquee whitespace-nowrap text-foreground">
        {marqueeKeywords.map((keyword, index) =>
        <div key={index} className="flex shrink-0 items-center mx-5">
            <FourPointStarIcon className="h-8 w-8" />
            <span className="ml-4 text-lg font-medium">
              {keyword}
            </span>
          </div>
        )}
      </div>
    </section>);

};

export default ScrollingKeywords;