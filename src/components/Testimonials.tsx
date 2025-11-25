import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, role, quote, rating }: { name: string, role: string, quote: string, rating: number }) => (
  <div className="bg-vintage-cream p-8 border-2 border-vintage-border shadow-retro h-full flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-vintage-charcoal text-vintage-cream px-3 py-1 font-mono text-xs uppercase tracking-widest border border-vintage-cream">
      Exhibit #{Math.floor(Math.random() * 1000)}
    </div>
    <div className="flex justify-center gap-1 mb-6 text-vintage-gold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} />
      ))}
    </div>
    <p className="font-serif text-xl text-center leading-relaxed mb-8 flex-grow italic">
      "{quote}"
    </p>
    <div className="text-center border-t border-vintage-border/10 pt-4 mt-auto">
      <h4 className="font-bold font-mono uppercase text-sm tracking-wider">{name}</h4>
      <p className="font-mono text-xs opacity-60 mt-1">{role}</p>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Product Designer",
      quote: "I thought my wireframes were perfect. PixelJudge tore them apart. My next version converted 40% better.",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Frontend Dev",
      quote: "Finally, a tool that understands that padding isn't optional. It's the digital equivalent of a stern grandmother.",
      rating: 5
    },
    {
      name: "Elena Vo",
      role: "UX Researcher",
      quote: "Brutal. Honest. Necessary. The prompt generation saved me hours of explaining context to generic AI tools.",
      rating: 4
    },
    {
      name: "David Chen",
      role: "Art Director",
      quote: "The design critiques are spot on. It caught spacing inconsistencies that the human eye missed after staring for hours.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-vintage-paper border-b-2 border-vintage-border">
      <div className="w-full mb-16 text-center">
        <h2 className="font-serif text-5xl md:text-6xl font-black text-vintage-charcoal mb-6">Witness Statements</h2>
        <p className="font-mono text-vintage-charcoal/60 uppercase tracking-widest">Those who survived the judgment</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </section>
  );
};