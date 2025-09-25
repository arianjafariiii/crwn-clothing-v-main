import './Button.styles.scss';

const BUTTON_TYPES_CLASSES = {
    google: "google-sin-in",
    inverted: "inverted"
}


const Button = ({buttonType, children, ...otherProps}) => {
    return(
        <button {...otherProps} className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} >{children}</button>
    );    
}


export default Button;