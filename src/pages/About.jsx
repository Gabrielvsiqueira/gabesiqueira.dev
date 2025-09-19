import { motion, useScroll, useSpring, useTransform } from "framer-motion"

import { useRef } from "react"


const ScrollIndicator = () => {

  return (

    <motion.div

      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 cursor-pointer"

      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{

        delay: 1,

        repeat: Infinity,

        repeatType: "reverse",

        duration: 1

      }}

    >

      <svg xmlns="http://www.w3.org/2000/svg" fill="#8df0cc" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 animate-bounce">

        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />

      </svg>

      <span className="sr-only">Scroll down</span>

    </motion.div>

  )

}



function useParallax(value, distance) {

  return useTransform(value, [0, 1], [-distance, distance])

}



function Image({ date, text, subtext }) {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref })

  const y = useParallax(scrollYProgress, 50)



  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1])

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])



  return (

    <section className="h-screen flex flex-col justify-center items-center snap-start">

      <motion.h2

        className="text-[#8df0cc] text-5xl font-bold leading-tight tracking-[-3px] text-center mb-8 md:text-7xl"

        initial={{ opacity: 0, y: -50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5, delay: 0.5 }}

        style={{ y }}

      >

        {date}

        <span className="block text-2x1 md:text-4xl mt-2 text-[#b0e8d1]">{subtext}</span>

      </motion.h2>

      <motion.div

        ref={ref}

        className="w-full max-w-sm h-[500px] m-5 p-5 box-border flex flex-col justify-center text-center rounded-lg shadow-lg md:max-w-md overflow-hidden"

        style={{ opacity, scale }}

      >

        <motion.p className="text-xl text-white leading-relaxed p-4 md:text-2xl" style={{ y: textY }}>

          {text}

        </motion.p>

      </motion.div>

    </section>

  )

}



export default function Parallax() {

  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {

    stiffness: 100,

    damping: 30,

    restDelta: 0.001,

  })



  const galleryData = [

    { id: 1, date: '2012', subtext: 'Quando tudo era mato..', text: 'Minha paixão por tecnologia começou cedo. Desde a infânca, minha curiosidade me levava a desmontar objetos, como brinquedos e roteadores, para entender seu funcionamento. Essa criosidade inicial evoluiu para uma paixão por tecnologia, que me inspirou a aprofundar meu conhecimento em computdores e programação ao longo dos anos.' },
    { id: 2, date: '2019', subtext: 'Faculdade e descobrindo da minha Ítaca', text: 'Mais tarde, na faculdade, descobri que minha paixão de verdade era o desenvolvimento de software focado no usuário, estudando layouts e como as cores afetam a percepção e a experiência final de um produto. Desde então, descobri que queria trabalhar construindo interfaces de software e UX.' },

    { id: 3, date: '2020', text: 'Em meio à pandemia, continuei apaixonado por UI e decidi que era hora de testar minhas habilidades e conhecimentos. Com as aulas remotas, me juntei a alguns amigos e nos inscrevi no NASA Space Apps Challenge, o hackathon oficial da NASA. Ficamos em primeiro lugar no Brasil, o que foi um diferencial no meu currículo e me ajudou a conseguir meu primeiro estágio.' },

    { id: 4, date: '2021', subtext: 'Começo da minha trajetória profissional', text: ' Esse foi o pontapé inicial para minha carreira. Após várias entrevistas, consegui meu primeiro estágio em desenvolvimento de software. Foi um desafio e uma experiência incrível, onde aprendi back-end com Oracle e Node.js, e front-end com ReactJS, Bootstrap e Tailwind, além de metodologias ágeis e trabalho em equipe.' },

    { id: 5, date: '2025', subtext: 'Hoje', text: 'Atualmente, sou Engenheiro de Software na Globant, mas minha meta é voltar a atuar exclusivamente com desenvolvimento Web UI e me tornar um especialista na área. Minha motivação é a constante evolução da tecnologia, que me impulsiona a sempre aprender e crescer.' },

    { id: 6, date: 'Stacks', subtext: '', text: 'Minhas habilidades incluem o domínio de linguagens como: JavaScript, TypeScript e PHP, além de experiência com frameworks:  React e Vue. Também tenho conhecimento em frameworks de UI (Tailwind, Bootstrap, Material UI, Daisy UI) e ferramentas de design (Figma, StoryBook), complementando minha experiência com bancos de dados como PostgreSQL e MongoDB.' },

];



  return (

    <div className=" overflow-x-hidden">

      {galleryData.map((item) => (

        <Image key={item.id} id={item.id} date={item.date} subtext={item.subtext} text={item.text} />

      ))}

      <motion.div className="progress fixed left-0 right-0 h-2 bg-[#8df0cc] bottom-12 z-50 origin-left" style={{ scaleX }} />

      <ScrollIndicator />

    </div>

  )

}