import React, { useEffect } from 'react';

const APPROVAL_LETTER_IMAGE = '/assets/images/WhatsApp Image 2025-12-31 at 19.44.45.jpeg';
const SANDEEP_IMAGE = '/assets/images/sandeep id.jpeg';
const SANDEEP_NEW_IMAGE = '/assets/images/1.png';
const POSTER_IMAGE = '/assets/images/hungry saver poster_page-0001.jpg';

const founder = {
  name: 'Kotari Sandeep',
  registerNo: '99220040900',
  department: 'Computer Science and Engineering',
  role: 'Founder',
  mobile: '8317579761',
  image: SANDEEP_IMAGE,
  newImage: SANDEEP_NEW_IMAGE,
};

const volunteers = [
  {
    name: 'Hasika Seethu',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220041071',
    role: 'Volunteer',
    mobile: '8977881981',
    image: '/assets/images/hasika id.jpeg',
    newImage: '/assets/images/2.png',
  },
  {
    name: 'Sreekanth',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040858',
    role: 'Volunteer',
    mobile: '8309023616',
    image: '/assets/images/sreekanth id.jpeg',
    newImage: '/assets/images/4.png',
  },
  {
    name: 'Sweety',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040827',
    role: 'Volunteer',
    mobile: '7331163490',
    image: '/assets/images/saroj sweety id.jpeg',
    newImage: '/assets/images/3.png',
  },
  {
    name: 'Vijay',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040016',
    role: 'Volunteer',
    mobile: '7204946793',
    image: '/assets/images/vinay.jpeg',
    newImage: '/assets/images/5.png',
  },
  {
    name: 'Jyothi',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040012',
    role: 'Volunteer',
    mobile: '8309059828',
    image: '/assets/images/jyothi id.jpeg',
    newImage: '/assets/images/6.png',
  },
  {
    name: 'T. Bhavana',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220040747',
    role: 'Volunteer',
    mobile: '9390839194',
    image: '/assets/images/bhavana id.jpeg',
    newImage: '/assets/images/7.png',
  },
  {
    name: 'Lokesh',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220040236',
    role: 'Volunteer',
    mobile: '7670890286',
    image: '/assets/images/lokesh id.jpg',
    newImage: '/assets/images/8.png',
  },
  {
    name: 'Vekash',
    program: 'B.Tech',
    department: 'Electronics and Communication Engineering',
    registerNo: '9823005018',
    role: 'Volunteer',
    mobile: '7989530389',
    image: '/assets/images/vekash id.jpeg',
    newImage: '/assets/images/9.png',
  },
  {
    name: 'Punendra Teja',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220041674',
    role: 'Volunteer',
    mobile: '9121042899',
    image: '/assets/images/teja id_page-0001.jpg',
    newImage: '/assets/images/11.png',
  },
  {
    name: 'Sudeep',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220040896',
    role: 'Volunteer',
    mobile: '9542657361',
    image: '/assets/images/sudeepid.jpeg',
    newImage: '/assets/images/10.png',
  },
  {
    name: 'Siva Charan',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220041071',
    role: 'Volunteer',
    mobile: '7780263695',
    image: '/assets/images/siva charan id.jpeg',
    newImage: '/assets/images/12.png',
  },
];

function InfoRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="py-3 px-4 rounded-lg bg-dark-accent/50 border border-glass-border/50">
      <p className="text-electric-blue/90 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-sm ${highlight ? 'text-white font-semibold' : 'text-gray-300'}`}>{value}</p>
    </div>
  );
}

function FounderInfoCard() {
  return (
    <div className="glass-morphism rounded-2xl p-5 h-full flex flex-col justify-center space-y-3">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold text-white truncate">{founder.name}</h3>
        <span className="shrink-0 px-3 py-1 rounded-full bg-electric-blue/20 text-electric-blue text-xs font-semibold border border-electric-blue/40">
          Founder
        </span>
      </div>
      <InfoRow label="Name" value={founder.name} highlight />
      <InfoRow label="Register No" value={founder.registerNo} />
      <InfoRow label="Department" value={founder.department} />
      <InfoRow label="Role" value={founder.role} />
      <InfoRow label="Mobile" value={founder.mobile} />
    </div>
  );
}

function VolunteerInfoCard({ volunteer }: { volunteer: (typeof volunteers)[0] }) {
  return (
    <div className="glass-morphism rounded-2xl p-5 h-full flex flex-col justify-center space-y-3">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold text-white truncate">{volunteer.name}</h3>
        <span className="shrink-0 px-3 py-1 rounded-full bg-soft-green/20 text-soft-green text-xs font-semibold border border-soft-green/40">
          Volunteer
        </span>
      </div>
      <InfoRow label="Name" value={volunteer.name} highlight />
      <InfoRow label="Program" value={volunteer.program} />
      <InfoRow label="Department" value={volunteer.department} />
      <InfoRow label="Register No" value={volunteer.registerNo} />
      <InfoRow label="Role" value={volunteer.role} />
      <InfoRow label="Mobile" value={volunteer.mobile} />
    </div>
  );
}

