import React from 'react';
import Icons from '../assets/mainIconsdark.svg';
import CvPdf from '../assets/CV-Joaquin.pdf';

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CvPdf;
    link.download = 'Cv Joaquin';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about" className="container mx-auto p-20 flex flex-col lg:flex-row items-center justify-between mt-30">
      <div className="lg:w-1/2 lg:pr-10 mt-8">
        <div className="mb-1">
          <span className="text-4xl font-bold text-white">
            <font className="text-white ml-1">Creacion</font>
            <font className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-600 ml-1">Codigo</font>
          </span>
        </div>
        <div>
          <span className="text-4xl font-bold text-gray-800">
            <font className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-600 ml-0">Diseño</font>
            <font className="text-white ml-1">Experiencia</font>
          </span>
        </div>
        <p className="text-lg text-gray-400 mt-4">
          Soy un desarrollador Full Stack con experiencia en sitios web responsivos y desarrollo de software.
          Mira mis proyectos y habilidades.
        </p>

        <div className="flex flex-col items-center space-y-5 space-x-4 p-4  lg:mt-0">
          <button onClick={handleDownloadCV} className="bg-[#03001417] text-white px-4 py-2 rounded-lg border cursor-pointer font-bold">
            Descargar CV
          </button>
          <a href="https://www.linkedin.com/in/joaquin70/" className="bg-[#03001417] text-white px-4 py-2 rounded-lg border font-bold">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 lg:pr-25 mt-5">
        <img src={Icons} alt="Mi SVG" className="w-full h-auto rounded text-white " />
      </div>
    </div>
  );
};

export default About;












