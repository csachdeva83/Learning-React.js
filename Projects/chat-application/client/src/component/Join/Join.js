import React,{useState} from "react";
import "./Join.css";
import {Link} from "react-router-dom";

let user;

function sendUser(){
    user=document.getElementById('joinInput').value;
    document.getElementById('joinInput').value="";
}

function Join(){

    const [name,setName]=useState("");

    return(
        <div className="JoinPage">
            <div className="JoinContainer">
                <h1>CHAT APPLICATION</h1>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" type="text" id="joinInput" />
                <Link onClick={(event)=>!name?event.preventDefault():null} to="/chat">
                    <button onClick={sendUser} className="joinbtn">Login In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;
export {user};