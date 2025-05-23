import { motion } from 'framer-motion';
import { Building, MapPin, Calendar } from 'lucide-react';

const AboutPage = () => {
  const experiences = [
    {
      title: "Working with .NET and Microsoft SQL Server",
      company: "NxtLogics Software Solutions",
      location: "Coimbatore",
      period: "12th Aug 2024 - 10th Sep 2024",
      type: "Internship"
    },
    {
      title: "Sensathon 3.0 (Runner Up)",
      company: "Sona College of Technology",
      location: "Salem",
      period: "13th Sep 2024 - 14th Sep 2024",
      type: "Hackthon"
    },
    {
      title: "NITK Hackathon",
      company: "National Institute of Technology Karnataka",
      location: "Surathkal",
      period: "16th Oct 2024 - 18th Oct 2024",
      type: "Hackthon"
    }
  ];

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-gray-300 max-w-3xl">
          I'm an enthusiastic Artificial Intelligence and Data Science student with a deep passion for AI and machine learning. I love building smart solutions, exploring real-world datasets, and applying ML techniques to solve challenges. Constantly learning, I enjoy working on projects that push my understanding of deep learning and data-driven systems, and my goal is to innovate and contribute meaningfully to the future of intelligent technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="border-b border-gray-800 pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="flex flex-wrap items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium 
                  ${exp.type === 'Full Time' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'}`}
                >
                  {exp.type}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-y-2 text-sm text-gray-400">
                <div className="flex items-center mr-6">
                  <Building className="h-4 w-4 mr-1" /> {exp.company}
                </div>
                <div className="flex items-center mr-6">
                  <MapPin className="h-4 w-4 mr-1" /> {exp.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;