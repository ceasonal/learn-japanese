import React from 'react';
import Home from './pages/Home';
import Kanji from './pages/Kanji';
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';
import Convert from './pages/Convert';
import { HashRouter as Router, Routes, Route} from  'react-router-dom';
import Navbar from './assets/components/Navbar';
import './App.css';
function App() {
 
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kanji" element={<Kanji/>}/>
        <Route path="/hiragana" element={<Hiragana/>}/>
        <Route path="/katakana" element={<Katakana/>}/>
        <Route path="/convert" element={<Convert/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
