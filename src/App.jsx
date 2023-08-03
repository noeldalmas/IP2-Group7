import React from 'react'
import './App.css'
import './Media.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact';
import Visualisations from './views/Visualisations';
import Sources from './views/Sources';
import Cryptos from './views/Cryptos';

function App() {

 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/visualisations" element={<Visualisations/>}/>
        <Route path="/sources" element={<Sources/>}/>
        <Route path="/cryptos" element={<Cryptos/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
