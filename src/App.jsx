import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CeramicCoating from './components/services/CeramicCoating';
import PaintProtection from './components/services/PaintProtection';
import Header from './components/Header';
import Footer from './components/Footer';
import 'animate.css';
import './index.css';
import CarWraps from './components/services/CarWraps';

function App() {
  return (
    <div className="App bg-custom-gray">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
          <Route path="ceramiccoating" element={<CeramicCoating />} />
          <Route path="paintprotection" element={<PaintProtection />} />
          <Route path="carWraps" element={<CarWraps />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
