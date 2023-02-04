 import { useEffect, useState } from "react";
import Headline from "../Elements/Headline/Headline.element";
import Pharagraph from "../Elements/Paragraph/Pharagraph.element";
 
 export default function ElementHub({style, html, setHtml, setStyle, index, element, object, changeStyle, resetStyle, changeText, makeBorderBoxInvisible}) {



    switch(element){
        case "Headline":
            return <Headline style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} object={object} text={object["text"]} changeStyle={changeStyle} resetStyle={resetStyle} changeText={changeText} makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Paragraph":
            return <Pharagraph style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} object={object} text={object["text"]} changeStyle={changeStyle} resetStyle={resetStyle} changeText={changeText} makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        default:
            return <div></div>
    }
 }