'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { X } from 'lucide-react';
import { Advantage } from '../config/advantages';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface AdvantageCarouselProps {
  advantage: Advantage;
  onClose: () => void;
}

const AdvantageCarousel: React.FC<AdvantageCarouselProps> = ({ advantage, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto relative flex flex-col h-full">
        <div className="flex justify-between items-center p-4 bg-black bg-opacity-50 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {advantage.title}
          </h2>
          <button 
            className="text-white hover:text-primary transition-colors focus:outline-none"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-white opacity-50 inline-block rounded-full transition-opacity',
            bulletActiveClass: 'opacity-100',
          }}
          className="w-full flex-grow"
        >
          {advantage.slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center p-4">
                {slide.type === 'description' && (
                  <div className="max-w-2xl p-4 md:p-8 bg-white bg-opacity-10 rounded-lg text-white overflow-y-auto max-h-full">
                    <p className="text-lg md:text-xl">{slide.content}</p>
                  </div>
                )}
                {slide.type === 'image' && (
                  <div className="relative w-full h-full">
                    <Image 
                      src={slide.content} 
                      alt={advantage.title} 
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                )}
                {slide.type === 'video' && (
                  <div className="w-full h-0 pb-[56.25%] relative">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src={slide.content} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AdvantageCarousel;