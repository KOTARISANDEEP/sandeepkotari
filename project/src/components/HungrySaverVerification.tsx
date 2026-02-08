import React, { useEffect } from 'react';

const APPROVAL_LETTER_IMAGE = '/assets/images/WhatsApp Image 2025-12-31 at 19.44.45.jpeg';
const SANDEEP_IMAGE = '/assets/images/sandeep id.jpeg';
const POSTER_IMAGE = '/assets/images/hungry saver poster_page-0001.jpg';

const volunteers = [
  {
    name: 'Hasika Seethu',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220041071',
    role: 'Volunteer',
    mobile: '8977881981',
    image: '/assets/images/hasika id.jpeg',
  },
  {
    name: 'Sreekanth',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040858',
    role: 'Volunteer',
    mobile: '8309023616',
    image: '/assets/images/sreekanth id.jpeg',
  },
  {
    name: 'Sweety',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040827',
    role: 'Volunteer',
    mobile: '7331163490',
    image: '/assets/images/saroj sweety id.jpeg',
  },
  {
    name: 'Vijay',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040016',
    role: 'Volunteer',
    mobile: '7204946793',
    image: '/assets/images/vinay.jpeg',
  },
  {
    name: 'Jyothi',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99230040012',
    role: 'Volunteer',
    mobile: '8309059828',
    image: '/assets/images/jyothi id.jpeg',
  },
  {
    name: 'T. Bhavana',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220040747',
    role: 'Volunteer',
    mobile: '9390839194',
    image: '/assets/images/bhavana id.jpeg',
  },
  {
    name: 'Lokesh',
    program: 'B.Tech',
    department: 'Computer Science and Engineering',
    registerNo: '99220040236',
    role: 'Volunteer',
    mobile: '7670890286',
    image: '/assets/images/lokesh id.jpg',
  },
  {
    name: 'Vekash',
    program: 'B.Tech',
    department: 'Electronics and Communication Engineering',
    registerNo: '9823005018',
    role: 'Volunteer',
    mobile: '7989530389',
    image: '/assets/images/vekash id.jpeg',
  },
];

function PlaceholderImage() {
  return (
    <div
      className="w-full aspect-[3/4] rounded-xl bg-dark-accent border border-glass-border flex items-center justify-center text-gray-500"
      aria-hidden
    >
      <span className="text-sm">Photo</span>
    </div>
  );
}

function VolunteerCard({
  volunteer,
  imageLeft,
}: {
  volunteer: (typeof volunteers)[0];
  imageLeft: boolean;
}) {
  const imageBlock = volunteer.image ? (
    <img
      src={volunteer.image}
      alt={volunteer.name}
      className="w-full h-auto object-cover rounded-xl aspect-[3/4]"
    />
  ) : (
    <PlaceholderImage />
  );

  const detailsBlock = (
    <div className="glass-morphism p-6 rounded-xl h-full flex flex-col justify-center">
      <p className="text-dark-accent/80 text-sm mb-1">Name</p>
      <p className="text-white font-medium mb-4">{volunteer.name}</p>
      <p className="text-dark-accent/80 text-sm mb-1">Program</p>
      <p className="text-gray-300 mb-4">{volunteer.program}</p>
      <p className="text-dark-accent/80 text-sm mb-1">Department</p>
      <p className="text-gray-300 mb-4">{volunteer.department}</p>
      <p className="text-dark-accent/80 text-sm mb-1">Register No</p>
      <p className="text-gray-300 mb-4">{volunteer.registerNo}</p>
      <p className="text-dark-accent/80 text-sm mb-1">Role</p>
      <p className="text-gray-300 mb-4">{volunteer.role}</p>
      <p className="text-dark-accent/80 text-sm mb-1">Mobile</p>
      <p className="text-gray-300">{volunteer.mobile}</p>
    </div>
  );

  return (
    <div
      className={`grid md:grid-cols-2 gap-6 items-stretch ${
        imageLeft ? '' : 'md:grid-flow-col-dense'
      }`}
    >
      <div className={imageLeft ? '' : 'md:col-start-2'}>{imageBlock}</div>
      <div className={imageLeft ? '' : 'md:col-start-1'}>{detailsBlock}</div>
    </div>
  );
}

const HungrySaverVerification: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
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
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden glass-morphism p-2 shadow-lg">
              <img
                src={SANDEEP_IMAGE}
                alt="Kotari Sandeep"
                className="w-full h-auto object-cover rounded-xl aspect-[3/4]"
              />
            </div>
            <div className="glass-morphism p-6 rounded-2xl flex flex-col justify-center">
              <div className="space-y-4">
                <div>
                  <p className="text-dark-accent/80 text-sm">Name</p>
                  <p className="text-white font-medium">Kotari Sandeep</p>
                </div>
                <div>
                  <p className="text-dark-accent/80 text-sm">Register No</p>
                  <p className="text-gray-300">99220040900</p>
                </div>
                <div>
                  <p className="text-dark-accent/80 text-sm">Department</p>
                  <p className="text-gray-300">Computer Science and Engineering</p>
                </div>
                <div>
                  <p className="text-dark-accent/80 text-sm">Role</p>
                  <p className="text-gray-300">Founder</p>
                </div>
                <div>
                  <p className="text-dark-accent/80 text-sm">Mobile</p>
                  <p className="text-gray-300">8317579761</p>
                </div>
              </div>
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
            {volunteers.map((volunteer, index) => (
              <div
                key={volunteer.registerNo}
                className="rounded-2xl glass-morphism p-4 md:p-6 shadow-inner-custom"
              >
                <VolunteerCard
                  volunteer={volunteer}
                  imageLeft={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HungrySaverVerification;
