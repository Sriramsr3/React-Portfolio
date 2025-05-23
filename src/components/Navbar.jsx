import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">
              <span className="text-blue-400">{`{`}</span>
              <span className="text-purple-500">PortFolio</span>
              <span className="text-blue-400">{`}`}</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-blue-400 ${
                    isActive ? 'text-blue-400' : 'text-gray-300'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:block">
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-blue-400"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-5 space-y-6 bg-gray-900 shadow-lg">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) => 
                    `text-base font-medium transition-colors hover:text-blue-400 ${
                      isActive ? 'text-blue-400' : 'text-gray-300'
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>

            <div className="flex pt-4 border-t border-gray-800">
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;