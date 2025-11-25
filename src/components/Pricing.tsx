import React from 'react';
import { VintageButton } from './ui/VintageButton';
import { Check } from 'lucide-react';

const PricingTier = ({ title, price, features, highlighted = false }: { title: string, price: string, features: string[], highlighted?: boolean }) => (
  <div className={`flex flex-col p-8 border-2 border-vintage-border relative ${highlighted ? 'bg-vintage-charcoal text-vintage-cream -mt-4 mb-4 shadow-xl z-10' : 'bg-white text-vintage-charcoal'}`}>
    {highlighted && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-vintage-gold border-2 border-vintage-border px-4 py-1">
        <span className="font-mono text-xs font-bold uppercase text-vintage-charcoal tracking-widest">Most Popular</span>
      </div>
    )}
    <h3 className="font-serif text-3xl font-bold mb-2">{title}</h3>
    <div className="mb-8 font-mono border-b border-current pb-4">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-sm opacity-70">/month</span>
    </div>
    <ul className="flex-grow space-y-4 mb-8">
      {features.map((feat, i) => (
        <li key={i} className="flex items-start gap-3 font-mono text-sm">
          <Check size={16} className={`mt-0.5 ${highlighted ? 'text-vintage-gold' : 'text-vintage-red'}`} />
          <span>{feat}</span>
        </li>
      ))}
    </ul>
    <VintageButton variant={highlighted ? 'secondary' : 'outline'} className="w-full justify-center">
      Select Plan
    </VintageButton>
  </div>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 md:px-12 bg-vintage-paper border-t-2 border-vintage-border">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-5xl font-black mb-6 text-vintage-charcoal">Membership Dues</h2>
        <p className="font-mono text-vintage-charcoal/70">Invest in the quality of your craft. Simple, transparent pricing for the modern professional.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        <PricingTier 
          title="Apprentice" 
          price="$0" 
          features={["3 Critiques per month", "Basic Prompt Generation", "Community Support", "Watermarked Exports"]} 
        />
        <PricingTier 
          title="Journeyman" 
          price="$29" 
          features={["Unlimited Critiques", "Advanced Prompt Logic", "Priority Queue", "Export to Figma", "Custom Brand Rules"]} 
          highlighted={true}
        />
        <PricingTier 
          title="Master" 
          price="$99" 
          features={["API Access", "Team Collaboration", "White-label Reports", "Dedicated Account Manager", "Historical Archive"]} 
        />
      </div>
    </section>
  );
};