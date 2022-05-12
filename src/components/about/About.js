import React from "react";
import {motion} from 'framer-motion'; 
import "./About.css";
import ilustracion from '../../media/ilus1.png'; 

const About = () => {
  return (
    <div className="about-container" href="sec1">
      <div className="about-texto">
        <motion.h3  
        initial={{x:-600}}
        animate={{ x:0 }}
        transition={{ delay: 2 , duration:2}}>
        Te cuento algo de mi...</motion.h3>
        <motion.p
        initial={{opacity:0}}
        transition={{duration:5}}
        animate={{opacity:1}}>
        Soy Verónica Caro, licenciada en artes visuales y gestora cultural de profesión, desarrolladora Front-End y Python en constante aprendizaje desde el 2021. Responsable y resolutiva al enfrentar nuevos desafíos, adaptable al cambio, me interesa ser parte de equipos multidisciplinarios.
        Mi gran motivación es trabaja para la gente, aportando e implementando soluciones a sus problemáticas. Con conocimientos en Vue, React y Python. Soy constante y creativa, aportando ideas e implementando acciones innovadoras y desafiantes. Curiosa de las culturas, tecnologías, diseño, arte y fotografía.
        </motion.p>
      </div>
      <div className="about-img">
        <motion.img
        initial={{x:600}}
        animate={{x:10 }}
        transition={{ delay: 2 , duration:2}}
          src={ilustracion}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
