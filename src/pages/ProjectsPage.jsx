import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import equity from '../assets/equity.png';
import news from '../assets/news.jpg';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Image Generation with Stable Diffusion',
      description: 'Transforming text descriptions into highly realistic or artistic images by leveraging deep learning and diffusion processes.',
      image: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Tensorflow', 'Python', 'Stable Diffusion'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Real-Time Equity Analysis',
      description: 'A comprehensive tool for analyzing stock market trends, providing real-time data and insights for informed investment decisions.',
      image: equity,
      technologies: ['React', 'API', 'HTML/CSS'],
      liveUrl: '#',
      codeUrl: '#'
      
    },
    {
      id: 3,
      title: 'News Headline Android App',
      description: 'An Android application that fetches and displays the latest news headlines from various sources, providing users with real-time updates on current events.',
      image: news,
      technologies: ['Java', 'Android Studio'],
      liveUrl: '#',
      codeUrl: '#'
 
    }
  ];

  return (
    <div>
      <motion.h1 
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="bg-gray-900/80 rounded-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm font-medium mb-2">Tech Stack :</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-0 flex justify-between">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4 mr-1" /> Live Preview
              </a>
              
              <a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                <Github className="h-4 w-4 mr-1" /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;