import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Database, Shield } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = {
    title: 'Full Stack Developer',
    company: 'Kalasalingam Academy of Research and Education (KARE)',
    duration: '2025 May – Present',
    location: 'Tamil Nadu, India',
    description: 'At KARE, I am responsible for designing and delivering a complete Full Stack Event Hall Management & Event Registration System. The platform manages hall bookings, event scheduling, registrations, user roles, admin dashboards, and real-time status tracking. I lead both backend and frontend development, ensuring optimized performance, clean UI, and secure workflows.',
    techStack: [
      { name: 'Laravel Framework', icon: Code, color: 'electric-blue' },
      { name: 'MS SQL Server Database', icon: Database, color: 'neon-violet' },
      { name: 'HTML, CSS, JavaScript', icon: Code, color: 'soft-green' },
      { name: 'REST APIs', icon: Code, color: 'electric-blue' },
      { name: 'Blade Templates', icon: Code, color: 'neon-violet' },
      { name: 'Full Stack Application Design', icon: Code, color: 'soft-green' },
      { name: 'Authentication & Role Management', icon: Shield, color: 'electric-blue' },
      { name: 'Database Modeling & Query Optimization', icon: Database, color: 'neon-violet' }
    ],
    highlights: [
      'Complete Event Hall Management System',
      'Real-time Status Tracking',
      'Admin Dashboard Development',
      'Secure User Authentication',
      'Performance Optimization'
    ]
  };

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
    <section id="experience" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-violet rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase size={24} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building scalable solutions and leading full-stack development projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="glass-morphism p-8 rounded-2xl hover-glow group relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              rotateX: 1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-neon-violet/5 to-soft-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="absolute w-1 h-1 bg-electric-blue rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 30}%`
                  }}
                ></motion.div>
              ))}
            </div>

            {/* Header Section */}
            <div className="relative z-10 mb-8">
              <motion.div
                className="flex items-start justify-between flex-wrap gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-gradient font-semibold mb-2">
                    {experience.company}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Calendar size={16} />
                    <span className="font-medium">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-soft-green/20 text-soft-green rounded-full text-sm font-medium border border-soft-green/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-soft-green rounded-full animate-pulse"></div>
                Currently Working
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-300 leading-relaxed mb-8 text-lg relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {experience.description}
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              className="mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4 text-electric-blue">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {experience.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 rounded-full bg-soft-green"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-neon-violet">Technologies & Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 p-4 bg-${tech.color}/10 rounded-xl border border-${tech.color}/20 hover:border-${tech.color}/40 transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-${tech.color}/20 flex items-center justify-center`}>
                      <tech.icon size={20} className={`text-${tech.color}`} />
                    </div>
                    <span className="font-medium text-gray-200">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Corner Tech Accents */}
            <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-4 h-0.5 bg-electric-blue"></div>
              <div className="absolute top-0 right-0 w-0.5 h-4 bg-electric-blue"></div>
              <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-neon-violet"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-neon-violet"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="glass-morphism p-6 rounded-2xl max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-3 text-gradient">
              Looking for a Full Stack Developer?
            </h3>
            <p className="text-gray-300 mb-4">
              Let's discuss how I can contribute to your next project
            </p>
            <motion.a
              href="mailto:kotarisandeep198@gmail.com?subject=Job Opportunity&body=Hi Sandeep, I'm interested in discussing a position with you."
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-violet text-white rounded-full font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;