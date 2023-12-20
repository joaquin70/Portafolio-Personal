import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/Programerr.png';

const Navbar = () => {
  return (
    <nav className="bg-[#3b27eb17] shadow-lg shadow-[#2A0E61] flex justify-between items-center fixed w-full top-0 z-50">
      {/* Contenido para pantallas grandes */}
      <div className="hidden lg:flex items-center p-4">
        <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full mr-1" />
        <a href="#about" className="text-gray-300 ml-[6px] font-semibold">Joaquin Gonzalez</a>

        {/* Botones de navegación centrados y más a la derecha */}
        <div className="flex items-center justify-end space-x-6">
          <a href="#about" className="text-lg text-gray-100 px-32 py-1 hover:text-white transition-all duration-300">
            About
          </a>
          <a href="#skills" className="text-lg text-gray-100 px-32 py-1 hover:text-white transition-all duration-300">
            Skills
          </a>
          <a href="#projects" className="text-lg text-gray-100 px-32 py-1 hover:text-white transition-all duration-300">
            Projects
          </a>
        </div>
      </div>

      {/* Contenido para pantallas pequeñas */}
      <div className="lg:hidden flex items-center p-4">
        {/* Botones de navegación */}
        <div className="flex items-center space-x-2">
          <a href="#about" className="text-lg text-gray-100 px-6 py-1 hover:text-white transition-all duration-300">
            About
          </a>
          <a href="#skills" className="text-lg text-gray-100 px-6 py-1 hover:text-white transition-all duration-300">
            Skills
          </a>
          <a href="#projects" className="text-lg text-gray-100 px-6 py-1 hover:text-white transition-all duration-300">
            Projects
          </a>
        </div>
      </div>

      {/* Íconos para LinkedIn y GitHub */}
      <div className="hidden lg:flex items-center space-x-6 p-4">
        <a href="https://www.linkedin.com/in/joaquin70/" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin size={34} />
        </a>
        <a href="https://github.com/Joaquin70" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub size={34} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;












