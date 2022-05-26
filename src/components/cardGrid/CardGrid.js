import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./cardGrid.css"

export default function CardGrid(props){
    /*const [ divs, setdivs] = useState([])
    
async function testing(){
    let result = await test()
    setdivs(result)
}
    async function test(){
        let CountryCards = []
      for(let i = 1 ; i < 5 ; i++){
        CountryCards.push(
        <Card 
            Country = {props.Countrys[i][0]} 
            CountryImg = {props.Countrys[i][1]}
            OnClick = {props.OnClick} />)
     
    }
    return CountryCards
    }
    testing()*/
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