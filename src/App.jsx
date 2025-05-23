import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-950">
        <div className="animate-pulse text-blue-500 text-2xl font-bold">
          <span className="text-blue-400">{`{`}</span>
          <span className="text-purple-500">Loading</span>
          <span className="text-blue-400">{`}`}</span>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <AnimatePresence mode="wait">
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainLayout>
      </AnimatePresence>
    </Router>
  );
}

export default App;