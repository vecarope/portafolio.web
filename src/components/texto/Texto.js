import React from "react";
import "./Texto.css";
import dibujo from '../../media/ilus-3.png'; 

const Texto = () => {
  return (
    <div className="texto-container">
    <div className="texto-img">
        <img
          src={dibujo}
          alt="about2"
        />
      </div>
      <div className="texto">
        <h3>Te cuento algo de mi...</h3>
        <p>
        </p>
      </div>
      
    </div>
  );
};

export default Texto;
