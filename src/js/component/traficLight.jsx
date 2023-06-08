import React from "react";
import { useState,useEffect } from "react";

let TrafficLight = () =>{
    const [color, setColor] = useState("");  
    return (    
        <div className=" d-flex justify-content-center align-items-center vh-100 flex-column" >
            <div className="stick d-block"></div>
            <div className="row d-flex justify-content-center  align-items-center container">
                <div className={"red " + (color==="red" ? "selected" : " ")} onClick={()=>{
                    setColor("red")
                }}></div> 
                 <div className={"yellow " + (color==="yellow" ? "selected" : " ")} onClick={()=>{
                    setColor("yellow")
                }}></div> 
                 <div className={"green " + (color==="green" ? "selected" : " ")} onClick={()=>{
                    setColor("green")
                }}></div> 
            </div>
            <div>
            </div>
        </div>
    )
}
export default TrafficLight;