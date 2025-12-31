import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hackathons: React.FC = () => {
  const achievements = [
    {
      id: 1,
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.51.32 (1).jpeg',
      title: 'Prize Winner – Hackathon Achievement',
      description: 'Honored to receive the winning prize from the Vice Chairman of Kalasalingam Academy of Research and Education. This achievement represents the successful outcome of innovative problem-solving, technical excellence, and teamwork demonstrated during the hackathon. Receiving the award on stage was a proud moment and a strong motivation to continue building impactful and meaningful technology solutions.',
      icon: Trophy
    },
    {
      id: 2,
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.50.51.jpeg',
      title: 'Winner – IBM ICE Day Hackathon',
      description: 'Secured a winning position at the IBM ICE Day Hackathon by presenting an innovative and practical solution developed through strong teamwork and technical problem-solving. Received the prize and recognition from the esteemed guests during the event, marking a proud milestone and reinforcing commitment to innovation and real-world impact.',
      icon: Award
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
    <section id="hackathons" className="py-20 px-4 relative z-10">
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
              <Trophy size={24} className="text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Hackathons & <span className="text-gradient">Achievements</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recognitions and awards from competitive events and hackathons
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            // Alternate image position: first left, second right
            const imageLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={achievement.id}
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
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Column - Alternates position */}
                    <motion.div
                      initial={{ opacity: 0, x: imageLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`order-2 ${imageLeft ? 'md:order-1' : 'md:order-2'}`}
                    >
                      <div className="relative overflow-hidden rounded-xl border-2 border-white/10 p-2 glass-morphism">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-auto object-contain rounded-lg"
                          style={{ 
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                            maxHeight: '500px'
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Text Content Column - Alternates position */}
                    <motion.div
                      initial={{ opacity: 0, x: imageLeft ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className={`space-y-4 ${imageLeft ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}
                    >
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
                      {/* Know More Button - Only for first achievement */}
                      {index === 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="pt-4"
                        >
                          <Link
                            to="/hackathons-information"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-violet text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300 hover:scale-105"
                          >
                            Know More
                            <ArrowRight size={18} />
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;

