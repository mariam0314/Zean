import Home from "./Home" // ✅ Correct file
import About from "./Room.jsx";
import Services from "./Fascilites.jsx";
import Contact from "./contact.jsx";
import Header from "./assets/Header";
import { Routes, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fascilites" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
