import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import ClientDcpems from './pages/ClientDcpems';
import ClientStyrka from './pages/ClientStyrka';
import Clients from './pages/Clients';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/dcpems" element={<ClientDcpems />} />
        <Route path="/clients/styrka" element={<ClientStyrka />} />
      </Routes>
      <Footer />
      <WhatsAppButton phoneNumber="917774954725" />
      <Chatbot />
    </>
  );
}

export default App;
