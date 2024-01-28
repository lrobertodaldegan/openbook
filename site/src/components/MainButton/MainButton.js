import './MainButton.css'

const MainButton = (props) => {
    let btn = (
        <button className='main-button'>
            {props.label}
        </button>
    );

    if(props.action){  
        btn = (
            <button className='main-button' onClick={() => props.action()}>
                {props.label}
            </button>
        );
    }

    return btn;
}

export default MainButton;