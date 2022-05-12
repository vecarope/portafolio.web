import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Galeria from "./components/galeria/Galeria"; 
import Skill from "./components/skill/Skill"; 
import Portafolio from "./components/portafolio/Portafolio"; 
import Texto from "./components/texto/Texto"; 
function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Texto />
      <Skill />
      <Portafolio/>
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
