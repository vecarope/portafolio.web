import React from "react";
import "./Texto.css";
import dibujo from '../../media/ilus-3.png'; 
import {motion} from 'framer-motion'; 

const Texto = () => {
  return (
    <div className="texto-container">
      <div className="texto-img">
        <motion.img  
        initial={{x:-600}}
        animate={{ x:10 }}
        transition={{ delay: 3 }}
        src={dibujo}
        alt="about2"
        />
      </div>
      <div className="texto">
        <motion.h3
        initial={{y:-100,}}
        animate={{y:400}}
        transition={{ delay: 2 , duration:2 }}>Te cuento algo de mi...</motion.h3>
        <motion.p
        initial={{opacity:0}}
        transition={{duration:7}}
        animate={{opacity:1}}>
        Soy Verónica Caro, licenciada en artes visuales y gestora cultural de profesión, desarrolladora Front-End y Python en constante aprendizaje desde el 2021. Responsable y resolutiva al enfrentar nuevos desafíos, adaptable al cambio, me interesa ser parte de equipos multidisciplinarios.
        Mi gran motivación es trabaja para la gente, aportando e implementando soluciones a sus problemáticas. Con conocimientos en Vue, React y Python. Soy constante y creativa, aportando ideas e implementando acciones innovadoras y desafiantes. Curiosa de las culturas, tecnologías, diseño, arte y fotografía.
        </motion.p>
      </div>
    </div>
  );
};

export default Texto;
