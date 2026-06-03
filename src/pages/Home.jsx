import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Products from '../components/Products';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import TechStack from '../components/TechStack';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Products />
      <Process />
      <WhyUs />
      <TechStack />
      <CTA />
    </main>
  );
};

export default Home;
