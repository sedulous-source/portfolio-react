import React, { useEffect } from 'react';
import FeatureSection from '../../components/feature-section';
import BrandSection from '../../components/brand';
import Card from '../../components/card';
import TextWithImage from '../../components/text-with-image';
import HeroMasonary from '../../components/hero-masonary';
import Accordion from '../../components/accordion';

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
        <TextWithImage />
        <Card />
        <Accordion />
      </div>
    </>
  );
}

export default Home;