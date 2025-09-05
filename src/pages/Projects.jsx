import React from 'react';
import Card from "../components/Card";
import embraerLogo from "../img/embraer.jpg";
import redeDorLogo from "../img/rededor.jpg";
import trizyLogo from "../img/trizy.jpg";
import athenaLogo from "../img/athena.png";
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

function Projects() {
  const embraerProject = {
    image: embraerLogo,
    title: "Embraer Design System",
    description: "Participei da refatoração do Design System para à Embraer. Assumi um papel participativo na refatoração da perforamnce dos componentes do DS. Melhorando em 30% o tempo de carregamento dos componentes e melhorando o SEO das páginas web que usavam o antigo DS em 15 pontos. Uitlizamos ferramentas como StoryBook para documentar os componentes e Nx para gerenciar o monorepo do projeto.",
    tags: ["Web Components", "StoryBook", "Typescript", "Nx", "React", "Angular", "Vue", "SEO", "UI Testing"]
  };
  const athenaProject = {
    image: athenaLogo,
    title: "Corporate Project",
    description: "Projeto visava criar planos do tipo corporativo para +800 pessoas por plano, sendo um fluxo totalmente novo dentro do produto. Liderei a implentação das primeiras etapas de automação de testes E2E utilizando Ferramentas de automação web no Salesforce utilizando Playwright. js.Utilizei a ferramenta de IA MagnifAI para auxiliar nos testes de UI e criação de cenários de testes, garantindo melhor utilização da aplicação e reduzindo tempo de processamento manual em 40%.",
    tags: ["E2E Testing", "Playwright.js", "Salesforce", "UI Testing", "MagnifAI", "AI"]
  };
  const redeDorProject = {
    image: redeDorLogo,
    title: "Central de Vagas",
    description: "Construção de um fluxo de atendimento e triagem médica para solicitação de vagas hospitalares em diferentes hospitais da Rede de hospitais Rede D'or, abrangendo mais de 11.000 hospitais credenciados dando suporte para mais de 10.000 requisições por dia. O sistema automatizou o processo de triagem, reduzindo o tempo de resposta em 40% e melhorando a eficiência operacional. Além disso, implementei testes automatizados utilizando Playwright.js, garantindo a qualidade e estabilidade do sistema durante todo o ciclo de desenvolvimento.",
    tags: ["Salesforce", "React", "Typescript", "Jenkins", "Playwright.js", "UI Testing"]
  };
  const trizyProject = {
    image: trizyLogo,
    title: "Trizy - TSM e Sustentação",
    description: "Como Desenvolvedor Full Stack, atuei na sustentação e evolução do sistema Trizy, uma plataforma que oferece soluções de logística para o setor de energia de transportes atendendo mais de 10.000 usuários ativos diariamente. Minhas responsabilidades incluíram a implementação de novas funcionalidades, correção de bugs e otimização do desempenho do sistema. Atuando como desenvolvedor na sustentação, ajudei na resolução de problemas técnicos, melhorando a estabilidade do sistema em 40%, com base na redução de tickets recorrentes. ",
    tags: ["React", "Typescript", "Cypress", "Playwright", "SEO", "UI Testing", "Oracle Database", "PL/SQL", "PostgreSQL", "Python"]
  };

  return (
    <div className="p-5 md:p-10 max-w-4xl mx-auto">
      <h1 className='text-3xl md:text-4xl font-normal text-center md:text-left mb-8 md:mb-12'>Projetos</h1>
      <motion.div
        className="flex flex-col justify-center items-center p-4 md:flex-row md:flex-wrap justify-center gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <Card
            image={embraerProject.image}
            title={embraerProject.title}
            description={embraerProject.description}
            badgeText={embraerProject.badgeText}
            tags={embraerProject.tags}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            image={redeDorProject.image}
            title={redeDorProject.title}
            description={redeDorProject.description}
            badgeText={redeDorProject.badgeText}
            tags={redeDorProject.tags}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            image={athenaProject.image}
            title={athenaProject.title}
            description={athenaProject.description}
            badgeText={athenaProject.badgeText}
            tags={athenaProject.tags}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            image={trizyProject.image}
            title={trizyProject.title}
            description={trizyProject.description}
            badgeText={trizyProject.badgeText}
            tags={trizyProject.tags}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;