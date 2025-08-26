import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyButton from '../components/button';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import perfilPage from '../img/perfil.png';

function introduciton() {
  return (
    <>
      <header>
      <div className='flex flex-row gap-[50px] iten-center justify-center  p-5'>
        <Link to={'/About'}> Sobre mim </Link>
        <p>Projetos</p>
        <p>Prêmios</p>
        <p>Contato</p>
      </div>
    </header>

    <main>
    <div className=' flex flex-col items-center justify-center md:flex-row items-center gap-10 p-10'>
      <div className='max-w-2xl'>
        <h1 class="text-5xl font-normal">Gabriel Siqueira </h1>
        <p className="text-[24px] mt-3">Engenheiro de Software</p>
        <p className='mt-3'>Sou engenheiro de software com foco em desenvolvimento de interfaces de usuário (UI) para front-end. Sou especialista em frameworks como React, Vue e Angular, e tenho um sólido domínio de JavaScript, Typescript e PHP. Sou proficiente em frameworks de UI como Bootstrap e Tailwind e tenho experiência com desenvolvimento e uso de sistemas de design. Também possuo experiência em bancos de dados como PostgreSQL e MongoDB..</p>

        <div className=' flex flex-row mt-5 gap-[20px]'>
          <MyButton> <a href="https://github.com/Gabrielvsiqueira/My-Resume/releases/latest/download/curriculum.pdf" target='_blank'> My Resume</a></MyButton>
          <MyButton> <a href="https://www.linkedin.com/in/gabriel-vitor-siqueira/" target='_blank'> <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin </a> </MyButton>
          <MyButton> <a href="https://github.com/Gabrielvsiqueira/" target='_blank'> <FontAwesomeIcon icon={faGithub} /> Github </a> </MyButton>
          <MyButton> <a href="https://www.instagram.com/siqueiragv/" target='_blank'> <FontAwesomeIcon icon={faInstagram} /> Instagram </a> </MyButton>
        </div>
      </div>
      <div className='flex-shrink-0'>
        <img className='w-[320px] h-[560px] object-cover rounded-[490px]' src={perfilPage} alt="my photo in black&white style." />
      </div>
    </div>
    </main>
    </>
  )
}

export default introduciton;