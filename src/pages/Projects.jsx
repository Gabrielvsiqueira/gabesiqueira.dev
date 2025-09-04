import React from 'react';
import Card from "../components/Card";
import embraerLogo from "../img/embraer.jpg";
import redeDorLogo from "../img/rededor.jpg";
import trizyLogo from "../img/trizy.jpg";
import athenaLogo from "../img/athena.png";

function Projects() {
  const embraerProject = {
    image: embraerLogo,
    title: "Embraer Design System",
    description: "Participei da refatoração do Design System para à Embraer. Assumi um  papel participativo na refatoração da perforamnce dos componentes do DS. Melhorando em 30% o tempo de carregamento dos componentes e melhorando o SEO das páginas web que usavam o antigo DS em 15 pontos.",
    tags: ["Web Components", "StoryBook","Typescript", "Nx", "React", "Angular", "Vue", "SEO", "UI Testing"]
  };
  const athenaProject = {
    image: athenaLogo,
    title: "Coorporate Project",
    description: "",
    tags: [""]
  };
  const redeDorProject = {
    image: redeDorLogo,
    title: "Central de Vagas",
    description: "Construção de um fluxo de atendimento e triagem médica para  solicitação de vagas hospitalares em diferentes hospitais da Rede de hospitais Rede D'or, abrangendo mais de 11.000 hospitais credenciados dando suporte para mais de 10.000 requisições por dia.",
    tags: ["Salesforce", "React", "Typescript", "Jenkins", "Playwright.js", "UI Testing"]
  };
  const trizyProject = {
    image: trizyLogo,
    title: "Trizy - TSM e Sustentação",
    description: "",
    tags: ["React","Typescript", "Cypress", "Playwright", "SEO", "UI Testing", "Oracle Database", "PL/SQL", "PostgreSQL", "Python"]
  };

  return (
    <div className="">
        <h1 className='text-3xl md:text-4xl font-normal'>Projetos</h1>
        <div>
        <Card
        image={embraerProject.image}
        title={embraerProject.title}
        description={embraerProject.description}
        badgeText={embraerProject.badgeText}
        tags={embraerProject.tags}
      />
      <Card
        image={athenaProject.image}
        title={athenaProject.title}
        description={athenaProject.description}
        badgeText={athenaProject.badgeText}
        tags={athenaProject.tags}
      />
      <Card
        image={redeDorProject.image}
        title={redeDorProject.title}
        description={redeDorProject.description}
        badgeText={redeDorProject.badgeText}
        tags={redeDorProject.tags}
      />
      <Card
        image={trizyProject.image}
        title={trizyProject.title}
        description={trizyProject.description}
        badgeText={trizyProject.badgeText}
        tags={trizyProject.tags}
      />
        </div>
    </div>
  );
}

export default Projects;