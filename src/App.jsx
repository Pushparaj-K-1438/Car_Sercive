import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CeramicCoating from './components/services/CeramicCoating';
import PaintProtection from './components/services/PaintProtection';
import Header from './components/Header';
import Footer from './components/Footer';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
