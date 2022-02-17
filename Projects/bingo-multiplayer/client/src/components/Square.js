import React from "react";

function Square(props){

    return(
        <div>
            <input className="btn" style={props.style} onClick={()=>props.onClick()} value={props.value} readOnly={props.read}></input>
        </div>
    );
}

export default Square;

