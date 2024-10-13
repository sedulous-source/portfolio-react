import FeatureSection from '../../components/feature-section';
import SliderSection from '../../components/slider';
import TextWithImage from '../../components/text-with-image';
import HeroMasonary from '../../components/hero-masonary';

function Home() {
  return (
    <>
      <HeroMasonary />
      <div id="body">
        <FeatureSection />
        <SliderSection />
        <TextWithImage />
      </div>
    </>
  );
}

export default Home;