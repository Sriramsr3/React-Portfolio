import { Twitter, Linkedin, Github } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a 
        href="https://www.linkedin.com/in/sriram-s-263489253/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a 
        href="https://github.com/Sriramsr3" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialLinks;