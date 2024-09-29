import Navbar from './components/header';
import Footer from './components/footer';
import LandingSection from './components/landing-section';
import FeatureSection from './components/feature-section';
import SliderSection from './components/slider';

function App() {
  return (
    <>
      <Navbar />
      <main id="main" className="main" role="main">
        <LandingSection />
        <SliderSection />
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
