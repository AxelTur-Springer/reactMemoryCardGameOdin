import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import "./cardGrid.css"

export default function CardGrid(props){
const [CardComp,SetCardComp] = useState([]);




useEffect(() => {
    const loadCard = async()=>{
        SetCardComp( await arrayComp()) 
    }

    loadCard()
  }, [])

  
function arrayComp (){
    let ComponentArray =[];
    for(let i = 0 ; i < props.countryObjContainer.length; i++){
        ComponentArray.push(
            <Card
            CountryName ={props.countryObjContainer[i].name.common}
            CountryFlag = {props.countryObjContainer[i].flags.png}
            />
            )          
    }
    return ComponentArray
  }


    return(
        <div className="GridCountrys">   
      
        {CardComp}
        </div>
    )
}