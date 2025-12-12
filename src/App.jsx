import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import KeyDates from './components/KeyDates';
import AbstractSubmit from './components/AbstractSubmit';
import './App.css';
// import ModalBox from './components/ModalBox';
import EventSchedule from './components/EventSchedule';
import PlenarySpeakers from './components/PlenarySpeakers';
import CommitteeMembers from './components/CommitteeMembers';
import SponsorsSection from './components/SponsorsSection';
import AboutNTC from './components/AboutNTC';
import ContactVenue from './components/ContactVenue';
import Footer from './components/Footer';
import Countdown from './components/Countdown';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      
      <KeyDates />
      <Countdown />
      <AbstractSubmit />
      {/* <ModalBox /> */}
      <EventSchedule />
      <PlenarySpeakers />
      <CommitteeMembers />
      <SponsorsSection />
      <AboutNTC />
      <ContactVenue />
      <Footer />
    </div>
  );
}

export default App;
