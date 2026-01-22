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

        {/* Real-Time Field Implementation & Farmer Interaction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-Time Field Implementation & <span className="text-gradient">Farmer Interaction</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Showcasing live field visits, farmer interactions, and real-world validation of the AranyaJal application.
            </p>
          </motion.div>

          <div className="space-y-20">
            {[
              {
                image: '/assets/images/aranyajal6.jpeg',
                description: 'This image represents a real-time crop field interaction where AranyaJal was demonstrated directly to farmers at their farmland. The application was used to explain crop-related insights, weather awareness, and decision-support features, enabling farmers to understand how technology can assist in improving crop productivity through informed actions.',
                imageLeft: true
              },
              {
                image: '/assets/images/aranyajal5.jpeg',
                description: 'In this session, the AranyaJal application was explained to farmers in a live agricultural environment, focusing on practical usability. Farmers were guided on how to navigate the application, interpret information, and apply digital insights to their daily farming practices without disrupting traditional methods.',
                imageLeft: false
              },
              {
                image: '/assets/images/aranyajal3.jpeg',
                description: 'This photograph captures an active knowledge-sharing moment where AranyaJal was used as a field-level advisory tool. Standing amidst cultivated land, the application was demonstrated to address real farming challenges, reinforcing the importance of accessible technology for grassroots agricultural decision-making.',
                imageLeft: true
              },
              {
                image: '/assets/images/aranyajal4.jpeg',
                description: 'This image highlights a live water resource study conducted near a local pond. Farmers were introduced to the importance of water monitoring, sustainable usage, and natural resource awareness. AranyaJal\'s role in supporting water-related insights was explained as part of smart and sustainable agriculture.',
                imageLeft: false
              },
              {
                image: '/assets/images/aranyajal2.jpeg',
                description: 'Here, AranyaJal\'s relevance to fish farming and aquatic ecosystems was discussed with farmers involved in pond-based agriculture. The interaction focused on understanding water conditions, environmental balance, and how digital tools can support fisheries alongside traditional farming.',
                imageLeft: true
              },
              {
                image: '/assets/images/aranyajal1.jpeg',
                description: 'This moment reflects the validation phase of AranyaJal\'s real-world deployment. By engaging with farmers directly in the field during evening hours, feedback was collected, usability was observed, and the application\'s real-life effectiveness was assessed, reinforcing its practical value beyond development environments.',
                imageLeft: false
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  item.imageLeft ? '' : 'md:grid-flow-col-dense'
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`${item.imageLeft ? '' : 'md:col-start-2'} flex justify-center`}
                  initial={{ opacity: 0, x: item.imageLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl glass-morphism p-2 group border-2 border-white/10 w-full"
                    whileHover={{
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    {/* Subtle blue border glow on hover */}
                    <motion.div
                      className="absolute inset-0 border-2 border-electric-blue/0 group-hover:border-electric-blue/30 rounded-2xl transition-all duration-500"
                    />
                    <img
                      src={encodeURI(item.image)}
                      alt={`AranyaJal Field Implementation ${index + 1}`}
                      className="w-full h-auto object-contain rounded-xl relative z-10"
                      style={{ 
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                        maxHeight: '600px'
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className={`${item.imageLeft ? '' : 'md:col-start-1'}`}
                  initial={{ opacity: 0, x: item.imageLeft ? 50 : -50 }}
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
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AranyaJalInformation;

