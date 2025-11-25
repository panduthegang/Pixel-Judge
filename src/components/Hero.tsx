import React from 'react';
import { VintageButton } from './ui/VintageButton';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetJudged: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetJudged }) => {
  return (
    <section className="w-full bg-vintage-cream pt-20 pb-24 px-4 relative overflow-hidden border-b-2 border-vintage-border">
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.1,-56.6,76.8,-43.1C84.5,-29.6,89.7,-15.3,87.7,-1.2C85.7,13,76.5,26.9,67,39.1C57.5,51.3,47.7,61.7,36.1,68.5C24.5,75.3,11.1,78.5,-1.5,81.1C-14.1,83.7,-29.7,85.7,-42.8,80.2C-55.9,74.7,-66.5,61.7,-74.3,47.6C-82.1,33.5,-87.1,18.3,-85.8,3.6C-84.5,-11.1,-76.9,-25.3,-67.4,-37.7C-57.9,-50.1,-46.5,-60.7,-34,-68.1C-21.5,-75.5,-7.9,-79.7,4.2,-86.9L16.3,-94.2" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <div className="inline-block mb-6 px-4 py-1 border-2 border-vintage-border bg-vintage-gold shadow-retro transform -rotate-2">
          <span className="font-mono font-bold text-xs uppercase tracking-widest text-vintage-charcoal">
            Version 1.0 — The Standard
          </span>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl font-black text-vintage-charcoal leading-[0.9] mb-8 tracking-tight">
          THE DISCERNING EYE <br />
          <span className="italic font-normal text-vintage-red">for your</span> WIREFRAMES
        </h1>
        
        <p className="max-w-2xl mx-auto font-mono text-lg md:text-xl text-vintage-charcoal/80 mb-12 leading-relaxed">
          PixelJudge critiques your UI/UX designs and generates prompt improvements with the ruthless efficiency of a 1920s editor and the precision of modern AI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <VintageButton variant="primary" className="text-lg px-8 py-4 flex items-center gap-2" onClick={onGetJudged}>
            Upload Wireframe <ArrowRight size={18} />
          </VintageButton>
          <VintageButton variant="outline" className="text-lg px-8 py-4 bg-vintage-cream">
            View Case Studies
          </VintageButton>
        </div>

        <div className="mt-16 border-t-2 border-vintage-border pt-8 flex justify-center gap-12 text-xs font-mono uppercase tracking-widest text-vintage-charcoal/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-vintage-red rounded-full"></div>
            <span>Instant Critique</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-vintage-red rounded-full"></div>
            <span>Prompt Generation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-vintage-red rounded-full"></div>
            <span>Design Harmony</span>
          </div>
        </div>
      </div>
    </section>
  );
};