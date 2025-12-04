import React from 'react';
import '@fontsource/inter';
import '@fontsource/playfair-display';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 sm:px-12">
        <Routes>

        <Route path='/' element={<Hero />} /> 
        <Route  path='/project' element={<Projects/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/about' element={<About/>}/>
        
        </Routes>
      </main>
      <footer className="py-8 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Ranjan. All rights reserved.
      </footer>
    </div>
    </Router>
  );
}

export default App;

