import React from "react";

function Button(props){
    return(
        <button className="bingoBtn" style={props.style}>{props.letter}</button>
    );
}

export default Button;