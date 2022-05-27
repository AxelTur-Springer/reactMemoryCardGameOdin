import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./cardGrid.css"

export default function CardGrid(props){
 
    const CountryCards = props.Countrys.map((Country) => (
        <Card Country = {Country[0]} 
              CountryImg = {Country[1]}
              OnClick = {props.OnClick} />
      )).splice(0,props.Level).filter((a)=>{
          return a.props.Country !== "Nepal"
      })
    
    return(
        <div className="GridCountrys"> 
        {CountryCards}
        </div>
    )
}