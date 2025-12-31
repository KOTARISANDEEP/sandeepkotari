import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MapPin, Clock, Youtube, CheckCircle } from 'lucide-react';

const HungrySaver: React.FC = () => {
  const highlights = [
    {
      icon: Users,
      value: '500+',
      label: 'People Supported',
      color: 'electric-blue'
    },
    {
      icon: CheckCircle,
      value: 'Beta',
      label: 'Pilot Launch Completed',
      color: 'soft-green'
    },
    {
      icon: MapPin,
      value: 'City-Based',
      label: 'Smart Matching',
      color: 'neon-violet'
    },
    {
      icon: Clock,
      value: 'Real-Time',
      label: 'Live Updates',
      color: 'electric-blue'
    }
  ];

  const features = [
    'Successfully completed pilot launch with real users',
    'Coordinated donations supporting 500+ underprivileged people',
    'City-based matching system for efficient delivery',
    'Complete volunteer workflow: Accept → Pickup → Donate → Complete',
    'Real-time updates using Firebase',
    'Regular progress updates on YouTube channel'
  ];

  return (
    <section id="hungry-saver" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-soft-green/20 text-soft-green rounded-full text-sm font-medium border border-soft-green/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart size={16} className="animate-pulse" />
            Social Impact Project
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hungry Saver – Food Rescue & <span className="text-gradient">Social Impact Platform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Role: <span className="text-electric-blue font-semibold">Founder & Developer</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Project Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl hover-glow"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              About the Platform
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I designed and developed <span className="text-soft-green font-semibold">Hungry Saver</span>,
              a social impact platform that connects event organizers and food donors with volunteers
              to deliver surplus food to people in need.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-soft-green rounded-full mt-2"></div>
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Impact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className={`glass-morphism p-6 rounded-xl hover-glow text-center`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-12 h-12 rounded-full bg-${highlight.color}/20 flex items-center justify-center mx-auto mb-4`}>
                    <highlight.icon size={24} className={`text-${highlight.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {highlight.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {highlight.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Video Card */}
            <motion.div
              className="relative overflow-hidden rounded-2xl glass-morphism hover-glow group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.youtube.com/watch?v=xlMJ-YnSEoc"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden"
              >
                <img
                  src="https://img.youtube.com/vi/xlMJ-YnSEoc/maxresdefault.jpg"
                  alt="Hungry Saver Featured Video"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
                  >
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-0 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" style={{
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderLeft: '12px solid white'
                    }} />
                  </motion.div>
                </div>
              </a>
            </motion.div>

            {/* YouTube Channel Card */}
            <motion.div
              className="glass-morphism p-6 rounded-2xl hover-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                  <Youtube size={24} className="text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Follow Our Journey</h4>
                  <p className="text-sm text-gray-400">Watch our impact stories</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                I regularly share progress, field work, and impact stories on the Hungry Saver
                YouTube channel for transparency and awareness.
              </p>
              <motion.a
                href="https://www.youtube.com/@HUNGRYSAVER"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube size={20} />
                Visit YouTube Channel
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-soft-green/10 via-electric-blue/10 to-neon-violet/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">
              Join the <span className="text-gradient">Movement</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every meal saved is a step towards a better tomorrow.
              Together, we can make a difference in our communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.youtube.com/@HUNGRYSAVER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube size={20} />
                Watch Our Story
              </motion.a>
              <motion.a
                href="mailto:kotarisandeep198@gmail.com?subject=Hungry Saver Collaboration&body=Hi Sandeep, I'm interested in learning more about Hungry Saver."
                className="inline-flex items-center gap-2 px-6 py-3 glass-morphism border border-soft-green/30 text-white rounded-full font-semibold hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HungrySaver;
