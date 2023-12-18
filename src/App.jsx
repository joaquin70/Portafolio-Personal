// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="relative min-h-screen">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/cards-video.webm" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills/>
      </div>
    </div>
  );
}

export default App;

