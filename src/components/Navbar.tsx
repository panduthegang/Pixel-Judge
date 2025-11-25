import React, { useState } from 'react';
import { VintageButton } from './ui/VintageButton';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b-2 border-vintage-border bg-vintage-cream sticky top-0 z-50">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-vintage-charcoal flex items-center justify-center text-vintage-cream font-serif text-2xl font-black border-2 border-vintage-border">
              P
            </div>
            <span className="font-serif text-2xl font-bold tracking-tighter text-vintage-charcoal">
              PixelJudge
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-vintage-charcoal hover:underline decoration-2 underline-offset-4 font-mono uppercase text-sm">Features</a>
            <a href="#process" className="text-vintage-charcoal hover:underline decoration-2 underline-offset-4 font-mono uppercase text-sm">Process</a>
            <a href="#testimonials" className="text-vintage-charcoal hover:underline decoration-2 underline-offset-4 font-mono uppercase text-sm">Testimony</a>
            <VintageButton variant="primary" className="ml-4">
              Get Judged
            </VintageButton>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-vintage-charcoal p-2 border-2 border-vintage-border hover:bg-vintage-charcoal hover:text-white transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-vintage-border bg-vintage-paper p-4 flex flex-col space-y-4">
          <a href="#features" className="block text-vintage-charcoal font-bold font-mono uppercase" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#process" className="block text-vintage-charcoal font-bold font-mono uppercase" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#testimonials" className="block text-vintage-charcoal font-bold font-mono uppercase" onClick={() => setIsOpen(false)}>Testimony</a>
          <VintageButton variant="primary" className="w-full">
            Get Judged
          </VintageButton>
        </div>
      )}
    </nav>
  );
};