// components/AboutUs.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000'
];

interface Card {
  src: string;
  height: number; // Высота в пикселях
  rotation: number; // Угол поворота в градусах
}

const AboutUs: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    // Генерируем случайные высоты и повороты для каждой карточки
    const generatedCards: Card[] = [...images, ...images].map((src) => ({
      src,
      height: Math.floor(Math.random() * (300 - 200 + 1)) + 200, // Высота от 200px до 300px
      rotation: Math.floor(Math.random() * (15 - (-15) + 1)) - 15, // Поворот от -15deg до 15deg
    }));
    setCards(generatedCards);
  }, []);

  return (
    <section id="about" className="py-16 bg-primary relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-6xl font-bold text-center mb-8 text-white">О НАС</h2>
        <div className="bg-black bg-opacity-70 p-8 rounded-lg mb-8">
          <p className="text-xl text-white mb-4">
            МЫ - музыкальная школа в Хабаровске. В нашей команде только профессионалы с большим опытом и любовью к своему делу.
          </p>
          <p className="text-xl text-white mb-4">
            Обучение в нашей школе подходит для всех возрастов. С нами Вы можете не только научиться играть на музыкальных инструментах, но и найти единомышленников.
          </p>
          <p className="text-xl text-white">
            А на отчетном концерте почувствовать себя настоящей рок звездой!
          </p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden" style={{ height: '350px' }}>
        {/* Добавляем верхний отступ, чтобы поднять карточки ниже */}
        <motion.div 
          className="flex absolute top-16" // Добавлено top-16 (примерно 64px)
          animate={{ 
            x: [0, -((250 + 20) * cards.length / 2)] // Ширина одной карточки + отступ * количество карт / 2 (для повторения)
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
          style={{ width: `${cards.length * 270}px` }} // 250px ширина + 20px отступ
        >
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="flex-none mx-2 bg-white p-2 shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl"
              style={{
                width: '250px',
                height: `${card.height}px`,
                margin: '0 10px',
                transform: `rotate(${card.rotation}deg)`,
                transition: 'transform 0.6s ease-in-out',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={card.src}
                  alt={`Music image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;