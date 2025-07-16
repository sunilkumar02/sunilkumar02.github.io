import style from './button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


type ButtonKind = "primary" | "secondary" | "outlined";

interface ButtonProps {
    variant?: ButtonKind;
    children: React.ReactNode;
    arrowPosition?: "left" | "right";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({variant = 'primary', children, arrowPosition = 'left', onClick}) => {
    return (
        <button 
            className={`${style.btn} 
            ${style[`btn--${variant}`]} 
            ${style[`btn--arrow-${arrowPosition}`]}`}
            onClick={onClick}
        >
            <span className={style.icon}><FontAwesomeIcon icon={faArrowRight} /></span>
            {children}
        </button>
    );
};

export default Button;