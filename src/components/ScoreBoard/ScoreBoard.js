import React from "react";
import styled from 'styled-components'

export default function ScoreBoard(props){

    return (
        <ScoreBoardWrapper>
                <p>Score: {props.actualScore}</p>
                <p>High Score: {props.HighScore}</p>
        </ScoreBoardWrapper>
    )
}

const ScoreBoardWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: row;
    border: solid red;

`


