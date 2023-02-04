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

    useEffect(() => {
        const iframe = document.querySelector("iframe");
        if(!iframe) return;
        const iframeDocument = iframe.contentDocument;
        if(!iframeDocument) return;
        //add event listeners
        const customBorder = document.querySelector(".custom-border");
        if(!customBorder) return;
        iframeDocument.querySelectorAll(".element").forEach((element) => {
            element.addEventListener("pointerenter", () => {
                customBorder.style = `left: ${element.getBoundingClientRect().left}px; top: ${element.getBoundingClientRect().top}px; width: ${element.getBoundingClientRect().width+2}px; height: ${element.getBoundingClientRect().height+2}px; opacity: 1;`;
            });
            element.addEventListener("pointerleave", () => {
                customBorder.style.opacity = `0`;
            })

            element.addEventListener("click", () => {
                const elementIdx: number = parseInt(element.classList[1]);
                setCurrentElement([elements[elementIdx][0], elements[elementIdx][1], elements[elementIdx][2]]);
            })
        })

        document.querySelectorAll(".custom-border-dot").forEach(element => {
           element.addEventListener("pointerover", (e) => {
                customBorder.style.opacity = "1";
           });
           element.addEventListener("pointerout", (e) => {
                customBorder.style.opacity = "0";
           })
        });

        //add event listeners for custom border
        const bottomDot = document.querySelector(".custom-border-bottom-dot");
        bottomDot?.addEventListener("pointerdown", (e) => {
            bottomDot?.setPointerCapture(e.pointerId);
            const element = document.querySelector(`#_${currentElement[1]}`);
            changeStyle("height", element.getBoundingClientRect().height+2);            
        })

    },[html,style])


    useEffect(() => {
        document.querySelector(".section-2")?.scrollTo(0,0);
    },[currentElement])


    //add elements
    const addH1 = (content: string, position: number[]) => {
        const newHTML = [...html];
        newHTML[position[0]][position[1]].push([`<h1 id="_${newHTML[position[0]][position[1]].length}" class="element ${newHTML[position[0]][position[1]].length}">`,content, `</h1>`]);
        setStyle([...style, `#_${newHTML[position[0]][position[1]].length-1}`, []])
        setElements([...elements, ["Headline", newHTML[position[0]][position[1]].length-1,{"text": "Headline"}]])
        setHtml(newHTML);

    }
    const addP = (content: string, position: number[]) => {
        const newHTML = [...html];
        const HTMLPosition = newHTML[position[0]][position[1]];
        HTMLPosition.push([`<p id="_${HTMLPosition.length}" class="element">`,content, `</p>`]);
        setStyle([...style, `#_${HTMLPosition.length-1}`, []])
        setElements([...elements, ["Paragraph", HTMLPosition.length-1,{"text": "Paragraph"}]])
        setHtml(newHTML);
    }

    function changeStyle(css: string, value: string, unit = "", double = false, index: number, newElement: any) {
        const newStyle = [...style];
        const styleIdxArray: string[] = newStyle[newStyle.indexOf(`#_${index}`) + 1];
        if (styleIdxArray.includes(`${css}: ${value}${unit};`)) return;
        styleIdxArray.push(`${css}: ${value}${unit};`);
        let j = 0;
        for (let i of styleIdxArray) {
            if (i.includes(`${css}:`) && i !== `${css}: ${value}${unit};`) {
                styleIdxArray.splice(j, 1)
            }
            j++;
        }
        if(!double) newElement[2][`${css}`] = value;
        else newElement[2][`${css}`] = [value, unit];
        setStyle(newStyle);
        
        //iframe
        const Iframe = document.querySelector("iframe");
        if(!Iframe) return;
        const IframeDocument = Iframe.contentDocument;
        if(!IframeDocument) return;
        const element = IframeDocument.querySelector(`#_${index}`);
        if(!element) return;
        const StyleBorderArray = ["width", "height", "margin-top", "margin-bottom", "margin-left", "margin-right", "padding-top", "padding-bottom", "padding-left", "padding-right"]
        if(StyleBorderArray.includes(css)){
            const elementRect = element.getBoundingClientRect();
            const customBorder = document.querySelector(".custom-border");
            if(!customBorder) return;
            customBorder.style = `left: ${elementRect.left}px; top: ${elementRect.top}px; width: ${elementRect.width+2}px; height: ${elementRect.height+2}px; opacity: 1;`
        }
    }
    
    function changeText(e: any, index: number, newElement: any) {
        const newHTML = [...html];
        newHTML[2][1][index][1] = e.target.value;
        newElement[2]["text"] = e.target.value;
        setHtml(newHTML);
    }

    function resetStyle(css: string, double = false, index: number, newElement: any) {
        const newStyle = [...style];
        const styleIdxArray = newStyle[newStyle.indexOf(`#_${index}`) + 1];
        let j = 0;
        for (let i of styleIdxArray) {
            if (i.includes(`${css}:`)) {
                styleIdxArray.splice(j, 1)
            }
            j++;
        }
        if(!double) newElement[2][`${css}`] = "";
        else newElement[2][`${css}`] = ["", ""];
        setStyle(newStyle);
    }

    function makeBorderBoxInvisible(){
        const customBorder = document.querySelector(".custom-border");
        if(!customBorder) return;
        customBorder.style.opacity = "0";
    }
    
    return(
        <div className="editor-container">
            <Draggable handle=".dragable-object-section-1">
                <div className="section-1">
                    <div className="dragable-object dragable-object-section-1"></div>
                    <button className="add-button addH1" onClick={() => addH1("Headline", [2,1])}>Add Headline</button>
                    <button className="add-button addP" onClick={() => addP("Text", [2,1])}>Add Text</button>
                    <ElementSelector elements={elements} setCurrentElement={setCurrentElement}/>
                </div>
            </Draggable>
            <div className="custom-border">
                <div className="custom-border-relative">
                    <div className="custom-border-dot custom-border-top-dot"></div>
                    <div className="custom-border-dot custom-border-right-dot"></div>
                    <div className="custom-border-dot custom-border-bottom-dot"></div>
                    <div className="custom-border-dot custom-border-left-dot"></div>
                    <div className="custom-border-dot custom-border-top-dot custom-border-top-inner-dot"></div>
                    <div className="custom-border-dot custom-border-right-dot custom-border-right-inner-dot"></div>
                    <div className="custom-border-dot custom-border-bottom-dot custom-border-bottom-inner-dot"></div>
                    <div className="custom-border-dot custom-border-left-dot custom-border-left-inner-dot"></div>
                </div>
            </div>
            <iframe className="website-showcase-iframe" sandbox="allow-same-origin allow-scripts" frameBorder="0"/>
            <Draggable handle=".dragable-object-section-2">
                <div className="section-2">
                    <div className="dragable-object dragable-object-section-2"></div>
                    <ElementHub element={currentElement[0]} index={currentElement[1]} object={currentElement[2]} changeStyle={changeStyle} resetStyle={resetStyle} changeText={changeText} makeBorderBoxInvisible={makeBorderBoxInvisible}/>
                </div>
            </Draggable>
            
        </div>
    )
}