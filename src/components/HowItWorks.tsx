import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: 'Upload', desc: 'Submit your wireframe or sketch (PNG, JPG).' },
    { num: '02', title: 'Analyze', desc: 'The Judge scans for UI patterns and flaws.' },
    { num: '03', title: 'Refine', desc: 'Receive detailed prompts and actionable critique.' },
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-vintage-paper border-b-2 border-vintage-border relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="mb-20 text-center relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-vintage-charcoal inline-block border-b-4 border-vintage-gold pb-4">
          The Process
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[90%] mx-auto relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="relative p-8 md:p-12 border-2 border-vintage-border bg-white shadow-retro hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-vintage-red text-white font-serif font-bold text-2xl flex items-center justify-center border-2 border-vintage-border z-10 shadow-sm">
              {step.num}
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-serif text-3xl font-bold mb-4">{step.title}</h3>
              <div className="h-1 w-16 bg-vintage-charcoal mx-auto mb-6"></div>
              <p className="font-mono text-base text-vintage-charcoal/80 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};