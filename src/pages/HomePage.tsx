import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, BookOpen, History } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { TranscriptDisplay } from '../components/TranscriptDisplay';
import { SavedTranscripts } from '../components/SavedTranscripts';
import { useLocalStorage } from '../hooks/useLocalStorage';

const HomePage: React.FC = () => {
  const { isListening, transcript, error, startListening, stopListening } = useSpeechRecognition();
  const { savedTranscripts, saveTranscript, downloadTranscript } = useLocalStorage();
  const recognitionRef = useRef<any>(null);

  const handleToggleListening = () => {
    if (isListening) {
      stopListening(recognitionRef.current);
      recognitionRef.current = null;
    } else {
      recognitionRef.current = startListening();
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Speech to Text Assistant
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Your intelligent lecture companion
        </p>
      </motion.div>

      {error && (
        <div className="bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-4 rounded">
          {error}
        </div>
      )}

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center mb-8"
      >
        <button
          onClick={handleToggleListening}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium
            transition-colors duration-200 shadow-lg
            ${isListening 
              ? 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700' 
              : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'}
          `}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5" />
              Stop Recording
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              Start Recording
            </>
          )}
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Current Transcript
            </h2>
          </div>
          <TranscriptDisplay segments={transcript} />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <History className="w-6 h-6 text-purple-500 dark:text-purple-400" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Saved Transcripts
            </h2>
          </div>
          <SavedTranscripts
            transcripts={savedTranscripts}
            onDownload={downloadTranscript}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;