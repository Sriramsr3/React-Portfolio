import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import myphoto from '../assets/me.jpg';

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
        <motion.div 
          className="lg:col-span-3 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, <span className="inline-block animate-wave origin-bottom-right">👋</span>
          </h1>
          
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">
              My Name is
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Sriram SR</span>
            </h2>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-300">
            An AI Engineer
          </h3>
          
          <div className="pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              View My Work <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-2 flex justify-center lg:justify-end items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-1 rounded-full border-2 border-blue-400/30"></div>
            <img 
              src={myphoto} 
              alt="Profile" 
              className="rounded-full w-full h-full object-cover z-10 relative"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;