import React from 'react';
import Icons from '../assets/mainIconsdark.svg';

const About = () => {
  return (
    <div id="about" className="container mx-auto p-8 flex items-center justify-between">
      <div className="w-1/2 pr-8">
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">
            <font className="text-white ml-2">Creacion</font>
            <font className="text-purple-800 ml-2">Codigo</font>
          </span>
        </div>
        <div>
          <span className="text-4xl font-bold text-gray-800">
            <font className="text-purple-800 ml-2">Diseño</font>
            <font className="text-white ml-2">Experiencias</font>
          </span>
        </div>
        <p className="text-lg text-gray-400 mt-4">
          Soy un desarrollador Full Stack con experiencia en sitios web responsivos y desarrollo de software.
          Mira mis proyectos y habilidades.
        </p>

        <div className="mt-6">{/* 
          <a href="" target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white px-4 py-2 mr-4 rounded">Descargar CV</a> */}
          <a href="https://www.linkedin.com/in/joaquin70/" target="_blank" rel="noopener noreferrer" className="bg-purple-800 text-white px-4 py-2 rounded cursor-pointer font-bold">LinkedIn</a>
        </div>
      </div>

      <div className="w-1/2">
        <img src={Icons} alt="Mi SVG" className="w-full h-auto rounded text-white " />
      </div>
    </div>
  );
};

export default About;




