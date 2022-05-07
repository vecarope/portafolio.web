import './Button.css';
import cv from '../../media/cv.pdf'; 

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ?
        buttonStyle :
        STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return ( 
    <a  
    href={cv} 
    target="_blank"
    rel="noopener noreferrer"
    download="cv.pdf"
    className = 'btn-mobile' >
        <button className = { `btn ${checkButtonStyle} ${checkButtonSize}` }
        onClick = { onClick }
        type = { type } >
        { children } 
        </button> 
        </a>
    );
};

export default Button; 

