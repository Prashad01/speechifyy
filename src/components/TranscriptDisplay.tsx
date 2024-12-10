import React from 'react';
import { motion } from 'framer-motion';
import type { TranscriptSegment } from '../types';

interface TranscriptDisplayProps {
  segments: TranscriptSegment[];
}

export const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ segments }) => {
  return (
    <div className="w-full h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="h-full p-6 overflow-y-auto">
        {segments.map((segment, index) => (
          <motion.div
            key={segment.timestamp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {new Date(segment.timestamp).toLocaleTimeString()}
            </p>
            <p className="text-gray-800 dark:text-gray-200 mt-1">
              {segment.text}
            </p>
          </motion.div>
        ))}
        {segments.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400 text-center italic">
              Your transcript will appear here...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};