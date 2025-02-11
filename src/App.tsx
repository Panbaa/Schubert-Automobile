import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { HashRouter, Routes, Route } from "react-router-dom";
import Reinigung from './pages/Reinigung';
import Verkauf from './pages/Verkauf';
import Ankauf from './pages/Ankauf';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import SeiteNichtGefunden from './pages/SeiteNichtGefunden';
import NavbarElements from './components/Navbar/utils/NavbarElements';

function App() {
  return (
    <div className='bg-gray-900 w-full h-full min-h-screen flex flex-col'>
      <HashRouter>
        <Navbar elements={NavbarElements} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Reinigung" element={<Reinigung />} />
          <Route path="/Verkauf" element={<Verkauf />} />
          <Route path="/Ankauf" element={<Ankauf />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Impressum" element={<Impressum />} />
          <Route path="*" element={<SeiteNichtGefunden />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
