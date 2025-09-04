import {motion, useScroll, useSpring, useTransform, } from "framer-motion"
import { useRef } from "react"


function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ date, text, subtext }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
    const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

    return (
        <section className="img-container">
            <motion.div
                ref={ref}
                className="text-container"
                style={{ opacity, scale }}
            >
                <motion.p style={{ y: textY }}>{text}</motion.p>
            </motion.div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >
                {date}
                <span className="subtext-style"> <br />{subtext}</span>
            </motion.h2>
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
      { id: 1, date: '2025', subtext: '', text: 'Atualmente, sou Engenheiro de Testes na Globant, mas minha meta é voltar a atuar exclusivamente com desenvolvimento Web UI e me tornar um especialista na área. Minha motivação é a constante evolução da tecnologia, que me impulsiona a sempre aprender e crescer.' },

      { id: 2, date: '2012', subtext: 'Quando tudo era mato..', text: 'Minha paixão por tecnologia começou cedo. Desde a infância, minha curiosidade me levava a desmontar objetos, como brinquedos e roteadores, para entender seu funcionamento. Essa curiosidade inicial evoluiu para uma paixão por tecnologia, que me inspirou a aprofundar meu conhecimento em computadores e programação ao longo dos anos.' },

      { id: 3, date: '2019', subtext: 'Faculdade e descobrindo da minha Ítaca', text: 'Mais tarde, na faculdade, descobri que minha paixão de verdade era o desenvolvimento de software focado no usuário, estudando layouts e como as cores afetam a percepção e a experiência final de um produto. Desde então, descobri que queria trabalhar construindo interfaces de software e UX.' },

      { id: 4, date: '2020',text: 'Em meio à pandemia, continuei apaixonado por UI e decidi que era hora de testar minhas habilidades e conhecimentos. Com as aulas remotas, me juntei a alguns amigos e nos inscrevi no NASA Space Apps Challenge, o hackathon oficial da NASA. Ficamos em primeiro lugar no Brasil, o que foi um diferencial no meu currículo e me ajudou a conseguir meu primeiro estágio.' },

      { id: 5, date: '2021',subtext:' começo da minha trajetória profissional' , text: ' Esse foi o pontapé inicial para minha carreira. Após várias entrevistas, consegui meu primeiro estágio em desenvolvimento de software. Foi um desafio e uma experiência incrível, onde aprendi back-end com Oracle e Node.js, e front-end com ReactJS, Bootstrap e Tailwind, além de metodologias ágeis e trabalho em equipe.' },

      { id: 6, date: '', subtext: 'Nos dias de hoje..', text: 'Minha motivação central é o crescimento contínuo. Acredito que a tecnologia está em constante evolução, e é exatamente essa dinâmica que me inspira a sempre buscar novos aprendizados e me aprimorar. Meu foco em me especializar em Web UI e desenvolvimento front-end demonstra minha ambição genuína de dominar a área que realmente me apaixona.' },

    ];

    return (
        <div id="example">
            {galleryData.map((item) => (
                <Image key={item.id} id={item.id} date={item.date} subtext={item.subtext} text={item.text} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    )
}

function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        /* Estilo para o novo container de texto */
        .img-container > div {
            width: 400px;
            height: 500px;
            margin: 20px;
            background: #260d3598;
            overflow: hidden;
            display: flex; /* Adicionado para centralizar o texto */
            justify-content: center; /* Centraliza o texto horizontalmente */
            align-items: center; /* Centraliza o texto verticalmente */
            padding: 20px;
            box-sizing: border-box; /* Garante que padding não altere o tamanho */
            text-align: center; /* Alinha o texto centralmente */
        }

        .text-container p {
            font-size: 1.2rem;
            color: #ffffff;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: 190px;
            text-align: center;
            left: auto;
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}