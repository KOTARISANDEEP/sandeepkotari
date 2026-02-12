import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HungrySaverInformation: React.FC = () => {
  // Scroll to top immediately on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections: Array<{
    image: string;
    imageLeft: boolean;
    text?: string;
    title?: string;
    points?: string[];
  }> = [
    {
      image: '/assets/images/WhatsApp Image 2025-12-31 at 19.44.45.jpeg',
      text: 'After nearly three months of continuous effort and coordination, official permission was granted for the Hungry Saver pilot launch across the entire university, with approvals involving the Vice Chairman, Vice Chancellor, and all concerned departments. This milestone enabled full-scale implementation of the initiative within the campus and marked a major step toward institutional support for the project\'s social impact mission.',
      imageLeft: true
    },
    {
      image: '/assets/images/hungry saver poster_page-0001.jpg',
      title: 'Punarāsha – Campus Cloth Donation Drive',
      points: [
        "Campus-wide awareness campaign across boys' and girls' hostels",
        'QR-enabled participation for instant student engagement',
        'Organized reusable cloth collection system inside campus',
        'Segregation and quality check before redistribution',
        'Large-scale distribution to orphanages and underserved communities',
      ],
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
    },

    // New sections (added at the end)
    {
      image: '/assets/images/IMG20260212094545.jpg.jpeg',
      title: 'Premium Eco-Friendly Delivery Covers',
      points: [
        'Introduction of branded Hungry Saver paper covers',
        'Eco-friendly, biodegradable, and sustainable packaging',
        'Secure and hygienic delivery system for donations',
        'Easy handling and transportation for volunteers',
        'Premium presentation ensuring dignity for beneficiaries',
      ],
      imageLeft: true,
    },
    {
      image: '/assets/images/Screenshot 2026-02-04 003658.png',
      title: 'Successful Food Distribution Drive',
      points: [
        'Successfully served donations to over 100+ needy people',
        'Coordinated volunteer-based donation collection and delivery',
        'Ensured safe and secure redistribution',
        'Real-time tracking and organized logistics',
        'Visible impact reflected in beneficiaries’ smiles',
      ],
      imageLeft: false,
    },
    {
      image: '/assets/images/Screenshot 2026-02-04 003900.png',
      title: 'Community Impact & Outreach',
      points: [
        'Extended support to multiple underserved communities',
        'Structured donation workflow from collection to distribution',
        'Student-driven initiative with institutional backing',
        'Focused on dignity-first donation approach',
        'Strengthened trust between campus and local communities',
      ],
      imageLeft: true,
    },
    {
      image: '/assets/images/IMG_20260203_165205254.jpg.jpeg',
      title: '100+ Lives Impacted',
      points: [
        'More than 100 beneficiaries supported successfully',
        'Direct distribution ensuring transparency',
        'Volunteer accountability at every stage',
        'Smiles and gratitude reflecting real social impact',
        'Strengthening the Zero Hunger mission on ground level',
      ],
      imageLeft: false,
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

  const approvalContentSections = [
    {
      icon: '🏛',
      title: 'Official Institutional Approval',
      body: 'After nearly three months of continuous coordination and formal submissions, official approval was granted for the pilot launch of Hungry Saver within the university campus.',
      sub: 'The proposal was reviewed, verified, and forwarded through proper administrative channels before receiving institutional authorization.',
      bullets: null
    },
    {
      icon: '📜',
      title: 'Multi-Level Administrative Clearance',
      body: null,
      sub: 'This ensured implementation followed official university guidelines and protocols.',
      bullets: ['Head of the Department', 'Hostel Office Administration', 'Vice Chairman', 'Vice Chancellor', 'Concerned Campus Authorities']
    },
    {
      icon: '🚀',
      title: 'Authorized Pilot Launch',
      body: 'Permission was granted to:',
      sub: null,
      bullets: ['Conduct the pilot launch inside the college hostel', 'Access hostel areas for surplus food collection', 'Install reusable cloth collection boxes inside campus', 'Coordinate transportation within campus limits', 'Operate as an officially recognized student initiative']
    }
  ];

  const posterContentSections = [
    {
      icon: '🌍',
      title: 'Structured Social Impact Initiative',
      body: 'The approval enabled:',
      sub: null,
      bullets: ['Collection and donation of reusable clothes', 'Responsible volunteer-led operations', 'Institutional monitoring and accountability', 'Alignment with Zero Hunger and No Poverty mission goals']
    },
    {
      icon: '🤝',
      title: 'Accountability & Responsibility',
      body: null,
      sub: 'This milestone established Hungry Saver as a recognized, university-supported social impact program.',
      bullets: ['Student leadership with faculty guidance', 'Institutional supervision', 'Defined operational responsibilities', 'Commitment to discipline and ethical implementation']
    }
  ];

  const sectionFade = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
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
                  className="relative overflow-hidden rounded-2xl glass-morphism p-2 group flex items-center justify-center"
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
                    className="w-full h-auto max-h-[520px] md:max-h-[620px] object-contain rounded-xl relative z-10"
                    style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}
                  />
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div
                className={`${section.imageLeft ? '' : 'md:col-start-1'} flex flex-col gap-4`}
                initial={{ opacity: 0, x: section.imageLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {index === 0 ? (
                  <>
                    {/* Top 10%: Verification & Proof button - unchanged */}
                    <Link
                      to="/hungrysaver-verification"
                      className="w-fit shrink-0 px-6 py-3 rounded-xl font-medium bg-electric-blue/20 border border-electric-blue/50 text-electric-blue hover:bg-electric-blue/30 hover:border-electric-blue transition-colors duration-200 shadow-lg"
                    >
                      Verification & Proof
                    </Link>
                    {/* Bottom 90%: Glass card only, no background image, no scroll, larger body */}
                    <div className="flex-1 min-h-[380px] md:min-h-[440px] w-full max-w-2xl">
                      <motion.div
                        className="h-full rounded-[18px] p-6 md:p-8 backdrop-blur-xl border border-white/10 shadow-xl"
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-20px' }}
                        variants={{
                          hidden: {},
                          visible: {
                            transition: { staggerChildren: 0.12, delayChildren: 0.1 }
                          }
                        }}
                      >
                        {approvalContentSections.map((block, i) => (
                          <motion.section
                            key={i}
                            className="mb-6 last:mb-0"
                            variants={sectionFade}
                          >
                            <h3 className="text-base md:text-lg font-semibold text-amber-100/95 mb-2 flex items-center gap-2">
                              <span className="text-xl" aria-hidden>{block.icon}</span>
                              {block.title}
                            </h3>
                            {block.body && (
                              <p className="text-white/92 text-sm md:text-base leading-relaxed mb-2">
                                {block.body}
                              </p>
                            )}
                            {block.bullets && block.bullets.length > 0 && (
                              <ul className="list-none pl-0 space-y-1.5 mb-2">
                                {block.bullets.map((item, j) => (
                                  <li key={j} className="text-white/90 text-sm md:text-base flex items-start gap-2">
                                    <span className="text-amber-400/90 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400/80" aria-hidden />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {block.sub && (
                              <p className="text-white/85 text-sm leading-relaxed">
                                {block.sub}
                              </p>
                            )}
                          </motion.section>
                        ))}
                      </motion.div>
                    </div>
                  </>
                ) : index === 1 ? (
                  /* Second section: poster image + Structured Social Impact & Accountability content */
                  <motion.div
                    className="flex-1 rounded-[18px] p-6 md:p-8 backdrop-blur-xl border border-white/10 shadow-xl max-w-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
                      }
                    }}
                  >
                    {posterContentSections.map((block, i) => (
                      <motion.section
                        key={i}
                        className="mb-6 last:mb-0"
                        variants={sectionFade}
                      >
                        <h3 className="text-base md:text-lg font-semibold text-amber-100/95 mb-2 flex items-center gap-2">
                          <span className="text-xl" aria-hidden>{block.icon}</span>
                          {block.title}
                        </h3>
                        {block.body && (
                          <p className="text-white/92 text-sm md:text-base leading-relaxed mb-2">
                            {block.body}
                          </p>
                        )}
                        {block.bullets && block.bullets.length > 0 && (
                          <ul className="list-none pl-0 space-y-1.5 mb-2">
                            {block.bullets.map((item, j) => (
                              <li key={j} className="text-white/90 text-sm md:text-base flex items-start gap-2">
                                <span className="text-amber-400/90 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400/80" aria-hidden />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {block.sub && (
                          <p className="text-white/85 text-sm leading-relaxed">
                            {block.sub}
                          </p>
                        )}
                      </motion.section>
                    ))}
                  </motion.div>
                ) : (
                  <>
                    <motion.div 
                      className="glass-morphism p-8 rounded-2xl relative overflow-hidden group flex-1"
                      whileHover={{ 
                        boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
                      }}
                    >
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
                      {section.title && (
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 relative z-10 text-white">
                          {section.title}
                        </h3>
                      )}
                      {section.points && section.points.length > 0 ? (
                        <ul className="space-y-2 relative z-10">
                          {section.points.map((p, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-base md:text-lg" style={{ color: '#BFDBFE' }}>
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric-blue shrink-0" aria-hidden />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="leading-relaxed text-lg relative z-10" style={{ color: '#BFDBFE' }}>
                          {section.text}
                        </p>
                      )}
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HungrySaverInformation;

