import React, { useEffect } from 'react';
import LandingSection from '../../components/landing-section';

const About = () => {
  useEffect(() => {
    document.title = "About us - My Portfolio";
  }, []);

  return (
    <>
      <LandingSection />

    </>
  );
};

export default About;
