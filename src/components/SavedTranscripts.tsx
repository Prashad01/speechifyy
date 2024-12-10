import React from 'react';
import { motion } from 'framer-motion';
import { Download, Clock } from 'lucide-react';
import type { SavedTranscript } from '../types';

interface SavedTranscriptsProps {
  transcripts: SavedTranscript[];
  onDownload: (transcript: SavedTranscript) => void;
}

export const SavedTranscripts: React.FC<SavedTranscriptsProps> = ({
  transcripts,
  onDownload,
}) => {
  return (
    <div className="w-full h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="h-full p-6 overflow-y-auto">
        {transcripts.map((transcript, index) => (
          <motion.div
            key={transcript.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow mb-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {new Date(transcript.date).toLocaleString()}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {transcript.segments.length} segments
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDownload(transcript)}
                className="p-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <Download className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
        {transcripts.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 text-center italic">
              No saved transcripts yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};