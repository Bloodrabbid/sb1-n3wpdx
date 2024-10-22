// components/AnimatedDrumButton.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import DrumSVG from './DrumSVG';
import ThoughtBubble from './ThoughtBubble';

const AnimatedDrumButton: React.FC = () => {
  const [isBubbleOpen, setIsBubbleOpen] = useState<boolean>(false);
  const [bubblePosition, setBubblePosition] = useState<{
    top: string;
    left: string;
  }>({ top: '0', left: '0' });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (): void => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setBubblePosition({
        top: `${rect.top + rect.height / 2 - 400}px`,
        left: `${rect.left - 230}px`,
      });
    }
    setIsBubbleOpen(true);
  };

  const handleClose = (): void => {
    setIsBubbleOpen(false);
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        className="fixed bottom-8 right-8 bg-primary dark:bg-primary-dark text-secondary p-4 rounded-full shadow-lg z-50 flex items-center justify-center w-24 h-24 overflow-visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        aria-label="Open Thought Bubble"
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <DrumSVG />

          {[1, 2, 3].map((i: number) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border-2 border-primary rounded-full"
              initial={{ scale: 0, opacity: 0.7 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              style={{ transform: 'translate(-50%, -50%)' }}
            />
          ))}

          <motion.div
            className="absolute bottom-[60%] left-1/2 w-1 h-10 bg-secondary origin-bottom shadow-lg"
            style={{ transform: 'translate(-10px, -60%) rotate(15deg)' }}
            animate={{ rotate: [5, 7, 5], scaleY: [1, 1.2, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 0.2, // Задержка для естественного эффекта
            }}
            aria-hidden="true"
          />

          <motion.div
            className="absolute bottom-[60%] left-1/3 w-1 h-10 bg-secondary origin-bottom shadow-lg"
            style={{ transform: 'translate(10px, -60%) rotate(-15deg)' }}
            animate={{ rotate: [-10, -12, -10], scaleY: [1, 1.2, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 0.6, // Задержка для естественного эффекта
            }}
            aria-hidden="true"
          />
        </div>
      </motion.button>

      <ThoughtBubble
        isOpen={isBubbleOpen}
        onClose={handleClose}
        position={bubblePosition}
      >
        <h2 className="text-2xl font-bold mb-4">Запишитесь к нам!</h2>
        <p className="mb-4">
          Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее
          время.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Ваш Email"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded hover:bg-primary-dark transition-colors"
          >
            Записаться
          </button>
        </form>
      </ThoughtBubble>
    </>
  );
};

export default AnimatedDrumButton;
