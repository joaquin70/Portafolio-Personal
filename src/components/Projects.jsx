import React from 'react';
import NauticaImage from '../assets/Nautica Rios.png';
import RickImage from '../assets/Rick.jpg';
import PImage from '../assets/VideoJuegos.png';
import Acme from '../assets/hero-desktop.png';

const ProjectCard = ({ image, title, description, githubLink, liveLink }) => {
    return (
        <div id="projects" className="max-w-md mx-auto border border-[#2A0E61]  shadow-lg rounded-lg overflow-hidden mb-8">
          <img src={image} alt={title} className="w-full h-30 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2 text-white">{title}</h2>
            <p className="mt-2 text-gray-300 mb-[20px]">{description}</p>
            <div className="flex flex-col items-center space-y-5">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#03001417] text-center cursor-pointer text-white px-4 py-2 border border-[#3A0E61]  shadow-lg rounded-lg block">
                Ver código
              </a>
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#03001417] cursor-pointer text-center text-white px-4 py-2 border border-[#3A0E61]  shadow-lg rounded-lg block">
                  Ver en vivo
                </a>
              )}
            </div>
          </div>
        </div>
      );
    };

const Projects = () => {
  const projects = [
    {
      title:'Acme Dashboard',
      description:'Un proyecto apasionante de mi recorrido en Vercel.Aprendiendo Next.JS.',
      githubLink:'https://github.com/joaquin70/Next.JS',
      image:Acme,
    },
    {
      title: 'Nautica Rios Web',
      description: 'Nautica Rios es una plataforma web y una aplicacion movil facil de usar para comprar accesorios de nautica y embarcaciones.',
      githubLink: 'https://github.com/Ivancho894/Nautica-Rios-Web-Front',
      liveLink: 'https://nautica-rios-pf-deploy.netlify.app/',
      image: NauticaImage,
    },
    {
      title: 'Club De VideoJuegos',
      description: 'Da vida a los Videojuegos de tus sueños con nuestra función de creación intuitiva. Personaliza Descripcion,Plataformas y personalidades para diseñar tu Videojuego virtual perfecto.',
      githubLink: 'https://github.com/joaquin70/Videojuegos-PI',
      liveLink: 'https://videojuegos-pi.vercel.app/',
      image: PImage,
    },
    {
      title: 'Rick And Morty',
      description: 'Un proyecto apasionante que nace de mi recorrido por cada módulo del bootcamp. ¡Crea y agrega personajes favoritos de R&M!',
      githubLink: 'https://github.com/joaquin70/RickaMortyJOAKO',
      image: RickImage,
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-[40px] font-semibold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-500 py-2 mb-[25px] ">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

