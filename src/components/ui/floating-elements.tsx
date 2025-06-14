import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
  const elements = [
    { size: 'w-2 h-2', position: 'top-1/4 left-1/4', delay: 0 },
    { size: 'w-1 h-1', position: 'top-1/3 right-1/4', delay: 1 },
    { size: 'w-3 h-3', position: 'bottom-1/4 left-1/3', delay: 2 },
    { size: 'w-1.5 h-1.5', position: 'bottom-1/3 right-1/3', delay: 3 },
    { size: 'w-2.5 h-2.5', position: 'top-1/2 left-1/6', delay: 4 },
    { size: 'w-1 h-1', position: 'top-3/4 right-1/6', delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.position} bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};