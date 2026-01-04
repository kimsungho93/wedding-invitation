import React from 'react';
import MainSection from './components/MainSection';
import CoupleSection from './components/CoupleSection';
import InvitationSection from './components/InvitationSection';
import HostInfoSection from './components/HostInfoSection';
import ContactSection from './components/ContactSection';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <MainSection />
      <CoupleSection />
      <InvitationSection />
      <HostInfoSection />
      <ContactSection />
    </div>
  );
};

export default Home;
