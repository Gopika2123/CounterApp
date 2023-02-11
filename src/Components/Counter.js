import React from 'react'
import { useState } from 'react';
import "./Counter.css"
function Counter() {
    const [counter,setcounter]=useState(0)
  function increment(){
    setcounter(counter+1)
  }
  function decrement(){
    if(counter!=0)
    setcounter(counter-1)
  }
  function reset(){
    setcounter(0)
  }
 return (
    <div id="content"
    style={{
        backgroundColor:"pink",
        flexDirection:"column",
        textAlign:"center",
        justifyContent:"center",
        border:"1px solid black",
        padding:"200px",
        margin:"auto"
}}
    
    ><h3
    style={{
        alignItems:"center"
    }}
    >Counter Application</h3>
        <h1>{counter}</h1>
        <button   
        style={{backgroundColor:"green",color:"white",padding:"5px",margin:"5px"}}
        onClick={increment}>Add</button>
        <button
        style={{backgroundColor:"red",color:"white",padding:"5px",margin:"5px"}}
        onClick={decrement}>minus</button>
        <button
        style={{backgroundColor:"black",color:"white",padding:"5px",margin:"5px"}}
        onClick={reset}>reset</button>


        
        
        </div>

  )
}

export default Counter