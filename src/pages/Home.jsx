import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyButton from '../components/button';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import perfilPage from '../img/perfil.png';
import gabeSiqueira from '../img/gabe.jpeg';
import ThemeController from '../components/ThemeController';
import Projects from "./Projects";
import Honors from './Honors';
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

function Introduction() {
  return (
    <>
      <header>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 p-5">
          <Link to={'/about'}> Sobre mim</Link>
          <Link to={'/projects'}> Projetos</Link>
          <Link to={'/honors'}> Prêmios</Link>
          <p><a href="mailto:gabesiqueira25@gmail.com?subject=Orçamentos e Projetos&body=Olá! Gostaria de conversar sobre um projeto.">Contato</a></p>
        </div>
      </header>

      <main>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-5 md:p-10 max-w-4xl mx-auto">

          <motion.div
            className="flex flex-col items-center text-center md:items-start md:text-left space-y-3 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={itemVariants} className="text-3xl md:text-6xl font-normal">
              Gabriel Siqueira
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-4xl">
              Engenheiro de Software
            </motion.p>
            <motion.p variants={itemVariants} className='text-lg'>
            Sou um Engenheiro de Software com uma forte paixão por desenvolvimento web, especialmente em UI/UX. Atuo hoje como Engenheiro de Testes, o que me permite garantir a qualidade e a robustez do código que produzo. Estou em busca de sempre aplicar meu conhecimento e minha paixão em desenvolvimento em novos desafios e projetos.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center mt-5 gap-4 md:gap-6"
            >
              <MyButton>
                <a href="https://github.com/Gabrielvsiqueira/My-Resume/releases/latest/download/curriculum.pdf" target="_blank">
                  Resume
                </a>
              </MyButton>
              <MyButton>
                <a href="https://www.linkedin.com/in/gabriel-vitor-siqueira/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </MyButton>
              <MyButton>
                <a href="https://github.com/Gabrielvsiqueira/" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </MyButton>
              <MyButton>
                <a href="https://www.instagram.com/siqueiragv/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </MyButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              className="w-[350px] h-[500px] object-cover rounded-[50px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              src={gabeSiqueira}
              alt="my photo in black&white style."
              />
          </motion.div>
        </div>
        <Projects/>
        <Honors/>
      </main>
    </>
  );
}

export default Introduction;
