 import { useEffect, useState } from "react";
import Headline from "../Elements/Headline/Headline.element";
import Pharagraph from "../Elements/Paragraph/Pharagraph.element";
 
 export default function ElementHub({index, element, object, changeStyle, resetStyle, changeText, makeBorderBoxInvisible}) {



    switch(element){
        case "Headline":
            return <Headline index={index} object={object} text={object["text"]} changeStyle={changeStyle} resetStyle={resetStyle} changeText={changeText} makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Paragraph":
            return <Pharagraph index={index} object={object} text={object["text"]} changeStyle={changeStyle} resetStyle={resetStyle} changeText={changeText} makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        default:
            return <div>Choose an element</div>
    }
 }