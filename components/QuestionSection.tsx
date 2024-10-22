import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionSectionProps {
  question: {
    question: string;
    answers: string[];
    key: string;
  };
  onAnswer: (key: string, answer: string) => void;
  answers: Record<string, string>;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ question, onAnswer, answers }) => {
  const processedQuestion = question.question.replace(/{(\w+)}/g, (match, key) => {
    return answers[key] || match;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">{processedQuestion}</h2>
      <AnimatePresence>
        <motion.div className="space-y-4">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              onClick={() => onAnswer(question.key, answer)}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {answer}
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionSection;