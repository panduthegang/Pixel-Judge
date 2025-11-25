import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-vintage-charcoal text-vintage-paper py-16 border-t-4 border-vintage-gold">
      <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-4xl font-bold mb-6">PixelJudge</h2>
          <p className="font-mono text-sm opacity-60 max-w-md leading-relaxed">
            Est. 2025. Dedicated to the eradication of bad design through superior intelligence and harsh judgment. We don't just correct errors; we instill character.
          </p>
        </div>
        
        <div>
          <h4 className="font-mono font-bold uppercase tracking-widest mb-6 text-vintage-gold text-xs">Sitemap</h4>
          <ul className="space-y-3 font-serif text-lg">
            <li><a href="/" className="hover:text-vintage-gold transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-vintage-gold transition-colors">Features</a></li>
            <li><a href="/case-studies" className="hover:text-vintage-gold transition-colors">Case Studies</a></li>
            <li><a href="#testimonials" className="hover:text-vintage-gold transition-colors">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono font-bold uppercase tracking-widest mb-6 text-vintage-gold text-xs">Legal</h4>
          <ul className="space-y-3 font-serif text-lg">
            <li><a href="#" className="hover:text-vintage-gold transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-vintage-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-vintage-gold transition-colors">Cookie Usage</a></li>
          </ul>
        </div>
      </div>
      
      <div className="w-full px-6 md:px-12 mt-16 pt-8 border-t border-vintage-paper/10 flex flex-col md:flex-row justify-between items-center font-mono text-xs opacity-40">
        <p>© 2025 PixelJudge Inc. All rights reserved.</p>
        <p>Crafted with malice & love.</p>
      </div>
    </footer>
  );
};