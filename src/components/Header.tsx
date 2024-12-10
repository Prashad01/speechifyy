import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Mic2, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onThemeToggle }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/features', label: 'Features' },
    { path: '/how-to-use', label: 'How to Use' },
    { path: '/about', label: 'About' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Mic2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                Speechify
              </span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group flex items-center gap-2 ${
                  location.pathname === item.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.icon && item.icon}
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"
                  initial={false}
                  animate={{ width: location.pathname === item.path ? '100%' : '0%' }}
                />
              </Link>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onThemeToggle}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};