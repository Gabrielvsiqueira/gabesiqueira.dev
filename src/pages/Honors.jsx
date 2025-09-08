// src/components/Honors.js
import React from 'react';
import Card from "../components/Card";
import nasaLogo from "../img/nasa.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Honors() {
  const projectsData = [
    {
      id: 1,
      image: nasaLogo,
      title: 'Nasa Space Apps Challenge',
      description: 'Participei junto de mais 4 pessoas na criação de uma solução inovadora para o desafio ”The Power of Ten”. Nosso projeto foi reconhecido com o primeiro lugar paranaense entre mais de 800 equipes, conquistando o pêmio principal da NASA por sua originalidade e impacto.',
      badgeText: 'Hackathon',
    },
  ];

  return (
    <div className="p-5 md:p-10 max-w-6xl mx-auto">
      <h1 className='text-4xl text-center md:text-4xl left font-normal mb-8 md:mb-12'>Prêmios</h1>
      <motion.div
        className="flex flex-col p-4 md:flex-row md:flex-wrap justify-center items-center gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              badgeText={project.badgeText}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Honors;