import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactDOM } from "react";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import CardGrid from "./cardGrid/CardGrid";
import LevelComp from "./cardGrid/LevelSelector";
import "../Styling/main.css"

export default function Main(){
  const [Countrys, setCountrys] = useState([])
  const [CountrysClicked, setCountrysClicked] = useState([])
  const [Score, setScore] = useState(0);
  const [HighScore, setHighScore] = useState(0);
  const [Level, setLevel] = useState(20)

  useEffect(() => {
    const loadCards = async () => {
      setCountrys(await fetchCountrys())

    }

    loadCards()
    
  }, [Level])

  const fetchCountrys = async () => {
    const Countrys = []
    const CountrysUrl = `https://restcountries.com/v3.1/all`
    const response = await fetch(CountrysUrl)
    const CountryData = await response.json()
    for (let i = 0; i <= Level; i++) {
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
        const pop =document.getElementsByClassName("popUpWinOrLose")
        pop[0].style.display = 'flex'
        setTimeout(() => {
          pop[0].style.display = 'none'
        }, 1000);
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
function SelectLevel(e){
  let level = e.target.value
  if(level === 'Easy'){
    setLevel(20)
    setScore(0)
   }
  else if(level === 'Medium'){
    setLevel(35)
    setScore(0)}
  else if(level === 'Hard'){
    setLevel(50)
    setScore(0)}
  else{
    setLevel(20)
  }

}
    return (
       <div>
         <div className = 'popUpWinOrLose'>
           <div className = "Content">
            <p>Oh oh you lost</p>
           </div>
         </div>
         <div>
          <LevelComp SelectLevel = {SelectLevel} />
         </div>
      <div>
        <ScoreBoard  actualScore = {Score} HighScore = {HighScore}/>             
      </div>
      <div>
        <CardGrid Countrys = {Countrys}
          Level ={Level}
          OnClick = {ManageClicks} />
      </div>

  </div>
    );
   
}