import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="bg-vintage-red py-24 md:py-32 px-6 border-b-2 border-vintage-border text-vintage-cream overflow-hidden relative">
      <div className="w-full text-center relative z-10">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter mix-blend-hard-light opacity-90">
          We Reject<br />Mediocrity
        </h2>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="h-px w-24 bg-vintage-cream/50 hidden md:block" />
          <p className="font-mono text-xl md:text-2xl text-center max-w-3xl leading-relaxed font-bold text-vintage-cream">
            "Design without discipline is merely decoration. We bring the discipline."
          </p>
          <div className="h-px w-24 bg-vintage-cream/50 hidden md:block" />
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
    </section>
  );
};