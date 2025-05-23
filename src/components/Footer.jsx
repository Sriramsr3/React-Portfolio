import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p className="flex items-center justify-center">
          Designed and Coded by {' '}
          <span className="text-blue-400 font-medium mx-1">Sr</span> {' '}
          with {' '}
          <Heart className="h-4 w-4 mx-1 text-red-500" /> {' '}
          & {' '}
          <Coffee className="h-4 w-4 mx-1 text-amber-600" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;