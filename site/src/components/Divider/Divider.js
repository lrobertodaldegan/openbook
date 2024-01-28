
const Divider = (props) => {
    let style = props.style ? props.style : {color: 'rgb(250,250,250)'};
    return (
        <div className="row">
            <div className="col-2 offset-5">
                <hr style={style}/>
            </div>
        </div>
    );
}

export default Divider;