import React from 'react';
import MainSection from './components/MainSection';
import CoupleSection from './components/CoupleSection';
import InvitationSection from './components/InvitationSection';
import HostInfoSection from './components/HostInfoSection';
import ContactSection from './components/ContactSection';
import GallerySection from './components/GallerySection';
import CalendarSection from './components/CalendarSection';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <MainSection />
      <CoupleSection />
      <InvitationSection />
      <HostInfoSection />
      <ContactSection />
      <GallerySection />
      <CalendarSection />
    </div>
  );
};

export default Home;
