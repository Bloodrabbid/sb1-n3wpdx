'use client';

import { Button } from './ui/button';

const HeroSection = () => {
  const handleClick = () => {
    // Open modal form logic here
    console.log('Button clicked');
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          БУМ студия музыки
        </h1>
        <Button
          className="cta-button bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-lg sm:text-xl font-semibold"
          onClick={handleClick}
        >
          ЗАПИСАТЬСЯ НА ПРОБНОЕ ЗАНЯТИЕ
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;