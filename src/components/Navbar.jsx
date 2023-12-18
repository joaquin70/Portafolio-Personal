import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/programerr.png'

const Navbar = () => {
  return (
    <nav className="bg-[#03001417] shadow-lg shadow-[#2A0E61] p-4 flex justify-between items-center">
      <div className="flex items-center">
      <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
        <a href="#about" className="text-white font-bold">Joaquin Gonzalez</a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center rounded-full overflow-hidden border border-gray-400">
          <a href="#about" className="text-lg text-gray-400 px-3 py-2 hover:text-white transition-all duration-300">
            About Me
          </a>
          <a href="#projects" className="text-lg text-gray-400 px-3 py-2 hover:text-white transition-all duration-300">
            Projects
          </a>
          <a href="#skills" className="text-lg text-gray-400 px-3 py-2 hover:text-white transition-all duration-300">
            Skills
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/joaquin70/" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Joaquin70" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;




