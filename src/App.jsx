import './index.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <WhyUs />
        <TechStack />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="917774954725" />
    </>
  );
}

export default App;
