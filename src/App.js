
import React from "react";
import ReactDOM from "react-dom"
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./styles/styles.css"

export default function App(){
    return(

        <div>
            {/* the function call in react < name />  */}
            <Navbar /> 
            <Main />

        </div>
    )
} 