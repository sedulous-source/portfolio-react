import React, { useEffect } from 'react';
import FeatureSection from '../../components/feature-section';
import SliderSection from '../../components/slider';
import TextWithImage from '../../components/text-with-image';
import HeroMasonary from '../../components/hero-masonary';
import AccordionDefault from '../../components/accordion/accordionDefault';

function Home() {
  useEffect(() => {
    document.title = "Home - My Portfolio";
  }, []);
  
  return (
    <>
      <HeroMasonary />
      <div id="body">
        <FeatureSection />
        <SliderSection />
        <TextWithImage />
        <AccordionDefault />
      </div>
    </>
  );
}

export default Home;