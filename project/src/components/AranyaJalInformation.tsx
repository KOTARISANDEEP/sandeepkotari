import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AranyaJalInformation: React.FC = () => {
  // Scroll to top immediately on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.17.15.jpeg',
      text: 'AranyaJal has been successfully published on the Google Play Store and is actively used by farmers. The application supports smart agriculture by providing practical tools and real-time information that help farmers make better decisions, improve productivity, and handle daily farming challenges through an accessible mobile platform.',
      imageLeft: true
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 20.17.15.jpeg',
      text: 'The AranyaJal application page on the Google Play Store presents it as a farmer-centric smart agriculture solution. It offers features such as market price updates, agricultural calculators, and weather alerts, while emphasizing transparent data practices and a simple, easy-to-use mobile interface designed for practical farming needs.',
      imageLeft: false
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
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aranya Jal – <span className="text-gradient">Smart Agriculture Impact</span>
          </h1>
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                section.imageLeft ? '' : 'md:grid-flow-col-dense'
              }`}
            >
              {/* Image */}
              <motion.div
                className={`${section.imageLeft ? '' : 'md:col-start-2'} flex justify-center`}
                initial={{ opacity: 0, x: section.imageLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="relative overflow-hidden rounded-2xl glass-morphism p-2 group max-w-md"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {/* Subtle blue border glow on hover */}
                  <motion.div
                    className="absolute inset-0 border-2 border-electric-blue/0 group-hover:border-electric-blue/30 rounded-2xl transition-all duration-500"
                  />
                  <img
                    src={section.image}
                    alt={`Aranya Jal ${index + 1}`}
                    className="w-full h-auto object-cover rounded-xl relative z-10 max-h-96"
                    style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}
                  />
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div
                className={`${section.imageLeft ? '' : 'md:col-start-1'}`}
                initial={{ opacity: 0, x: section.imageLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="glass-morphism p-8 rounded-2xl relative overflow-hidden group"
                  whileHover={{ 
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                  }}
                >
                  {/* Subtle blue glow animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      x: [-100, 100],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  <p className="leading-relaxed text-lg relative z-10" style={{ color: '#BFDBFE' }}>
                    {section.text}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AranyaJalInformation;

