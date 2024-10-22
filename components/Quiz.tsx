'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { instruments, questions } from '../data/quizData';

const Quiz = () => {
  const [instrument, setInstrument] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (instrument) {
      setProgress((currentQuestionIndex / questions[instrument].length) * 100);
    }
  }, [currentQuestionIndex, instrument]);

  const handleInstrumentSelect = (selectedInstrument: string) => {
    setInstrument(selectedInstrument);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
  };

  const handleAnswer = (answer: string) => {
    if (!instrument) return;

    const currentQuestion = questions[instrument][currentQuestionIndex];
    setAnswers((prev) => ({ ...prev, [currentQuestion.key]: answer }));
    
    if (currentQuestionIndex < questions[instrument].length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setInstrument(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
    setProgress(0);
  };

  const getCurrentQuestion = () => {
    if (!instrument) return null;
    const currentQuestion = questions[instrument][currentQuestionIndex];
    if (!currentQuestion) return null;

    if (currentQuestion.condition) {
      const { key, value } = currentQuestion.condition;
      if (answers[key] !== value) {
        setCurrentQuestionIndex((prev) => prev + 1);
        return null;
      }
    }
    return currentQuestion;
  };

  const getAnswers = () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return [];
    if (currentQuestion.dynamic_answers && answers.music_style) {
      return [
        ...currentQuestion.answers,
        ...(currentQuestion.dynamic_answers[answers.music_style] || [])
      ];
    }
    return currentQuestion.answers;
  };

  const renderQuestion = () => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return null;

    const questionText = currentQuestion.question.replace(/{(\w+)}/g, (_, key) => answers[key] || '');

    return (
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">{questionText}</h3>
        <div className="grid grid-cols-1 gap-3">
          {getAnswers().map((answer, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(answer)}
              className="w-full text-left justify-start p-4 rounded-lg text-white font-semibold transition-all duration-300 ease-in-out bg-primary hover:bg-primary-dark"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm sm:text-base md:text-lg">{answer}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderResult = () => {
    const resultMessage = `Спасибо за прохождение квиза! Вы выбрали ${instrument} и ответили на все вопросы. Мы свяжемся с вами, чтобы обсудить дальнейшие шаги в вашем музыкальном путешествии!`;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">Результаты</h3>
        <p className="mb-4 text-white">{resultMessage}</p>
        <motion.button
          onClick={restartQuiz}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Пройти квиз снова
        </motion.button>
      </motion.div>
    );
  };

  return (
    <section id="quiz" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">ПРОЙДИТЕ НАШ КВИЗ</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-black bg-opacity-50 rounded-xl shadow-lg p-8"
        >
          {instrument && !showResult && (
            <div className="mb-4 bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
          <AnimatePresence mode="wait">
            {!instrument && (
              <motion.div
                key="instrument-selection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Выберите инструмент</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {instruments.map((instr) => (
                    <motion.button
                      key={instr}
                      onClick={() => handleInstrumentSelect(instr)}
                      className="w-full py-3 px-4 rounded-lg text-white font-semibold transition-all duration-300 ease-in-out bg-primary hover:bg-primary-dark"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {instr}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
            {instrument && !showResult && renderQuestion()}
            {showResult && renderResult()}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Quiz;