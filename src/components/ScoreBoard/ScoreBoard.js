import React from "react";
import "./ScoreBoard.css"
export default function ScoreBoard(props){

    return (
        <div className= "ScoreBoardCont">
                <p>Score: {props.actualScore}</p>
                <p>High Score: {props.HighScore}</p>
        </div>
    )
}


