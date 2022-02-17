import React,{useState} from "react";
import {Link} from 'react-router-dom';
import "./Join.css";

let name,room;

function sendUser(){
  name=document.getElementById('joinInput').value;
  document.getElementById('joinInput').value="";
  room=document.getElementById('joinRoom').value;
  document.getElementById('joinRoom').value="";
}

function Join() {

  const [user,setUser]=useState("");
  const [meet,setMeet]=useState("");
  console.log(user);
  console.log(meet);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Name" className="joinInput" id="joinInput" type="text" onChange={(event)=> setUser(event.target.value)} /></div>
        <div><input placeholder="Room" className="joinInput mt-20" id="joinRoom" type="text" onChange={(event)=> setMeet(event.target.value)} /></div>
        <Link onClick={event=>(!user || !meet)?event.preventDefault():null} to={`/Bingo?name=${user}&room=${meet}`}>
          <button onClick={sendUser} className="button mt-20">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
export {name,room};
