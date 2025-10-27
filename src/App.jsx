// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import PhiloEducation from './pages/PhiloEducation';
import Freinet1 from './pages/Freinet1';
import Freinet2 from './pages/Freinet2';
import Montessori1 from './pages/Montessori1';
import Montessori2 from './pages/Montessori2';
import CoursMontessori1 from './pages/CoursMontessori1';
import CoursMontessori2 from './pages/CoursMontessori2';
import CoursFreinet1 from './pages/CoursFreinet1';
import CoursFreinet2 from './pages/CoursFreinet2';
import Neill1 from './pages/Neill';
import CoursNeill1 from './pages/CoursNeill1';
import CitationNeill from './pages/CitationNeill';
import CitationMontessori from './pages/CitationMontessori';
import CitationFreinet from './pages/CitationFreinet';
import Menu from './pages/Menu';

import CitationAlvarez from './pages/CitationAlvarez';

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Le provider englobe tout le contenu */}
      <ProgressProvider>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/PhiloEducation" element={<PhiloEducation />} />
          <Route path="/Freinet1" element={<Freinet1 />} />
          <Route path="/Freinet2" element={<Freinet2 />} />
          <Route path="/Montessori1" element={<Montessori1 />} />
          <Route path="/Montessori2" element={<Montessori2 />} />
          <Route path="/CoursMontessori1" element={<CoursMontessori1/>} /> 
          <Route path="/CoursMontessori2" element={<CoursMontessori2/>} /> 
          <Route path="/CoursFreinet1" element={<CoursFreinet1/>} /> 
           <Route path="/CoursFreinet2" element={<CoursFreinet2/>} /> 
           <Route path="/Neill1" element={<Neill1/>} />
           <Route path="/CoursNeill1" element={<CoursNeill1/>} /> 
           <Route path="/CitationNeill" element={<CitationNeill/>} /> 
           <Route path="/CitationMontessori" element={<CitationMontessori/>} /> 
           <Route path="/CitationFreinet" element={<CitationFreinet/>} /> 
           <Route path="/CitationAlvarez" element={<CitationAlvarez/>} /> 
        </Routes>
      </ProgressProvider>
    </BrowserRouter>
  );
}

