import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>VERONICA CARO</h1>
        <p>Front-End Developer</p>
      </div>
      <div className="footer-contact">
        <h3>CONTACTO</h3>
        <p> vecarope@gmail.com</p>
      </div>
      <div className="footer-sns">
        <div className="design-by"> Diseñado con 💜 por vecarope</div>
        <div className="sns-links">
          <a href="https://linkedin.com/in/vecarope" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/vecarope" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          <a href="https://www.instagram.com/vecarope" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
