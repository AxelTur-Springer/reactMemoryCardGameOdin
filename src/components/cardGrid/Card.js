import React from "react";      
import "./cardGrid.css";
export default function Card(props){
    
    return(
        <div className="CardComp">
            <div>
                <img src={props.CountryFlag} alt="" />
            </div>
            <div>
                <p>Country: {props.CountryName}</p>
            </div>
        </div>
    )
}