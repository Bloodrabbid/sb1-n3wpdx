import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const remainingPercentage = 100 - Math.round(progress);

  return (
    <div className="mb-8">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Чтобы стать героем, осталось заполнить {remainingPercentage}%!
      </p>
    </div>
  );
};

export default ProgressBar;