const CARD_ROW_MIN_HEIGHT = 'min-h-[400px]';

function VolunteerCard({ volunteer }: { volunteer: (typeof volunteers)[0] }) {
  const imageBlock = (src: string, alt: string) => (
    <div className="flex-1 flex min-h-0 rounded-2xl overflow-hidden glass-morphism p-2 shadow-lg items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-auto max-w-full h-auto max-h-full object-contain rounded-xl"
      />
    </div>
  );

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ${CARD_ROW_MIN_HEIGHT} items-stretch`}>
      <div className={`${CARD_ROW_MIN_HEIGHT} flex flex-col min-h-0`}>{imageBlock(volunteer.image, `${volunteer.name} – ID`)}</div>
      <div className={`${CARD_ROW_MIN_HEIGHT} flex flex-col justify-center min-h-0`}>
        <VolunteerInfoCard volunteer={volunteer} />
      </div>
      <div className={`${CARD_ROW_MIN_HEIGHT} flex flex-col min-h-0`}>{imageBlock(volunteer.newImage, `${volunteer.name} – Verification`)}</div>
    </div>
  );
}

const HungrySaverVerification: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-14 text-center md:text-left">
          Hungry Saver – Verification & Proof
        </h1>

        {/* KARE Pilot Launch Approval Letter */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">
            KARE Pilot Launch Approval Letter (Approved by Entire Management)
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden glass-morphism p-2 shadow-lg">
              <img
                src={APPROVAL_LETTER_IMAGE}
                alt="KARE Pilot Launch Approval Letter"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <div className="glass-morphism p-6 rounded-2xl flex flex-col justify-center">
              <ul className="space-y-4 text-gray-300 leading-relaxed list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-electric-blue shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue" aria-hidden />
                  <span>This document serves as official and verifiable proof for the approval of the Hungry Saver pilot launch across Kalasalingam Academy of Research and Education (KARE).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-blue shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue" aria-hidden />
                  <span>The proposal was formally reviewed by the university administration and relevant academic and operational authorities to assess its feasibility, social impact, and compliance with institutional guidelines.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-blue shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue" aria-hidden />
                  <span>Following multiple rounds of evaluation and coordination, official permission was granted by the Vice Chairman, Vice Chancellor, and all concerned university departments.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-blue shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue" aria-hidden />
                  <span>This approval authorizes the implementation of the Hungry Saver initiative across the campus, including hostels and designated operational areas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-blue shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue" aria-hidden />
                  <span>The approval enables the structured execution of surplus food collection, reusable resource redistribution, volunteer coordination, and campus awareness activities under the supervision of the university.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-electric-blue shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-blue" aria-hidden />
                  <span>This milestone reflects institutional support for the project’s mission of reducing waste, promoting social responsibility, and delivering timely assistance to vulnerable communities.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Founder & Student Verification */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">
            Founder & Student Verification
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch ${CARD_ROW_MIN_HEIGHT}`}>
            <div className={`${CARD_ROW_MIN_HEIGHT} flex flex-col min-h-0 rounded-2xl overflow-hidden glass-morphism p-2 shadow-lg items-center justify-center`}>
              <img
                src={founder.image}
                alt="Kotari Sandeep – ID"
                className="w-auto max-w-full h-auto max-h-full object-contain rounded-xl"
              />
            </div>
            <div className={`${CARD_ROW_MIN_HEIGHT} flex flex-col justify-center min-h-0`}>
              <FounderInfoCard />
            </div>
            <div className={`${CARD_ROW_MIN_HEIGHT} flex flex-col min-h-0 rounded-2xl overflow-hidden glass-morphism p-2 shadow-lg items-center justify-center`}>
              <img
                src={founder.newImage}
                alt="Kotari Sandeep – Verification"
                className="w-auto max-w-full h-auto max-h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Campus Awareness & PunarAsha Initiative */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-200 mb-6">
            Campus Awareness & PunarAsha Initiative
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="rounded-2xl overflow-hidden glass-morphism p-2 shadow-lg mb-4">
              <img
                src={POSTER_IMAGE}
                alt="Awareness and PunarAsha posters"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <p className="text-gray-400 text-sm md:text-base text-center">
              Awareness and PunarAsha posters placed across all university hostels to promote
              donation, reuse, and social responsibility.
            </p>
          </div>
        </section>

        {/* Verified Volunteer Team */}
        <section>
          <h2 className="text-xl font-semibold text-gray-200 mb-8">
            Verified Volunteer Team
          </h2>
          <div className="space-y-10">
            {volunteers.map((volunteer) => (
              <div
                key={volunteer.registerNo}
                className="rounded-2xl glass-morphism p-4 md:p-6 shadow-inner-custom"
              >
                <VolunteerCard volunteer={volunteer} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HungrySaverVerification;
