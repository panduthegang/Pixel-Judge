import React from 'react';

export const Ticker: React.FC = () => {
  const text = " • BAD KERNING IS A MORAL FAILING • ALIGNMENT IS GODLINESS • RESPECT THE GRID • WHITE SPACE IS NOT EMPTY SPACE";
  
  return (
    <div className="w-full bg-vintage-gold border-b-2 border-vintage-border py-3 overflow-hidden flex relative z-20 select-none">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
      <div className="animate-scroll whitespace-nowrap flex">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="font-mono font-bold text-sm md:text-base uppercase tracking-widest text-vintage-charcoal mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};