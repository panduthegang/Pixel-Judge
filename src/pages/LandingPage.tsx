import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Manifesto } from '../components/Manifesto';
import { Ticker } from '../components/Ticker';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex-grow flex flex-col w-full">
        <Hero onGetJudged={() => navigate('/judge')} />
        <Ticker />
        <Manifesto />
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};
