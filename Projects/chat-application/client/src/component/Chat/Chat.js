import React,{useEffect} from "react";
import {user} from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";

const ENDPOINT="http://localhost:4500/";

function Chat(){

    const socket=socketIo(ENDPOINT,{transports:['websocket']});

    useEffect(()=>{
        socket.on('connect',()=>{
            alert('Connected');
        })
        return ()=>{

        }
    },[]);

    return(
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header"></div>
                <div className="chatBox"></div>
                <div className="inputBox">
                    <input type="text" id="chatInput" />
                    <button className="sendBtn">Send</button>
                </div> 
            </div>
        </div>
    );
}

export default Chat;