import React from "react";

export default function LevelComp(props){
    return(
        <div>
            <select onClick= {props.SelectLevel}>
                <option value="Select Dificulty">Select Dificulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>
    )

}