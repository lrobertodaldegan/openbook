import './SecondaryButton.css'

const SecondaryButton = (props) => {
    const customStyle = props.style ? props.style : {};
    const disabled = props.disabled && props.disabled === true;

    let btn = (
        <button className='sec-button' style={customStyle}>
            {props.label}
        </button>
    );

    if(props.action){
        btn = (
            <button disabled={disabled} 
                    className='sec-button' 
                    style={customStyle} 
                    onClick={disabled ? null : props.action}>
                {props.label}
            </button>
        );
    }

    return btn;
}

export default SecondaryButton;