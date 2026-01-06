import React from 'react';

const StarIcon = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
    >
        <path
            d="M16 0L19.5878 12.4122L32 16L19.5878 19.5878L16 32L12.4122 19.5878L0 16L12.4122 12.4122L16 0Z"
            fill="#E8673F"
        />
    </svg>
);

const keywords = [
    "inteligência artificial",
    "negócios digitais",
    "produtividade",
    "escala",
    "lucratividade",
];

// Replicating the repetition found in the source HTML to fill wider screens.
const repeatedKeywords = [...keywords, ...keywords, ...keywords];

const MarqueeKeywords = () => {
    const renderMarqueeItems = () => (
        repeatedKeywords.map((keyword, index) => (
            <li key={index} className="flex items-center shrink-0">
                <StarIcon />
                <span className="ml-4 font-body font-bold text-[20px] uppercase tracking-[1px] text-foreground whitespace-nowrap">
                    {keyword}
                </span>
            </li>
        ))
    );

    return (
        <section className="bg-[#0A0A0A] py-[30px] w-full overflow-hidden">
            {/* The style tag is necessary for the custom marquee animation, as modifying tailwind.config.js is not an option here. */}
            <style>
                {`
                    @keyframes marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        animation: marquee 80s linear infinite;
                    }
                `}
            </style>
            <div className="flex animate-marquee">
                <ul className="flex items-center shrink-0 space-x-8 pr-8">
                    {renderMarqueeItems()}
                </ul>
                <ul className="flex items-center shrink-0 space-x-8 pr-8" aria-hidden="true">
                    {renderMarqueeItems()}
                </ul>
            </div>
        </section>
    );
};

export default MarqueeKeywords;