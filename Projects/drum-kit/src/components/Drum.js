import React,{useEffect} from "react";

function Drum(props){

    const play=()=>{
        new Audio(props.sound).play();
    };

    useEffect(()=>{
        document.addEventListener("keydown",(e)=>{
            if(e.key.toLowerCase()===props.letter.toLowerCase()){
                play(); 
            }
        })
    })

    return(
        <div className="drum" onClick={play}>
            <div className="key">
                {props.letter}
            </div>
        </div>
    );
}

export default Drum;


