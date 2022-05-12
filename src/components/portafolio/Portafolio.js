import Tarjeta from './Tarjeta'
import './Portafolio.css'
import {motion } from 'framer-motion';


function Portafolio(){
    return(
        <div className='porta-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000" fill-opacity="1" d="M0,192L80,160C160,128,320,64,480,85.3C640,107,800,213,960,240C1120,267,1280,213,1360,186.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <motion.h1
        initial={{x:400}}
        animate={{x:10}}
        transition={{ delay: 3 , duration:3}}
        >Portafolio</motion.h1>
        <Tarjeta/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,288L80,288C160,288,320,288,480,266.7C640,245,800,203,960,208C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    ); 
}

export default Portafolio; 
