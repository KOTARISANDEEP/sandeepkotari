import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/KOTARISANDEEP',
      label: 'GitHub',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sandeep-kotari-135841397/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:kotarisandeep198@gmail.com',
      label: 'Email',
      color: 'hover:text-electric-blue'
    }
  ];

  return (
    <footer className="py-12 px-4 relative z-10 border-t border-glass-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-bold text-gradient mb-2">
              Sandeep Kotari
            </h3>
            <p className="text-gray-300">
              Full Stack Developer | AI Enthusiast | Content Creator
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 glass-morphism rounded-full transition-colors duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="mb-2">
              © 2024 Sandeep Kotari. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2">
              Built with <Heart size={16} className="text-red-500" /> using React & Framer Motion
            </p>
          </motion.div>

          <motion.div
            className="mt-8 pt-8 border-t border-glass-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500">
              "Innovation distinguishes between a leader and a follower." - Steve Jobs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;