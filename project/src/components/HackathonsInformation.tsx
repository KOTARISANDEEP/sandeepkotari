import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, FileText } from 'lucide-react';
import ManaChennuru from './ManaChennuru';

const HackathonsInformation: React.FC = () => {
  // Scroll to top immediately on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      id: 1,
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.51.32 (1).jpeg',
      title: 'Prize Winner – Hackathon Achievement',
      description: 'Honored to receive the winning prize from the Vice Chairman of Kalasalingam Academy of Research and Education. This achievement represents the successful outcome of innovative problem-solving, technical excellence, and teamwork demonstrated during the hackathon. Receiving the award on stage was a proud moment and a strong motivation to continue building impactful and meaningful technology solutions.',
      icon: Trophy,
      imageLeft: true
    },
    {
      id: 2,
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.50.51.jpeg',
      title: 'Winner – IBM ICE Day Hackathon',
      description: 'Secured a winning position at the IBM ICE Day Hackathon by presenting an innovative and practical solution developed through strong teamwork and technical problem-solving. Received the prize and recognition from the esteemed guests during the event, marking a proud milestone and reinforcing commitment to innovation and real-world impact.',
      icon: Award,
      imageLeft: false
    },
    {
      id: 3,
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.51.31.jpeg',
      title: '3rd Place – Model Craft Round (Software Freedom Festival 3.0)',
      description: 'Successfully secured 3rd place in the Model Craft Round (2nd Round) of the Software Freedom Festival 3.0, hosted by KARE Open Source Society. This achievement reflects strong conceptual understanding, technical creativity, and the ability to translate ideas into practical models during a competitive, multi-stage hackathon environment.',
      icon: Medal,
      imageLeft: true
    },
    {
      id: 4,
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.51.32.jpeg',
      title: 'First Prize Winner – Vintra 2025 (Software Freedom Festival 3.0)',
      description: 'Won First Prize with a cash award of ₹7,000 at Vintra 2025 by securing the top position in the Software Freedom Festival 3.0. This achievement highlights strong technical expertise, innovative problem-solving skills, and the ability to develop effective solutions under competitive conditions, earning recognition from faculty and event coordinators.',
      icon: Star,
      imageLeft: false
    },
    {
      id: 5,
      image: '/assets/images/appritiation letter.jpg.jpeg',
      title: 'Letter of Appreciation – Full Stack Project Development',
      description: 'Received recognition for successful design, development, and implementation of full-stack projects for the Kalasalingam SIS portal under Student Affairs.',
      icon: FileText,
      imageLeft: true,
      hasDetailedContent: true
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
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-violet rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Trophy size={24} className="text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hackathons & <span className="text-gradient">Achievements</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recognitions and awards from competitive events and hackathons
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            // Special layout for Letter of Appreciation (hasDetailedContent)
            if (achievement.hasDetailedContent) {
              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="w-full"
                >
                  <motion.div 
                    className="glass-morphism p-8 rounded-2xl relative overflow-hidden group hover-glow"
                    whileHover={{ 
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                      scale: 1.01
                    }}
                  >
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-neon-violet/5 to-soft-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 space-y-8">
                      {/* Title at Top */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-violet rounded-full flex items-center justify-center">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-electric-blue transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>

                      {/* Image */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                      >
                        <motion.div 
                          className="relative overflow-hidden rounded-2xl glass-morphism p-4 border-2 border-white/10 group"
                          whileHover={{
                            boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                            scale: 1.02
                          }}
                        >
                          {/* Subtle blue border glow on hover */}
                          <motion.div
                            className="absolute inset-0 border-2 border-electric-blue/0 group-hover:border-electric-blue/30 rounded-2xl transition-all duration-500"
                          />
                          <img
                            src={encodeURI(achievement.image || "")}
                            alt={achievement.title}
                            className="w-full h-auto object-contain rounded-xl relative z-10"
                            style={{ 
                              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                              maxHeight: '700px'
                            }}
                            onError={(e) => {
                              console.error('Failed to load certificate image');
                            }}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Content Below Image */}
                      <div className="space-y-6">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {achievement.description}
                        </p>

                        <div>
                          <h4 className="text-2xl font-bold text-electric-blue mb-4">
                            Certificate of Appreciation – Kalasalingam SIS Portal Development
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            This Certificate of Appreciation was awarded by Kalasalingam Academy of Research and Education (Deemed to be University) in recognition of my contribution to the successful design, development, and implementation of two full-stack projects developed for the university's Student Information System (SIS) portal under Student Affairs.
                          </p>
                        </div>

                        {/* Projects Developed */}
                        <div>
                          <h5 className="text-xl font-bold text-electric-blue mb-3">Projects Developed:</h5>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-3">
                              <span className="text-electric-blue mt-1">•</span>
                              <span><strong className="text-white">Event Hall Booking System</strong> – A digital solution to manage hall availability, booking requests, approvals, and scheduling of university events.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-electric-blue mt-1">•</span>
                              <span><strong className="text-white">Event Registration System</strong> – A centralized platform to handle participant registrations, event data management, and coordination for institutional programs.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Technical Stack */}
                        <div>
                          <h5 className="text-xl font-bold text-electric-blue mb-3">Technical Stack:</h5>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-2 bg-electric-blue/20 text-electric-blue rounded-lg border border-electric-blue/30">Laravel Framework</span>
                            <span className="px-4 py-2 bg-electric-blue/20 text-electric-blue rounded-lg border border-electric-blue/30">PHP</span>
                            <span className="px-4 py-2 bg-electric-blue/20 text-electric-blue rounded-lg border border-electric-blue/30">MS SQL Database</span>
                          </div>
                        </div>

                        {/* Experience Highlight */}
                        <div className="bg-gradient-to-r from-electric-blue/10 to-neon-violet/10 p-6 rounded-xl border border-electric-blue/20">
                          <h5 className="text-xl font-bold text-electric-blue mb-3">Experience Highlight:</h5>
                          <p className="text-gray-300 leading-relaxed text-lg">
                            These projects were developed and deployed following a structured and professional software development approach. This experience strengthened my real-time problem-solving skills, understanding of institutional workflows, and ability to deliver scalable, production-ready applications.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Corner Tech Accents */}
                    <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-4 h-0.5 bg-electric-blue"></div>
                      <div className="absolute top-0 right-0 w-0.5 h-4 bg-electric-blue"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-neon-violet"></div>
                      <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-neon-violet"></div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            }

            // Standard two-column layout for other achievements
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  achievement.imageLeft ? '' : 'md:grid-flow-col-dense'
                }`}
              >
                {/* Image */}
                {achievement.image && (
                  <motion.div
                    className={`${achievement.imageLeft ? '' : 'md:col-start-2'}`}
                    initial={{ opacity: 0, x: achievement.imageLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="relative overflow-hidden rounded-2xl glass-morphism p-2 group border-2 border-white/10"
                      whileHover={{
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      {/* Subtle blue border glow on hover */}
                      <motion.div
                        className="absolute inset-0 border-2 border-electric-blue/0 group-hover:border-electric-blue/30 rounded-2xl transition-all duration-500"
                      />
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-auto object-contain rounded-xl relative z-10"
                        style={{ 
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                          maxHeight: '600px'
                        }}
                      />
                    </motion.div>
                  </motion.div>
                )}

                {/* Text Content */}
                <motion.div
                  className={`${achievement.imageLeft ? '' : 'md:col-start-1'}`}
                  initial={{ opacity: 0, x: achievement.imageLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="glass-morphism p-8 rounded-2xl relative overflow-hidden group hover-glow"
                    whileHover={{ 
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                      scale: 1.01
                    }}
                  >
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-neon-violet/5 to-soft-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-violet rounded-full flex items-center justify-center">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-electric-blue transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Corner Tech Accents */}
                    <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-4 h-0.5 bg-electric-blue"></div>
                      <div className="absolute top-0 right-0 w-0.5 h-4 bg-electric-blue"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-neon-violet"></div>
                      <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-neon-violet"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Institutional Project Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            className="glass-morphism p-8 rounded-2xl relative overflow-hidden group hover-glow"
            whileHover={{ 
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
              scale: 1.01
            }}
          >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-neon-violet/5 to-soft-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 space-y-8">
              {/* Section Title */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                  Institutional Project Recognition – Student Affairs
                </h2>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <motion.div
                  className="relative overflow-hidden rounded-2xl glass-morphism p-4 border-2 border-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <img
                    src={encodeURI("/assets/images/balakannan.jpeg")}
                    alt="Letter of Appreciation from Director of Student Affairs"
                    className="w-full h-auto object-contain rounded-xl"
                    style={{ 
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                      maxHeight: '600px'
                    }}
                    onError={(e) => {
                      console.error('Failed to load balakannan image');
                    }}
                  />
                </motion.div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  This photograph captures a significant milestone in my project journey — receiving the Letter of Appreciation from the Director of Student Affairs, Dr. Balakannan Sir. This moment represents the official recognition of my real-time contributions toward the successful development and deployment of full-stack systems for the Kalasalingam SIS portal.
                </p>

                {/* Projects Recognized */}
                <div className="bg-gradient-to-r from-electric-blue/10 to-neon-violet/10 p-6 rounded-xl border border-electric-blue/20">
                  <h3 className="text-2xl font-bold text-electric-blue mb-4">Projects Recognized</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-electric-blue mt-1">•</span>
                      <span><strong className="text-white">Event Hall Booking System</strong> – A digital solution for managing hall availability, booking approvals, and university event scheduling.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-electric-blue mt-1">•</span>
                      <span><strong className="text-white">Event Registration System</strong> – A centralized platform for participant registration, event data management, and institutional coordination.</span>
                    </li>
                  </ul>
                </div>

                {/* Experience Note */}
                <div className="text-center">
                  <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                    This recognition reflects hands-on real-time development experience, institutional responsibility, and the successful delivery of production-ready solutions under the Student Affairs Directorate.
                  </p>
                </div>
              </div>
            </div>

            {/* Corner Tech Accents */}
            <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-4 h-0.5 bg-electric-blue"></div>
              <div className="absolute top-0 right-0 w-0.5 h-4 bg-electric-blue"></div>
              <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-neon-violet"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-neon-violet"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mana Chennuru Section (same design) */}
        <div className="mt-20">
          <ManaChennuru />
        </div>
      </div>
    </div>
  );
};

export default HackathonsInformation;

