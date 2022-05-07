import "./Cover.css";
import Button from './Button'; 
import coverVideo from "../../media/video.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <div className='cover-container'>
      <h1>HOLA!</h1>
      <h2>Soy Verónica...</h2>
      <p>Front- End Developer</p>
      <div className="hero-btns">
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        Descargar Curriculum
      </Button>
    </div>
  </div> 
  </div>
  );
};

export default Cover;
