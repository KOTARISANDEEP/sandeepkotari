import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  'A digital gateway for essential village resources',
  'Preserving culture, heritage, and community identity',
  'Empowering villagers through accessible information',
  'Built with responsibility and long-term vision',
];

const ManaChennuru: React.FC = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/10"
          style={{
            background:
              'linear-gradient(135deg, rgba(31,58,43,0.92) 0%, rgba(22,38,30,0.95) 55%, rgba(31,58,43,0.85) 100%)',
          }}
        >
          {/* Soft ambient accents (same green theme only) */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-25" style={{ background: '#7EE081' }} />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-20" style={{ background: '#6FD38A' }} />

          <div className="relative z-10 p-8 md:p-12">
            {/* Title (top) */}
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left" style={{ color: '#EAF6EC' }}>
              Mana Chennuru – <span style={{ color: '#7EE081' }}>Our Village, Our Pride</span>
            </h2>

            {/* Content (text left, image right) */}
            <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
              {/* Text */}
              <div className="order-1">
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#BFD8C2' }}>
                  Mana Chennuru is more than a project — it is a proud milestone rooted in my childhood.
                  <br />
                  Growing up, studying, and living in this village shaped my values and perspective.
                  <br />
                  Building a digital platform for my own village is a meaningful step toward giving back
                  <br />
                  to the place that raised me.
                </p>

                <ul className="mt-8 space-y-3 text-base md:text-lg" style={{ color: '#EAF6EC' }}>
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-1" style={{ color: '#6FD38A' }}>
                        •
                      </span>
                      <span style={{ color: '#EAF6EC' }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="order-2 flex justify-center md:justify-end">
                <div className="w-full max-w-sm md:max-w-md">
                  <img
                    src={encodeURI('/assets/images/mana chennuru.png')}
                    alt="Mana Chennuru – Our Village, Our Pride"
                    className="w-full h-auto object-contain rounded-2xl"
                    style={{
                      boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-12 flex justify-center">
              <motion.a
                href="https://manachennuru.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7EE081 0%, #6FD38A 100%)',
                  color: '#1F3A2B',
                  boxShadow: '0 4px 15px rgba(126, 224, 129, 0.3)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(126, 224, 129, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Mana Chennuru
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManaChennuru;


