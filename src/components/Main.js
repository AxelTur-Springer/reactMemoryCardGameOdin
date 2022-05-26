import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactDOM } from "react";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import CardGrid from "./cardGrid/CardGrid";

export default function Main(){
  const [Countrys, setCountrys] = useState([])
  const [CountrysClicked, setCountrysClicked] = useState([])
  const [Score, setScore] = useState(0);
  const [HighScore, setHighScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setCountrys(await fetchCountrys())
    }

    loadCards()
  }, [])

  const fetchCountrys = async () => {
    const Countrys = []
    const CountrysUrl = `https://restcountries.com/v3.1/all`
    const response = await fetch(CountrysUrl)
    const CountryData = await response.json()
    for (let i = 0; i <= 17; i++) {
      Countrys.push([CountryData[i].name.common,CountryData[i].flags.svg])
    }

    return Countrys
  }
  
  function ManageClicks(e){
    const CountryName = e.currentTarget.innerText
    setCountrysClicked(prev => [...prev, CountryName])
    if(CountrysClicked.includes(CountryName)){
      setScore(0)
      setCountrysClicked([])
        if(HighScore > Score){
        }else{
          setHighScore(Score)
        }
    }else{
      setScore(Score + 1)
    }
    reOrganizeCountrys()
  }
function reOrganizeCountrys(){
  setCountrys(shuffle(Countrys))

}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

    return (
       <div>
      <div>
        <ScoreBoard  actualScore = {Score} HighScore = {HighScore}/>             
      </div>
      <div>
        <CardGrid Countrys = {Countrys}
          OnClick = {ManageClicks} />
      </div>
  </div>
    );
   
}