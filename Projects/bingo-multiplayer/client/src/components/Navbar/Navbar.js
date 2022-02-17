import React,{useState} from "react";
import "./Navbar.css";
import Modal from "../Modal/Modal";

function Navbar(){

    const [show,setShow]=useState(true);

    return(
        <nav className="main-nav">
            {/* 1st Logo part */}
            <div className="logo">
                <h2>
                    <span>M</span>ultiplayer
                    <span>B</span>ingo
                </h2>
            </div>

            {/* 2nd Menu Part */}
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="#" onClick={()=>setShow(true)} >Messages</a>
                    </li>
                    <Modal show={show} onClose={() => setShow(false)}>
                        <h1>Welcome Abhay!</h1>
                    </Modal>
                    <li>
                        <a href="javascript:window.location.reload(true)">New Game</a>
                    </li>
                    <li>
                        <a href="/">Close Game</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;