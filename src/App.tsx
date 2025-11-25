import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Manifesto } from './components/Manifesto';
import { Ticker } from './components/Ticker';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-vintage-cream font-mono selection:bg-vintage-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Hero />
        <Ticker />
        <Manifesto />
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}