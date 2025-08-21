import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import '../index.css';


 function About() {
  return (
    <>
    <h1 className='text-5xl flex items-center justify-center p-5'>Sobre mim</h1>
<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end text-white">
    <time className="font-mono italic">2012</time>
      <div className="text-lg font-black">Quando tudo ainda era só mato..</div>
      Quando criança eu sempre fui muito curioso e xereta, ficava fuçando em tudo que via pela frente, desmontava os brinquedos para ver como funcionavam,desmontava os roteadores wi-fi pra entender como eles funcionavem e isso me levou a querer entender mais sobre tecnologia. Desde então, minha paixão por computadores e programação só cresceu.
    </div>
    <hr className="bg-white" />
  </li>
  <li>
    <hr className="bg-white" />
    <div className="timeline-middle text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-10 text-white">
    <time className="font-mono italic">2019</time>
      <div className="text-lg font-black">Sempre fui apaixonado por UI e descobri  </div>
      Na faculdade minha verdadeira paixão que era uma desenvolvimento de software orientado ao usuário final, entender e descobrir o porque alguns layouts chamavam mais atenção que outros, como as cores influenciavam na percepção do usuário, e como a usabilidade era importante para a experiência do usuário. Desde então, tenho me dedicado a estudar e aprimorar minhas habilidades em design de interfaces e experiência do usuário.
    </div>
    <hr className="bg-white" />
  </li>
  <li>
    <hr className="bg-white" />
    <div className="timeline-middle text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end text-white">
      <time className="font-mono italic">2021</time>
      <div className="text-lg font-black">Após alguns anos de Pandemia e aulas remotas</div>
      Decidi qu era hora de começar a colocar em prática o que aprendi e junto com alguns amigos nos escrevemos no Hackhaton da NASA, o NASA SPACE APPS CHALLENGE. Após 48 horas sem dormir, ficamos em primeiro lugar no Brasil, e fomos para o desafio internacional. Foi uma experiência incrível e de muitos aprendizados. Esse diferencial no meu currículo me ajudou a conseguir meu primeiro estágio na área de desenvolvimento de software.
    </div>
    <hr className="bg-white" />
  </li>
  <li>
    <hr className="bg-white" />
    <div className="timeline-middle text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-10 text-white">
      <time className="font-mono italic">2022</time>
      <div className="text-lg font-black">O começo da minha trajetória profissional </div>
      Após muitas entrevistas e testes técnicos, consegui minha primeira oportunidade como estágio de desenvolvimento de software. Foi um desafio incrível, meu primeiro contato com o mundo da tecnologia coorporativa. Tive muitas pessoas ao meu redor me ensinando, e me ajudando a crescer profisionalmente. Tive experiências com Desenvolvimento back-end com Oracle, Node.JS ,SQL Server e front-end com ReactJS, Boostrap e Tailwind. Aprendi muito sobre desenvolvimento ágil, metodologias ágeis e como trabalhar em equipe. Foi uma experiência incrível que me ajudou a crescer profissionalmente e pessoalmente.
    </div>
    <hr className="bg-white" />
  </li>
  <li>
    <hr className="bg-white" />
    <div className="timeline-middle text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end text-white">
      <time className="font-mono italic">2025</time>
      <div className="text-lg font-black">Atualmente</div>
      Hoje, trabalho como Engenheiro de testes na Globant, uma consultoria de software multinacional. Meus objetivos de carreira hoje é voltar a trabalhar exclusivamente com desenvolvimento Web UI, e me tornar um especialista na área. Estou sempre buscando aprender mais e me aprimorar profissionalmente, e acredito que a tecnologia é uma área em constante evolução, o que me motiva a continuar aprendendo e crescendo.
    </div>
  </li>
</ul>
    </>
  )
}

 export default About;