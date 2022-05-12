import {motion} from 'framer-motion';
import './Carrusel.css';
import './Logos.css'; 
import Logos from './Logos'; 


function Skill() {
  return(
<div className="skill-container">
<motion.h1
initial={{x:-600}}
animate={{x:0}}
transition={{ delay: 2 , duration:2}}>
Mis Skills</motion.h1>
<Logos/>
</div>
); 
}

export default Skill;
