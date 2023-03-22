import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  let [face, updateFace] = React.useState("");
  let [position, updatePosition] = React.useState("1");
  let total = React.useRef(0);
  let currentOperator = React.useRef(null);

  let themeObj = {
    "1":{
        App: {backgroundColor: "#3b4664", color: 'white'},
        themeSelectorInput: {backgroundColor: '#252c46'},
        calculatorFace: {backgroundColor: '#181f32'},
        calculatorKeypad: {backgroundColor: '#252d44'},
        key: {backgroundColor: '#e5e4e0', color: '#5b5d66'},
        keyHover: {backgroundColor: 'white'},
        alterKey: {backgroundColor: '#a2b3e1'},
        equalKey: {backgroundColor: '#e16a62'}
    },

    "2":{
        App: {backgroundColor: "#e6e6e6", color: '#3b3a34'},
        themeSelectorInput: {backgroundColor: '#d4cdcd'},
        calculatorFace: {backgroundColor: '#eeeeee'},
        calculatorKeypad: {backgroundColor: '#d3cdcd'},
        key: {backgroundColor: '#e5e4e0', color: '#5b5d66'},
        keyHover: {backgroundColor: 'white'},
        alterKey: {backgroundColor: '##62b5bd'},
        equalKey: {backgroundColor: '#f88b3e', color: 'white'}
    },
    
    "3":{
        App: {backgroundColor: "#17062a", color: '#ffe53b'},
        themeSelectorInput: {backgroundColor: '#1e0837'},
        calculatorFace: {backgroundColor: '#1e0836'},
        calculatorKeypad: {backgroundColor: '#1e0836'},
        key: {backgroundColor: '#331b4d', color: '#ffe53b'},
        keyHover: {backgroundColor: '#2e104f'},
        alterKey: {backgroundColor: '#8731b0'},
        equalKey: {backgroundColor: '#92fff9', color: '#0d262a'}
    }
}

  function keyPress(key){
    if(!+key){
      console.log(key === currentOperator.current)
      if(key === currentOperator.current){
        key = "=";
      }
      else{
        if(key==="DEL"){
          updateFace((prev)=>[...prev].splice(0, prev.length-1).join(""))
        }

        else if(key === "="){
          key = "=";
        }
  
        else{
          currentOperator.current = key;
          total.current = +face;
          updateFace("");
        }
      }

      if(key==="="){
        console.log(currentOperator.current)
        switch(currentOperator.current){
          case "+":
            total.current += +face;
            break;
          case "-":
            total.current -= +face;
            break;
          case "x":
            total.current *= +face;
            break;
          case "/":
            total.current /= +face;
            break;
        }
        updateFace(total.current.toString());
        currentOperator.current = "=";
      }
    }
    else{
      updateFace((prev)=>prev+key)
    }
    
  }

  function handleToggle(){
    updatePosition((prev)=>prev==="1"?"2":prev==="2"?"3":"1");
  }

  function handleKeyEnter(key){
    key.style.backgroundColor = themeObj[position]['keyHover'].backgroundColor;
  }

  function handleKeyLeave(key){
    key.style.backgroundColor = themeObj[position]['key'].backgroundColor;
  }

  return (
    <Calculator themeObj={themeObj} face={face} onClick={(e)=>keyPress(e.target.innerText)} position={position} togglePosition={handleToggle} hoverEnter={(e)=>handleKeyEnter(e.target)} hoverLeave={(e)=>handleKeyLeave(e.target)}/>
  );
}

export default App;
