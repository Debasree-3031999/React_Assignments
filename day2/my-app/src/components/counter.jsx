import {useState} from "react";

const Counter=()=>{
    const[counter,setCounter]=useState(0);
    const handleChange=(num)=>{
        setCounter(counter+num)
    }
    return(
        <>
            <div>
               <h3 className={`${counter%2===0 ? "greentxt":"redtxt"}`}>Counter : {counter}</h3>
               <button onClick={()=>{
                   handleChange(1)
               }}>Increment(+1)</button>
               <button onClick={()=>{
                   handleChange(-1)
               }}>Decrement(-1)</button>
               <button onClick={()=>{
                   
                   handleChange(counter)
               }}>Double</button>
            </div>
        </>
    )
}

export default Counter