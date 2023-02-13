import { useEffect, useState } from "react";
import "./Elements.style.scss";

export default function ElementSelector({setCurrentElement, elements, currentElement}) {


    function changeSelectedTarget(index: number){
        setCurrentElement([elements[index][0], elements[index][1], elements[index][2]]);
        changeCurrentElementIndicator(index, true)
    } 

    const changeCurrentElementIndicator = (index: number = currentElement[1], changed: boolean = false) => {
        if(currentElement[0] !== "none" || changed){
            const elementsArray = document.getElementsByClassName("selector-element");
            for(let i of elementsArray){
                i.classList.remove("active-selector-element");
            }
            document.getElementsByClassName(`selector-element-${index}`)[0].classList.add("active-selector-element");
        }
    }

    useEffect(() => {
        changeCurrentElementIndicator();
    }, [elements])

    return(
            elements.map((element: any, index: number) => {
                return(
                    <p className={`selector-element selector-element-${index}`} 
                    onClick={() => changeSelectedTarget(index)} 
                    key={index}>
                        {` 
                        ${element[0]}: 
                        ${element[2]["text"].length <= 15 ? 
                        element[2]["text"] : element[2]["text"].substring(0,15)
                        +"..."}
                        `}
                    </p>
                )
            })
        )
}