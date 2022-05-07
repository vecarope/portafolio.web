import React from "react";
import "./About.css";
import ilustracion from '../../media/ilus1.png'; 

const About = () => {
  return (
    <div className="about-container" href="sec1">
      <div className="about-texto">
        <h3>Te cuento algo de mi...</h3>
        <p>
        Soy Verónica Caro, licenciada en artes visuales y gestora cultural de profesión, desarrolladora Front-End y Python en constante aprendizaje desde el 2021. Responsable y resolutiva al enfrentar nuevos desafíos, adaptable al cambio, me interesa ser parte de equipos multidisciplinarios.
        Mi gran motivación es trabaja para la gente, aportando e implementando soluciones a sus problemáticas. Con conocimientos en Vue, React y Python. Soy constante y creativa, aportando ideas e implementando acciones innovadoras y desafiantes. Curiosa de las culturas, tecnologías, diseño, arte y fotografía.
        </p>
      </div>
      <div className="about-img">
        <img
          src={ilustracion}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
