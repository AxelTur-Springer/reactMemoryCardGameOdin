import React from "react";      
import "./cardGrid.css";
export default function Card(props){
    
    return(
        <div className="CardComp" onClick= {props.OnClick}>
            <div className = "CardImg">
                <img src={props.CountryImg} alt="" />
            </div>
            <div>
                <p>{props.Country}</p>
            </div>
        </div>
    )
}