import React from 'react';
import { Eye, Type, Zap, Feather } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <div className={`p-8 md:p-12 border-b-2 border-vintage-border lg:border-b-0 lg:border-r-2 last:border-r-0 hover:bg-vintage-cream transition-colors group bg-vintage-paper`}>
    <div className="w-16 h-16 mb-8 border-2 border-vintage-border flex items-center justify-center bg-white shadow-retro group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all rounded-none">
      <Icon className="w-8 h-8 text-vintage-charcoal" />
    </div>
    <h3 className="font-serif text-3xl font-bold mb-4 text-vintage-charcoal">{title}</h3>
    <p className="font-mono text-sm leading-loose text-vintage-charcoal/80">
      {description}
    </p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Ruthless Review",
      description: "Our algorithm scans your wireframes for inconsistencies, accessibility failures, and aesthetic crimes with zero hesitation."
    },
    {
      icon: Type,
      title: "Prompt Alchemy",
      description: "Turn scratchy sketches into gold standard prompts. We interpret your intent and translate it into language models understand."
    },
    {
      icon: Zap,
      title: "Instant Verdict",
      description: "No more waiting for scheduled design reviews. Get immediate feedback on your layout, hierarchy, and spacing."
    },
    {
      icon: Feather,
      title: "Classic Standards",
      description: "We judge based on timeless design principles, not fleeting trends. Symmetry, proportion, and readability are king."
    }
  ];

  return (
    <section id="features" className="w-full border-b-2 border-vintage-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} index={i} />
        ))}
      </div>
    </section>
  );
};