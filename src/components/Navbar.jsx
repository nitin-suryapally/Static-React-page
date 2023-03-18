import React from "react";
import image from "../images/download.png"


export default function Navbar(){
    return(
        <nav>
            <img src={image} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}