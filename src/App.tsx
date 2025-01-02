import Home from './pages/Home'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reinigung from './pages/Reinigung';
import SeiteNichtGefunden from './pages/SeiteNichtGefunden';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Reinigung" element={<Reinigung />} />
        <Route path="*" element={<SeiteNichtGefunden />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
