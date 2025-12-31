import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';
import Projects from './components/Projects';
import Services from './components/Services';
import HungrySaver from './components/HungrySaver';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';
import HungrySaverInformation from './components/HungrySaverInformation';
import AranyaJalInformation from './components/AranyaJalInformation';
import HackathonsInformation from './components/HackathonsInformation';

function HomePage() {
  return (
    <>
      <StarField />
      <Hero />
      <Skills />
      <Experience />
      <Hackathons />
      <Projects />
      <Services />
      <HungrySaver />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hungrysaver-information" element={<HungrySaverInformation />} />
          <Route path="/aranyajal-information" element={<AranyaJalInformation />} />
          <Route path="/hackathons-information" element={<HackathonsInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;