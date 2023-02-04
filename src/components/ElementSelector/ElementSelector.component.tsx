import { useEffect, useState } from "react";
import "./ElementSelector.styles.scss";

export default function ElementSelector({setCurrentElement, elements}) {


    function changeSelectedTarget(index: Number){
        setCurrentElement([elements[index][0], elements[index][1], elements[index][2]]);
    } 

    return(
            elements.map((element: string, index: Number) => {
                return(
                    <p className="selector-element" onClick={() => changeSelectedTarget(index)} key={index}>{`${element[0]}: ${element[2]["text"].length <= 15 ? element[2]["text"] : element[2]["text"].substring(0,15) +"..."}`}</p>
                )
            })
        )
}