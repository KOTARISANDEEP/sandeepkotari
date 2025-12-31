import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const projects = [
    {
      name: 'Event Hall Booking Management System',
      features: [
        'Event hall availability and booking management',
        'Real-time event and booking status tracking',
        'Role-based access using SQL authentication',
        'Admin panel for hall, event, and booking control',
        'Scalable database design for institutional use'
      ]
    },
    {
      name: 'Bulk Student Event Registration System',
      features: [
        'Bulk student registration for events',
        'Student-wise and event-wise registration tracking',
        'SQL authentication for secure login and access control',
        'Admin panel for managing registrations and participants',
        'Scalable database design for high-volume records'
      ]
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
          className="max-w-5xl mx-auto"
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
            
            {/* Header Section with Logo and Info */}
            <div className="relative z-10 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left Column - Logo */}
              <div className="flex justify-center md:justify-start items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full flex items-center justify-center"
                >
                  <img
                    src="/assets/images/OIP__1_-removebg-preview.png"
                    alt="KARE Logo"
                    className="w-full max-w-full h-auto object-contain"
                    style={{ backgroundColor: 'transparent', maxHeight: '500px' }}
                  />
                </motion.div>
              </div>

                {/* Right Column - Header Info */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    Full Stack Projects
                  </h3>
                  <p className="text-xl text-gradient font-semibold mb-2">
                    Kalasalingam Academy of Research and Education (KARE)
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>01/09/2025 – 01/12/2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width Content */}
            <div className="relative z-10 space-y-6">
              {/* Project Overview */}
              <motion.p
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At Kalasalingam Academy of Research and Education (KARE), I designed and delivered a complete Full Stack Event Hall Management and Event Registration System. The platform supports hall bookings, event scheduling, bulk student registrations, role-based access, and admin dashboards with real-time status tracking. I handled both backend and frontend development, focusing on SQL-based authentication, secure workflows, optimized database performance, and a clean, user-friendly interface suitable for institutional-scale usage.
              </motion.p>

              {/* Project List with Image */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Project List */}
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-bold mb-3 text-electric-blue">
                        {project.name}
                      </h4>
                      <div className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 rounded-full bg-soft-green mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column - Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center md:justify-end self-center"
                >
                  <div className="relative overflow-hidden rounded-xl border-2 border-white/10 p-2 glass-morphism max-w-md">
                    <img
                      src="/assets/images/Blue Professional Digital Marketing Youtube Thumbnail (1).png"
                      alt="Digital Marketing"
                      className="w-full h-auto object-cover rounded-lg"
                      style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="pt-4 border-t border-white/10"
              >
                <h4 className="text-lg font-bold mb-3 text-neon-violet">Tech Stack</h4>
                <p className="text-gray-300">
                  Laravel · MS SQL    · CSS · JavaScript · REST APIs
                </p>
              </motion.div>
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
      </div>
    </section>
  );
};

export default Experience;
