import React, {useState} from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";


const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a className="nav-link" href="">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">SOBRE MI</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">SKILLS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="">PORTAFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">GALERIA</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">CONTACTO</a>
        </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}
        </div>
        </div>
    </nav>
  ); 
};

export default Navbar;
