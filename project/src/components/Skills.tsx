import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Full Stack Development',
      image: '/assets/images/Full stack course Gives User Experience of The Website.jpg',
      skills: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'Spring Boot',
        'Laravel',
        'RESTful API Development',
        'PostgreSQL & MySQL',
        'Firebase Integration'
      ],
      color: 'electric-blue'
    },
    {
      title: 'Generative AI',
      image: '/assets/images/Ai.jpg',
      skills: [
        'Large Language Models (LLMs)',
        'Prompt Engineering',
        'Retrieval-Augmented Generation (RAG)',
        'AI API Integration',
        'Multimodal AI (Text, Image, Audio)',
        'AI Workflow Design & Automation'
      ],
      color: 'neon-violet'
    },
    {
      title: 'Cloud & Databases',
      image: '/assets/images/Cloud Analyst _ Cloud Services Logo by Conflutech Designs _ Creative Market.jpg',
      skills: [
        'Microsoft SQL Server (MS SQL)',
        'MySQL',
        'MongoDB',
        'Firebase (Authentication, Firestore, Storage)',
        'AWS (Hosting & Services Integration)',
        'Microsoft Azure (Cloud Databases & Deployment)'
      ],
      color: 'soft-green'
    },
    {
      title: 'Mobile Development',
      image: '/assets/images/What is the Internet of Things_.jpg',
      skills: [
        'Flutter',
        'Dart',
        'Firebase Integration',
        'Supabase',
        'Cross-platform App Development'
      ],
      color: 'electric-blue'
    },
    {
      title: 'Team Management',
      image: '/assets/images/Top Reasons PMIS Is Essential for Modern Project Management.jpg',
      skills: [
        'Team Coordination & Task Allocation',
        'Project Planning & Execution',
        'Mentoring Junior Developers',
        'Cross-functional Communication',
        'Deadline & Responsibility Management'
      ],
      color: 'neon-violet'
    },
    {
      title: 'Video & Content Creation',
      image: '/assets/images/5 Ways a Vendor Management System Can Transform Your Vendor Management Strategy.jpg',
      skills: [
        'Communicating with real users and audiences',
        'Explaining technical concepts in simple terms',
        'Script writing and storytelling',
        'Video editing for educational & social content',
        'Voiceovers and content presentation',
        'Audience engagement and feedback handling'
      ],
      color: 'soft-green'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-morphism p-8 rounded-2xl hover-glow group"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={encodeURI(category.image)}
                alt={category.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
                onError={(e) => {
                  console.error('Image failed to load:', category.image);
                }}
              />
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;