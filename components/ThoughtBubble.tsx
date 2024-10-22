// components/ThoughtBubble.tsx
'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ThoughtBubbleProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position: {
    top: string;
    left: string;
  };
}

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 20 },
};

const ThoughtBubble: React.FC<ThoughtBubbleProps> = ({
  isOpen,
  onClose,
  children,
  position,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    } else {
      window.removeEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute bg-white rounded-lg shadow-lg p-6 max-w-xs w-full mx-4 pointer-events-auto"
            variants={bubbleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{ top: position.top, left: position.left }}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
              aria-label="Close Thought Bubble"
            >
              <X size={20} />
            </button>

            <div className="text-black">
              {children}
            </div>

            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
              style={{
                width: '0',
                height: '0',
                borderLeft: '90px solid transparent',
                borderRight: '0px solid transparent',
                borderTop: '20px solid white',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThoughtBubble;