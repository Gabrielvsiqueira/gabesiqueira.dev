import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyButton from '../components/button';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import perfilPage from '../img/perfil.png';
import Projects from "./Projects";
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
          <Link to={'/about'}>Sobre mim</Link>
          <p>Projetos</p>
          <p>Prêmios</p>
          <p>Contato</p>
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
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-normal">
              Gabriel Siqueira
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-2xl">
              Engenheiro de Software
            </motion.p>
            <motion.p variants={itemVariants}>
              Sou engenheiro de software com foco em desenvolvimento de interfaces de usuário (UI) para front-end. Tenho dóminio de frameworks como React, Vue e Angular, e tenho um sólido domínio de JavaScript, Typescript e PHP. Sou proficiente em frameworks de UI como Bootstrap e Tailwind e tenho experiência com desenvolvimento e uso de sistemas de design. Também possuo experiência em bancos de dados como PostgreSQL e MongoDB.
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
              className="w-[320px] h-[560px] object-cover rounded-[490px]"
              src={perfilPage}
              alt="my photo in black&white style."
            />
          </motion.div>
        </div>
        <Projects/>
      </main>
    </>
  );
}

export default Introduction;
