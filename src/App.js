import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  let [face, updateFace] = React.useState("");
  let [position, updatePosition] = React.useState("1");

  function keyPress(key){
    updateFace((prev)=>prev+key)
  }

  function handleToggle(){
    updatePosition((prev)=>prev==="1"?"2":prev==="2"?"3":"1");
  }

  return (
    <Calculator face={face} onClick={(e)=>keyPress(e.target.innerText)} position={position} togglePosition={handleToggle}/>
  );
}

export default App;
