import React from 'react';
import { motion } from 'framer-motion';

interface InstrumentSelectionProps {
  instruments: string[];
  onSelect: (instrument: string) => void;
}

const InstrumentSelection: React.FC<InstrumentSelectionProps> = ({ instruments, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">Выберите ваш инструмент</h2>
      <div className="grid grid-cols-2 gap-4">
        {instruments.map((instr) => (
          <motion.button
            key={instr}
            onClick={() => onSelect(instr)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {instr}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default InstrumentSelection;