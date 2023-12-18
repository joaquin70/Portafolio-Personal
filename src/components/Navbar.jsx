import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4 flex justify-between items-center font-bold">
      <div className="flex items-center">
        <a href="#about" className="text-white">Joaquin Gonzalez</a>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#about" className="text-white">About</a>
        <a href="#projects" className="text-white">Projects</a>
        <a href="#skills" className="text-white">Skills</a>
      </div>

      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/joaquin70/" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Joaquin70" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
