import React,{useState,useEffect} from "react";
import Board from "../Board";
import "./Bingo.css";
import {name,room} from "../Join/Join";
import socketIo from "socket.io-client";
import Navbar from "../Navbar/Navbar";

const ENDPOINT="http://localhost:4500/";
 
function Bingo() {

  const socket=socketIo(ENDPOINT,{transports:['websocket']});

  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    socket.on('connect',()=>{
      alert("Connected");
    })

    socket.emit('joined',{name,room},(error)=>{
      if(error){
        alert(error);
      }
    });

    return ()=>{
      socket.emit('disconnect');

      socket.off();
    }
  },[]);

  useEffect(()=>{
    socket.on('message',(message)=>{
      setMessages([...messages,message]);
    });
  },[messages]);

  // function for sending messages

  return (
    <div className="App">
      <Navbar/>
      <div className="board-row">
        <Board />
        <Board />
      </div>
    </div>
  );
}

export default Bingo;
