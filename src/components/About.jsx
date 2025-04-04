import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt  className="xs:w-[250px] w-full"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    glareEnable={true}
    glareMaxOpacity={0.45}
    glareColor="#ffffff"
    glarePosition="all">
      
      <motion.div
        variants={fadeIn("right", "spring", 0.5 *
          index, 0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'>

        <div options={{
          max: 45,
          scale: 1,
          speed: 450}}
        
          className='bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16
          object-contain'/>
          <h3 className='text-white texxt-[20px]
          font-bold text-center'>{title}</h3>
        </div>  

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão geral</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]'>
        Sou formado em Análise e Desenvolvimento de Sistemas e atuo como
         Desenvolvedor Front-End, com um ano de experiência no mercado.
          Minha especialidade é o desenvolvimento com React, tecnologia 
          na qual me sinto mais confiante e produtivo no dia a dia. 
          Além disso, possuo conhecimentos básicos em linguagens e ferramentas 
          do back-end, como Node.js e Java com Spring Boot, o que me permite compreender
           melhor o fluxo das aplicações e colaborar de forma eficaz com as equipes de back-end.
            Estou constantemente em busca de aprimoramento técnico, aprendizado de novas tecnologias
             e envolvimento em projetos desafiadores e inovadores, onde eu possa contribuir de maneira significativa.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
            {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")