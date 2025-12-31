import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const HungrySaverInformation: React.FC = () => {
  // Scroll to top immediately on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 19.44.45.jpeg',
      text: 'After nearly three months of continuous effort and coordination, official permission was granted for the Hungry Saver pilot launch across the entire university, with approvals involving the Vice Chairman, Vice Chancellor, and all concerned departments. This milestone enabled full-scale implementation of the initiative within the campus and marked a major step toward institutional support for the project\'s social impact mission.',
      imageLeft: true
    },
    {
      image: '/assets/images/DOC-20251120-WA0004._page-0001.jpg',
      text: 'As part of the Hungry Saver – Punarāsha initiative, awareness posters were placed across the entire college campus, including all boys\' and girls\' hostels, to collect reusable clothes for donation. This campus-wide drive encouraged student participation, streamlined cloth collection from every hostel, and enabled large-scale redistribution of reusable clothing to orphanages and underserved communities.',
      imageLeft: false
    },
    {
      image: '/assets/images/IMG_20251215_145646.jpg',
      text: 'As part of the Hungry Saver initiative, our team regularly visits orphanages and community shelters to interact directly with children and caretakers, understand their needs, and identify real challenges. These on-ground visits help us collect genuine requirements, plan meaningful support, and ensure that donations and assistance provided through the platform reach the right people effectively and with empathy.',
      imageLeft: true
    },
    {
      image: '/assets/images/IMG_20251215_145700.jpg',
      text: 'During a field visit for the Hungry Saver initiative, the team interacts with mentors and caretakers to understand the current situation, challenges, and support requirements of the children. These discussions provide clear insights into real needs, helping plan effective assistance and ensure meaningful impact through the platform.',
      imageLeft: true
    },
    {
      image: '/assets/images/IMG_20251213_124951.jpg',
      text: 'As part of the Hungry Saver initiative, the team successfully donated 100+ pairs of clothes to orphanages, supporting children and residents with essential clothing needs. This drive reflects the platform\'s mission to convert community contributions into direct, meaningful support for those in need.',
      imageLeft: false
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 19.33.54.jpeg',
      text: 'As part of the Hungry Saver initiative, the team conducted a field visit to an Indian bus stand and observed many people sleeping on platforms and waiting areas, highlighting the urgent need for food, clothing, and basic support. These observations help identify real situations and plan timely assistance for vulnerable individuals.',
      imageLeft: true
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 19.33.44.jpeg',
      text: 'During a field visit under a city bridge, the Hungry Saver team observed many people living without proper shelter, highlighting the harsh realities faced by the homeless. These insights help identify urgent needs such as food, clothing, and basic care, enabling focused and effective support.',
      imageLeft: false
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 19.40.11.jpeg',
      text: 'Received official permission for the Hungry Saver pilot launch at Kalasalingam Academy of Research and Education (KARE) through the Student Affairs Director, Dr. Balakannan, enabling on-campus implementation and student-driven social impact activities.',
      imageLeft: true
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 19.35.15.jpeg',
      text: 'As part of the Hungry Saver initiative, clothes were donated to student girls in need, providing essential support and promoting dignity and well-being. This effort reflects the platform\'s commitment to reaching vulnerable students directly and ensuring community-driven assistance creates a real and positive impact.',
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
            Hungry Saver – <span className="text-gradient">Impact & Field Activities</span>
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
                className={`${section.imageLeft ? '' : 'md:col-start-2'}`}
                initial={{ opacity: 0, x: section.imageLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="relative overflow-hidden rounded-2xl glass-morphism p-2 group"
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
                    alt={`Hungry Saver Activity ${index + 1}`}
                    className="w-full h-auto object-cover rounded-xl relative z-10"
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

export default HungrySaverInformation;

