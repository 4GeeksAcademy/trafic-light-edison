import React from "react";
import { useState } from "react";

let TrafficLight = () =>{
    const [redOn, setRedOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false)
  
    const redClick = () => {
        setRedOn(true);
        setYellowOn(false);
        setGreenOn(false)

    };
  
    const yellowClick = () => {
        setRedOn(false);
        setYellowOn(true);
        setGreenOn(false)

    };

    const greenClick = () =>{
        setGreenOn(true)
        setRedOn(false);
        setYellowOn(false);
    }
    return (    
        <div className=" d-flex justify-content-center align-items-center vh-100 flex-column" >
            <div className="stick d-block"></div>
            <div className="row d-flex justify-content-center  align-items-center container">
                <div
                    className={`mb-1 red ${redOn ? "red-on" : ""}`} onClick={redClick}>
                </div>
                <div
                    className={`mb-1 yellow ${yellowOn ? "yellow-on" : ""}`} onClick={yellowClick}>
                </div>
                <div className={`mb-1 green ${greenOn ? "green-on" : ""}`} onClick={greenClick} >
                </div>
            </div>
        </div>
    )
}

export default TrafficLight;