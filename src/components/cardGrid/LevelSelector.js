import React from "react";

export default function LevelComp(props){
    return(
        <div>
            <div>
                <p>Select Dificulty</p>
            </div>
            <select onChange= {props.SelectLevel}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>
    )

}