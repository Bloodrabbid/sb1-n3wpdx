import React from 'react';
import { motion } from 'framer-motion';

interface ResultSectionProps {
  answers: Record<string, string>;
  instrument: string;
  onRestart: () => void;
}

const ResultSection: React.FC<ResultSectionProps> = ({ answers, instrument, onRestart }) => {
  const generateResultMessage = () => {
    const learner = answers['learner'];
    const goal = answers['goal'];
    const instrumentName = instrument.toLowerCase();

    let learnerText = learner.startsWith('Я сам') ? 'Вы сделали первый шаг' : 'Ваш ребенок сделал первый шаг';
    
    return `${learnerText} к тому, чтобы стать настоящим героем музыки на ${instrumentName}. ${goal ? `Ваша цель – ${goal.split('(')[0].trim()}, и мы поможем ее достичь.` : ''} Наша студия БУМ (Безудержно Увлекательная Музыка) готова сопровождать вас на этом пути!`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Спасибо за прохождение квиза!</h2>
      <p className="text-lg mb-8">{generateResultMessage()}</p>
      <motion.button
        onClick={onRestart}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Пройти снова
      </motion.button>
    </motion.div>
  );
};

export default ResultSection;