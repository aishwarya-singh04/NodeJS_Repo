//Perks of Hooks over Classes and Functions

import React, {useState, useEffect} from 'react'

export default function ReactHooks() {
    const[name, setName]= useState("Aishwarya")
    const[roll, setRoll]= useState("04")

    //We can call Lifecycle single methods using useEffect()
    useEffect(()=>{
        alert("Hook Effect Called");
        console.log("Hook Effect Called");
    });
    return (
        <div>
            <h1>This is a React Hook</h1>
            <h2>
                Student Name: {name}
            </h2>
            <h2> Roll No: {roll}</h2>
            <button onClick={()=>{
                setName("Aishwarya Singh");
                setRoll("Four");
            }
            }>Click Me</button>
        </div>
    );
}
