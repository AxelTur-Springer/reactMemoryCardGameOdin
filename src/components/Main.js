import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactDOM } from "react";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import CardGrid from "./cardGrid/CardGrid";

export default function Main(){
    const [Obj, setObj] = useState({});
    const [Score, setScore] = useState(0);
    const [HighScore, setHighScore] = useState(0);


    useEffect(() => {
      (async function loadCards(){
        setObj(await fetchApi())
      })()
    }, [])
  
    const fetchApi = async () => {
      const ApiData = []
      const ApiDataUrl = `https://restcountries.com/v3.1/all`
      const response = await fetch(ApiDataUrl)
      const responseData = await response.json()
      for(let i = 0 ; i < 15; i++){
        ApiData.push(responseData[i])
      }
        return ApiData
    }
    
    return (
      <div>
          <div>
                <ScoreBoard  actualScore = {Score} HighScore = {HighScore}/>             
          </div>
          <div>
            <CardGrid countryObjContainer = {Obj} />
          </div>
      </div>
    );
   
}