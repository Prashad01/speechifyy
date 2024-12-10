import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-t border-gray-200 dark:border-gray-800 mt-12"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              VoiceScribe
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transform your voice into text with our intelligent speech recognition technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Connect
            </h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} VoiceScribe. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};