import React from 'react';

import HtmlSvg from '../assets/html.png';
import CssSvg from '../assets/css.png';
import JsSvg from '../assets/js.png';
import ReactSvg from '../assets/react.png';
import NodeSvg from '../assets/node-js.png';
import DatabaseSvg from '../assets/postger.png';
import Firebase from '../assets/Firebase.png';
import Express from '../assets/express.png';
import Figma from '../assets/figma.png';
import Redux from '../assets/redux.png';
import Styled from '../assets/styled-components.png';
import Tailwind from '../assets/tailwind.png';
import Mercado from '../assets/mercadopago.jpg';
import Next from '../assets/next.png';
import Sequelize from '../assets/sequelize.svg';
import Mongo from '../assets/mongodb.png';
import Bootstrap from '../assets/Bootstrap.svg';

const Skills = () => {
  const technologies = [
    [HtmlSvg, CssSvg, JsSvg, ReactSvg,Firebase,Next],
    [DatabaseSvg,Sequelize,Express,Redux,NodeSvg],
    [Figma,Tailwind,Styled,Bootstrap],
    [Mercado,Mongo],
  ];

  return (
    <div id="skills" className="container mx-auto p-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Creando aplicaciones con tecnologías modernas</h2>
      <p  className=" cursive text-lg mb-3">Nunca dejes de aprender, nunca te rindas</p>

      {technologies.map((level, index) => (
        <div key={index} className="flex justify-center mt-8">
          {level.map((tech, techIndex) => (
            <div key={techIndex} className="flex flex-col items-center">
              <img src={tech} alt={`Tech ${techIndex}`} className="w-18 h-16 mb-2" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
