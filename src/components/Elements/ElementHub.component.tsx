 import { useEffect, useState } from "react";
import Headline from "./Headline.element";
import Pharagraph from "./Pharagraph.element";
import "../Styles/GeneralStyleComponents.style.scss"
import "./Elements.style.scss";
import Empty from "./Empty.element";
import Span from "./Span.element";
import Header from "./Header.element";
import Main from "./Main.element";
import Footer from "./Footer.element";
 
 export default function ElementHub({index, element, object, changeStyle, resetStyle, changeText, makeBorderBoxInvisible}) {

    function resetStyleHandler(css: string, double = false) {
        resetStyle(css, double, index, object);
    }

    function changeStyleHandler( css: string, value: string, unit="", double = false) {
        changeStyle(css, value, unit, double, index, object);
    }

    function changeTextHandler(e: any){
        changeText(e, index, object);
    }


    switch(element){
        case "Headline":
            return <Headline 
            object={object} 
            text={object["text"]} 
            changeStyle={changeStyleHandler} 
            resetStyle={resetStyleHandler} 
            changeText={changeTextHandler} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Paragraph":
            return <Pharagraph 
            object={object} 
            text={object["text"]} 
            changeStyle={changeStyleHandler} 
            resetStyle={resetStyleHandler} 
            changeText={changeTextHandler} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Empty": 
            return <Empty 
            object={object} 
            text={object["text"]} 
            changeStyle={changeStyleHandler} 
            resetStyle={resetStyleHandler} 
            changeText={changeTextHandler} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Span": 
            return <Span 
            object={object} 
            text={object["text"]} 
            changeStyle={changeStyleHandler} 
            resetStyle={resetStyleHandler} 
            changeText={changeTextHandler} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Header": 
            return <Header 
            object={object} 
            text={object["text"]} 
            changeStyle={changeStyleHandler} 
            resetStyle={resetStyleHandler} 
            changeText={changeTextHandler} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Main": 
            return <Main 
            object={object} 
            text={object["text"]} 
            changeStyle={changeStyleHandler} 
            resetStyle={resetStyleHandler} 
            changeText={changeTextHandler} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        case "Footer": 
            return <Footer 
            object={object} 
            text={object["text"]} 
            changeStyle={changeStyleHandler} 
            resetStyle={resetStyleHandler} 
            changeText={changeTextHandler} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        default:
            return (
                <div className="no-element-selected-container">
                    <p>Select an Element</p>
                </div>
                )
    }
 }