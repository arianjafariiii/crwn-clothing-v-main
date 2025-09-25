import './input-field.styles.scss';

const InputField = ({label, ...otherProps}) => {
    return(
    <div className="group">
        <label className={`${otherProps.value ? "shrink": "none"} form-input-label`}>{label}</label>
                <input className="form-input"
                {...otherProps}
                />
    </div>
    );
}


export default InputField; 