import React from "react";

export default function ScoreBoard(props){

    return (
        <div>
                <p>Score: {props.actualScore}</p>
                <p>High Score: {props.HighScore}</p>
        </div>
    )
}


