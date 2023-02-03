import { useEffect, useState, useRef } from "react";
import "./Editor.styles.scss";
import Draggable from 'react-draggable';
//imports
import ElementHub from "../ElementHub/ElementHub.component";
import ElementSelector from "../ElementSelector/ElementSelector.component";


export default function Editor() {

    const defaultHtml = ["<html>", ["<head>", ["<style>","", "</style>"], "</head>"], ["<body>", [], "</body>"], "</html>"];
    const defaultStyle = ["*", ["margin: 0;", "padding: 0;", "box-sizing: border-box;", "overflow-x: hidden;"], "body", ["background-color: white;"]]

    const [html, setHtml] = useState(defaultHtml);
    const [style, setStyle] = useState(defaultStyle);
    const [elements, setElements] = useState([]);
    const [currentElement, setCurrentElement] = useState(["Headline","0",{}]);

    //create string from array
    let htmlStringEnd = "";
    useEffect(() => {
        htmlStringEnd = "";
        const htmlString = html.join("");
        let htmlStringLength = htmlString.length;
        for(let i = 0; i < htmlStringLength; i++){
            if(htmlString[i] === ",") htmlStringEnd+="";
            else htmlStringEnd+=htmlString[i];
        }
    },[html])

    //add style to html
    //html[1][1][1] =
    useEffect(() => {
        let styleString = "";
        const styleLength = style.length;
        for(let i = 0; i < styleLength; i++){
            if(i % 2 != 0){
                styleString+=style[i]+"} ";
            }else{
                for(let j = 0; j < style[i].length; j++){
                    styleString+=style[i][j];
                }
                styleString+="{";
            }
        }
        const newHTML = [...html];
        newHTML[1][1][1] = styleString;
        setHtml(newHTML);   
    },[style])
    
    

    useEffect(() => {
        //update Iframe
        const iframe = document.querySelector("iframe");
        if(!iframe) return;
        const iframeDocument = iframe.contentDocument;
        if(!iframeDocument) return;
        const iframeBody = iframeDocument.body;

        const updateIframe = () => {
            iframeBody.innerHTML = htmlStringEnd;
        };

        updateIframe();
    },[html])


    //add elements
    const addH1 = (content: string, position: Number[]) => {
        const newHTML = [...html];
        newHTML[position[0]][position[1]].push([`<h1 id="_${newHTML[position[0]][position[1]].length}">`,content, `</h1>`]);
        setStyle([...style, `#_${newHTML[position[0]][position[1]].length-1}`, []])
        setElements([...elements, ["Headline", newHTML[position[0]][position[1]].length-1,{"text": "Headline"}]])
        setHtml(newHTML);

    }
    const addP = (content: string, position: Number[]) => {
        const newHTML = [...html];
        newHTML[position[0]][position[1]].push([`<p id="_${newHTML[position[0]][position[1]].length}">`,content, `</p>`]);
        setStyle([...style, `#_${newHTML[position[0]][position[1]].length-1}`, []])
        setElements([...elements, ["Paragraph", newHTML[position[0]][position[1]].length-1,{"text": "Paragraph"}]])
        setHtml(newHTML);
    }
    
    return(
        <div className="editor-container">
            <Draggable handle=".dragable-object-section-1">
                <div className="section-1">
                    <div className="dragable-object dragable-object-section-1"></div>
                    <button className="add-button addH1" onClick={() => addH1("Headline", [2,1])}>Add Headline</button>
                    <button className="add-button addP" onClick={() => addP("Text", [2,1])}>Add Text</button>
                    <ElementSelector elements={elements} setCurrentElement={setCurrentElement} object={currentElement[2]}/>
                </div>
            </Draggable>
            
            <iframe className="website-showcase-iframe" sandbox="allow-same-origin allow-scripts"/>
            <Draggable handle=".dragable-object-section-2">
                <div className="section-2">
                    <div className="dragable-object dragable-object-section-2"></div>
                    <ElementHub html={html} style={style} setHtml={setHtml} setStyle={setStyle} element={currentElement[0]} index={currentElement[1]} object={currentElement[2]}/>
                </div>
            </Draggable>
            
        </div>
    )
}