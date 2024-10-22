'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { advantages } from '../config/advantages';
import AdvantageCarousel from './AdvantageCarousel';

const Advantages = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState<number | null>(null);
  const [clickedAdvantage, setClickedAdvantage] = useState<number | null>(null);

  useEffect(() => {
    if (clickedAdvantage !== null) {
      setSelectedAdvantage(clickedAdvantage);
      setClickedAdvantage(null);
    }
  }, [clickedAdvantage]);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-white">НАШИ ПРЕИМУЩЕСТВА</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="advantage-item bg-white text-black cursor-pointer transition-transform hover:scale-105"
              onClick={() => setClickedAdvantage(index)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <advantage.icon className="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-primary" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-base sm:text-lg">{advantage.shortDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/images/advantages-bg.jpg')] bg-cover bg-center opacity-20"></div>
      {selectedAdvantage !== null && (
        <AdvantageCarousel 
          advantage={advantages[selectedAdvantage]} 
          onClose={() => setSelectedAdvantage(null)} 
        />
      )}
    </section>
  );
};

export default Advantages;