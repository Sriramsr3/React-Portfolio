import { motion } from 'framer-motion';

const TechnologiesPage = () => {
  const techStack = [
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'TensorFlow',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    {
      name: 'HTML',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name:'PostgreSQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    }
    ,
    {
      name: 'MongoDB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'

    }

   
  ];

  const tools = [
    {
      name: 'VS Code',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
      name: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Figma',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
      name : 'Canva',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
    },
    {
      name: 'npm',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
    },
    {
      name:'Jypiter',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
    },
    {
      name:'Anaconda',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg'
    }

  ];

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Tech Stack</h1>
        <p className="text-gray-400 mb-8">Technologies I've been working with recently</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img 
                src={tech.image} 
                alt={tech.name} 
                className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
                title={tech.name}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-8">Tools</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img 
                src={tool.image} 
                alt={tool.name} 
                className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
                title={tool.name}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologiesPage;