import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import HowToUsePage from './pages/HowToUsePage';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Header theme={theme} onThemeToggle={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;