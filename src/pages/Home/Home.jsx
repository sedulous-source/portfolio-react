import React, { useEffect } from 'react';
import FeatureSection from '../../components/feature-section';
import BrandSection from '../../components/brand';
import Card from '../../components/card';
import HeroMasonary from '../../components/hero-masonary';
import Accordion from '../../components/accordion';
import Experience from '../../components/experience';
import Testimonial from '../../components/testimonial';

function Home() {
  useEffect(() => {
    document.title = "Home - My Portfolio";
  }, []);
  
  return (
    <>
      <HeroMasonary />
      <div id="body">
        <FeatureSection />
        <BrandSection />
        <Experience />
        <Card />
        <Testimonial />
        <Accordion />
      </div>
    </>
  );
}

export default Home;