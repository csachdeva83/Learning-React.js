import React,{useState} from "react";
import Drum from "./components/Drum";

function App() {
  const [sounds,setSounds]=useState([
    {
      name: "crash",
      sound: require("./sounds/crash.mp3"),
      key: "A"
    },
    {
      name: "kick-bass",
      sound: require("./sounds/kick-bass.mp3"),
      key: "S"
    },
    {
      name: "snare",
      sound: require("./sounds/snare.mp3"),
      key: "D"
    },
    {
      name: "tom-1",
      sound: require("./sounds/tom-1.mp3"),
      key: "F"
    },
    {
      name: "tom-2",
      sound: require("./sounds/tom-2.mp3"),
      key: "G"
    },
    {
      name: "tom-3",
      sound: require("./sounds/tom-3.mp3"),
      key: "H"
    },
    {
      name: "tom-4",
      sound: require("./sounds/tom-4.mp3"),
      key: "J"
    }
  ]);
  
  return (
    <div className="App">
      <h1>React Drum Kit</h1>
      {sounds.map((sound)=>(
        <Drum letter={sound.key} sound={sound.sound} />
      ))}
    </div>
  );
}

export default App;
