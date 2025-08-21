import React from 'react';
import MyButton from './components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css'

function App() {

  return (
    <>
    <header>
      <div className='flex gap-[50px] iten-center justify-center  p-5'>
        <p>About</p>
        <p>Projects</p>
        <p>Accolades</p>
        <p>Contact</p>
      </div>
    </header>

    <main>
    <div className=' flex flex-col items-center justify-center md:flex-row items-center gap-10 p-10'>
      <div className='max-w-2xl'>
        <h1 class="text-5xl font-normal"> Hi! I'm Gabriel Siqueira </h1>
        <p className="text-[24px] mt-3">Software Enginner</p>
        <p className='mt-3'>As a software engineer with a passion for front-end development, I focus on building visually compelling and user-centric web interfaces. I have strong expertise in JavaScript, TypeScript, React, and Vue, along with proficiency in UI frameworks like Tailwind and databases such as PostgreSQL and MongoDB.<br/>I currently apply these skills at Globant, a multinational digital consulting firm.</p>

        <div className=' flex flex-row mt-5 gap-[20px]'>
          <MyButton> <a href="https://github.com/Gabrielvsiqueira/My-Resume/releases/latest/download/curriculum.pdf" target='_blank'> My Resume</a></MyButton>
          <MyButton> <a href="https://www.linkedin.com/in/gabriel-vitor-siqueira/" target='_blank'> <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin </a> </MyButton>
          <MyButton> <a href="https://github.com/Gabrielvsiqueira/" target='_blank'> <FontAwesomeIcon icon={faGithub} /> Github </a> </MyButton>
          <MyButton> <a href="https://www.instagram.com/siqueiragv/" target='_blank'> <FontAwesomeIcon icon={faInstagram} /> Instagram </a> </MyButton>
        </div>
      </div>
      <div className='flex-shrink-0'>
        <img className='w-[320px] h-[560px] object-cover rounded-[490px]' src="./src/assets/perfil.png" alt="my photo in black&white style." />
      </div>
    </div>
    </main>
    </>
  )
}

export default App;
