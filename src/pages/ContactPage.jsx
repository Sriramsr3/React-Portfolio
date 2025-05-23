import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] flex flex-col justify-center items-center text-center space-y-10">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        For any questions please drop a mail
      </motion.h1>
      
      <motion.a
        href="mailto:sriramprince030@gmail.com"
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:from-purple-400 hover:to-blue-500 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        sriramprince030@gmail.com
      </motion.a>
      
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        or
      </motion.p>
      
      <motion.a
        href="tel:+916369664665"
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:from-purple-400 hover:to-blue-500 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        +91 63696 64665
      </motion.a>
    </div>
  );
};

export default ContactPage;