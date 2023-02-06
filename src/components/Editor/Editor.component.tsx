import { useEffect, useState, useRef } from "react";
import "./Editor.styles.scss";
import Draggable from 'react-draggable';
//imports
import ElementHub from "../ElementHub/ElementHub.component";
import ElementSelector from "../ElementSelector/ElementSelector.component";


export default function Editor() {

    const defaultHtml = ["<html>", ["<head>", ["<style>", "", "</style>"], "</head>"], ["<body>", [], "</body>"], "</html>"];
    const defaultStyle = ["*", ["margin: 0;", "padding: 0;", "box-sizing: border-box;", "overflow-x: hidden;"], "body", ["background-color: white;"]]

    const [html, setHtml] = useState(defaultHtml);
    const [style, setStyle] = useState(defaultStyle);
    const [elements, setElements] = useState([]);
    const [currentElement, setCurrentElement] = useState(["none", 0, {}]);
    const [moving, setMoving] = useState(false);
    const [holding, setHolding] = useState(false);
    const [margin, setMargin] = useState([0, 0, 0, 0]);
    const [padding, setPadding] = useState([0, 0, 0, 0]);
    const [mouseMoving, setMouseMoving] = useState(false);
    const [mousePosition, setMousePosition] = useState([0, 0]);
    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const elementsLength = useRef(0);


    //create string from array
    let htmlStringEnd = "";
    useEffect(() => {
        htmlStringEnd = html.flat(Infinity).join("")

         //update Iframe
         const iframe = document.querySelector("iframe");
         if (!iframe) return;
         const iframeDocument = iframe.contentDocument;
         if (!iframeDocument) return;
         const iframeBody = iframeDocument.body;
 
         const updateIframe = () => {
             iframeBody.innerHTML = htmlStringEnd;
         };
 
         updateIframe();

    }, [html])

    //add style to html
    useEffect(() => {
        let styleString = "";
        const styleLength = style.length;
        for (let i = 0; i < styleLength; i++) {
            if (i % 2 != 0) {
                styleString += style[i] + "} ";
            } else {
                for (let j = 0; j < style[i].length; j++) {
                    styleString += style[i][j];
                }
                styleString += "{";
            }
        }
        const StyleStringLength = styleString.length;
        for(let i = 0; i < StyleStringLength; i++){
            if(styleString[i] === "," && styleString[i-1] === ";") styleString = styleString.slice(0, i) + styleString.slice(i + 1);
        }
        const newHTML = [...html];
        newHTML[1][1][1] = styleString;
        setHtml(newHTML);
    }, [style])

    useEffect(() => {
        const iframe = document.querySelector("iframe");
        if (!iframe) return;
        const iframeDocument = iframe.contentDocument;
        if (!iframeDocument) return;
        //add event listeners
        const customBorder = document.querySelector(".custom-border");
        if (!customBorder) return;
       iframeDocument.querySelectorAll(".element").forEach((element) => {
            element.addEventListener("pointerenter", () => {
                customBorder.style = `left: ${element.getBoundingClientRect().left}px; top: ${element.getBoundingClientRect().top}px; width: ${element.getBoundingClientRect().width + 2}px; height: ${element.getBoundingClientRect().height + 2}px; opacity: 1;`;
                const dots = document.querySelectorAll(".custom-border-dot");
                for(let i of dots){
                    i.style.opacity = "0";
                }
            });
            element.addEventListener("pointerleave", () => {
                customBorder.style.opacity = `0`;
            })

            element.addEventListener("click", () => {
                const elementIdx: number = parseInt(element.classList[1]);
                setCurrentElement(elements[elementIdx]);
                const dots = document.querySelectorAll(".custom-border-dot");
                for(let i of dots){
                    i.style.opacity = "1";
                }
            })
            element.addEventListener("dblclick", (e) => {
                setMousePosition([e.pageX, e.pageY]);
                setMouseMoving(true)
                if(currentElement[2]["transform"] !== undefined){
                    const currentXArr = currentElement[2]["transform"].split("");
                    const currentYArr = currentXArr.slice(currentXArr.indexOf(","), currentXArr.indexOf(")"));
                    setCurrentX(parseInt(currentXArr.slice(currentXArr.indexOf("(") + 1, currentXArr.indexOf("v")).join("")));
                    setCurrentY(parseInt(currentYArr.slice(currentYArr.indexOf(",") + 2, currentYArr.indexOf("v")).join("")));
                }
            })
            element.addEventListener("pointerup", (e) => {
                setMouseMoving(false);
            })

            element.addEventListener("pointermove", (e) => {
                if(!mouseMoving) return;
                changeStyle("transform", `translate(${Math.round(currentX + (e.pageX - mousePosition[0]) / (window.innerWidth / 100))}vw, ${Math.round(currentY + (e.pageY - mousePosition[1]) / (window.innerHeight / 100))}vh)`, undefined, undefined, currentElement[1], currentElement[2]);
            })
            iframeDocument.addEventListener("scroll", () => {
                customBorder.style = `left: ${element.getBoundingClientRect().left}px; top: ${element.getBoundingClientRect().top}px; width: ${element.getBoundingClientRect().width + 2}px; height: ${element.getBoundingClientRect().height + 2}px; opacity: 1;`;
            })
        })

        
        const marginMarker = document.querySelector(".custom-border-margin-marker");
        const paddingMarker = document.querySelector(".custom-border-padding-marker");
        document.querySelectorAll(".custom-border-dot").forEach(element => {
            element.addEventListener("pointerover", (e) => {
                customBorder.style.opacity = "1";
                if(element.classList.contains(""))
                element.style.opacity = "1";
            });
            element.addEventListener("pointerout", (e) => {
                customBorder.style.opacity = "0";
                marginMarker.style.opacity = "0";
                paddingMarker.style.opacity = "0";
            })
        });

    }, [html, style, mouseMoving])

    function onPointerMove(e: any, direction: string){
        let dot;
        if(direction === "height") dot = document.querySelector(".custom-border-bottom-dot");
        else dot = document.querySelector(".custom-border-right-dot");
        dot?.setPointerCapture(e.pointerId);
        const Iframe = document.querySelector("iframe");
        if(!Iframe) return;
        const IframeDocument = Iframe.contentDocument;
        if(!IframeDocument) return;
        const element = IframeDocument.querySelector(`#_${currentElement[1]}`);
        if(!element) return;
        if(moving){
            if(direction === "height") setDotPosition("height", e.pageY- element.getBoundingClientRect().top);
            else setDotPosition("width", e.pageX - element.getBoundingClientRect().left);
        }
    }

    function setDotPosition(css: string, position: number) {
        if (css === "height") changeStyle("height", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2])
        else changeStyle("width", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
    }

    function onPointerMoveMargin(e: any, direction: string){
        let dot;
        if(direction === "top") dot = document.querySelector(".margin-border-top-dot");
        else if(direction === "bottom") dot = document.querySelector(".margin-border-bottom-dot");
        else if(direction === "left") dot = document.querySelector(".margin-border-left-dot");
        else dot = document.querySelector(".margin-border-right-dot");
        dot?.setPointerCapture(e.pointerId);
        const Iframe = document.querySelector("iframe");
        if(!Iframe) return;
        const IframeDocument = Iframe.contentDocument;
        if(!IframeDocument) return;
        const element = IframeDocument.querySelector(`#_${currentElement[1]}`);
        if(!element) return;
        const elementRect = element.getBoundingClientRect();
        if(holding){
            setHolding(false);
            setMargin([element.getBoundingClientRect().top, element.getBoundingClientRect().bottom, element.getBoundingClientRect().left, element.getBoundingClientRect().right])
        }
        if(moving){
            const marginMarker = document.querySelector(".custom-border-margin-marker");
            if(!marginMarker) return;
            if(direction === "top") {
                setMarginDotPosition("top", e.pageY-margin[0] );
                marginMarker.style = `bottom: ${element.clientHeight}px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["margin-top"][0]}${currentElement[2]["margin-top"][1]}; opacity: 1;`
        }
            else if(direction === "bottom") {
                setMarginDotPosition("bottom", e.pageY- margin[1])
                marginMarker.style = `top: ${element.clientHeight}px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["margin-bottom"][0]}${currentElement[2]["margin-bottom"][1]}; opacity: 1;`
            }
            else if(direction === "left") {
                setMarginDotPosition("left", e.pageX - margin[2])
                marginMarker.style = `top: 0px; left: 0px; width: ${currentElement[2]["margin-left"][0]}${currentElement[2]["margin-left"][1]}; height: ${elementRect.height}px; opacity: 1; transform: translateX(${currentElement[2]["margin-left"][0] * -1}${currentElement[2]["margin-left"][1]})`
            }
            else {
                setMarginDotPosition("right", margin[3]-e.pageX )
                marginMarker.style = `top: 0px; left: ${element.clientWidth}px; width: ${currentElement[2]["margin-right"][0]}${currentElement[2]["margin-right"][1]}; height: ${elementRect.height}px; opacity: 1;`
            };
        }
    }

    function setMarginDotPosition(css: string, position: number) {
        if (css === "top") changeStyle("margin-top", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2])
        else if(css === "bottom") changeStyle("margin-bottom", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2]);
        else if(css === "left") changeStyle("margin-left", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
        else changeStyle("margin-right", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
    }

    function onPointerMovePadding(e: any, direction: string){
        let dot;
        if(direction === "top") dot = document.querySelector(".padding-border-top-dot");
        else if(direction === "bottom") dot = document.querySelector(".padding-border-bottom-dot");
        else if(direction === "left") dot = document.querySelector(".padding-border-left-dot");
        else dot = document.querySelector(".padding-border-right-dot");
        dot?.setPointerCapture(e.pointerId);
        const Iframe = document.querySelector("iframe");
        if(!Iframe) return;
        const IframeDocument = Iframe.contentDocument;
        if(!IframeDocument) return;
        const element = IframeDocument.querySelector(`#_${currentElement[1]}`);
        if(!element) return;
        const elementRect = element.getBoundingClientRect();
        if(holding){
            setHolding(false);
            setPadding([elementRect.top, elementRect.bottom, elementRect.left, elementRect.right])
        }
        if(moving){
            const paddingMarker = document.querySelector(".custom-border-padding-marker");
            if(!paddingMarker) return;
            if(direction === "top") {
                setPaddingDotPosition("top", e.pageY-padding[0] )
                paddingMarker.style = `top: 0px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["padding-top"][0]}${currentElement[2]["padding-top"][1]}; opacity: 1;`
            }
            else if(direction === "bottom") {
                setPaddingDotPosition("bottom", e.pageY- padding[1])
                paddingMarker.style = `bottom: 0px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["padding-bottom"][0]}${currentElement[2]["padding-bottom"][1]}; opacity: 1;`
            }
            else if(direction === "left") {
                setPaddingDotPosition("left", e.pageX - padding[2])
                paddingMarker.style = `top: 0px; left: 0px; width: ${currentElement[2]["padding-left"][0]}${currentElement[2]["padding-left"][1]}; height: ${elementRect.height}px; opacity: 1;`
            }
            else {
                setPaddingDotPosition("right", padding[3]-e.pageX )
                paddingMarker.style = `top: 0px; right: 0px; width: ${currentElement[2]["padding-right"][0]}${currentElement[2]["padding-right"][1]}; height: ${elementRect.height}px; opacity: 1;`
            }
        }
    }

    function setPaddingDotPosition(css: string, position: number) {
        if (css === "top") changeStyle("padding-top", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2])
        else if(css === "bottom") changeStyle("padding-bottom", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2]);
        else if(css === "left") changeStyle("padding-left", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
        else changeStyle("padding-right", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
    }

    useEffect(() => {
        document.querySelector(".section-2")?.scrollTo(0, 0);
    }, [currentElement])

    function changeStyle(css: string, value: string, unit = "", double = false, index: number, object: any) {
        const newStyle = [...style];
        const newElements = [...elements];
        if(newElements.length !== elementsLength.current) return;
        if(currentElement[1] !== currentElement[1]) return;
        const styleIdxArray: string[] = newStyle[newStyle.indexOf(`#_${currentElement[1]}`) + 1];
        if (styleIdxArray.includes(`${css}: ${value}${unit};`)) return;
        try {
            styleIdxArray.push(`${css}: ${value}${unit};`);
            let j = 0;
            for (let i of styleIdxArray) {
                if (i.includes(`${css}:`) && i !== `${css}: ${value}${unit};`) {
                    styleIdxArray.splice(j, 1)
                }
                j++;
            }
            if (!double) newElements[currentElement[1]][2][`${css}`] = value;
            else newElements[currentElement[1]][2][`${css}`] = [value, unit];
            setElements(newElements);
            setStyle(newStyle);
        } catch (e) {
            return;
        }

        //iframe
        const Iframe = document.querySelector("iframe");
        if (!Iframe) return;
        const IframeDocument = Iframe.contentDocument;
        if (!IframeDocument) return;
        const element = IframeDocument.querySelector(`#_${index}`);
        if (!element) return;
        const StyleBorderArray = ["width", "height", "margin-top", "margin-bottom", "margin-left", "margin-right", "padding-top", "padding-bottom", "padding-left", "padding-right"]
        if (StyleBorderArray.includes(css)) {
            const elementRect = element.getBoundingClientRect();
            const customBorder = document.querySelector(".custom-border");
            if (!customBorder) return;
            customBorder.style = `left: ${elementRect.left}px; top: ${elementRect.top}px; width: ${elementRect.width + 2}px; height: ${elementRect.height + 2}px; opacity: 1;`
        }
    }

    function changeText(e: any, index: number, object: any) {
        const newHTML = [...html];
        newHTML[2][1][currentElement[1]][1] = e.target.value;
        object["text"] = e.target.value;
        setHtml(newHTML);
    }

    function resetStyle(css: string, double = false, index: number, object: any) {
        const newStyle = [...style];
        const styleIdxArray = newStyle[newStyle.indexOf(`#_${index}`) + 1];
        let j = 0;
        for (let i of styleIdxArray) {
            if (i.includes(`${css}:`)) {
                styleIdxArray.splice(j, 1)
            }
            j++;
        }
        const newElements = [...elements]
        if (!double) newElements[index][2][`${css}`] = "";
        else newElements[index][2][`${css}`] = ["", ""];
        setElements(newElements);
        setStyle(newStyle);
    }

    function makeBorderBoxInvisible() {
        const customBorder = document.querySelector(".custom-border");
        if (!customBorder) return;
        customBorder.style.opacity = "0";
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Delete") {
            deleteCurrentElement();
        }
    })

    //remove elements
    function deleteCurrentElement(){
        if(currentElement[0] === "none") return;
        const currentIdx: number = currentElement[1];
        const newHTML = [...html];
        const newElements = [...elements];
        const newStyle = [...style];
        const newStyleIdx = newStyle.indexOf(`#_${currentIdx}`);
        newStyle.splice(newStyleIdx, 2);
        newHTML[2][1].splice(currentIdx, 1);
        newElements.splice(currentIdx, 1);
        for(let i = currentIdx; i<newElements.length; i++){
            newElements[i][1] -= 1;
        }
        let j = currentIdx;
        for(let i = newStyleIdx; i<newStyle.length; i+=2){
            newStyle[i] = `#_${newElements[j][1]}`;
            j++;
        }
        for(let i = currentIdx; i<newHTML[2][1].length; i++){
            newHTML[2][1][i][0] = `<h1 id="_${i}" class="element ${i}">`;
        }
        setStyle(newStyle);
        setHtml(newHTML);
        setElements(newElements);
        if(newElements.length !== 0){
            setCurrentElement(newElements[newElements.length-1]);
        }else{
            setCurrentElement(["none", 0, {}])
        }
        makeBorderBoxInvisible();
        elementsLength.current -= 1;
    }

    function moveCurrentElement(direction: string){
        const currentIdx: number = currentElement[1];
        let index: number = 0;
        if(direction === "up"){
            //up
            if(currentIdx === 0 || currentElement[0] === "none") return;
            index = -1
        }else{
            //down
            if(currentIdx === elementsLength.current - 1 || currentElement[0] === "none") return;
            index = 1
        }
        const newHTML = [...html];
        const newElements = [...elements];
        const newStyle = [...style];
        const newStyleIdx = newStyle.indexOf(`#_${currentIdx}`);
        const newStyleIdx2 = newStyle.indexOf(`#_${currentIdx + index}`);
        const newStyleContent = newStyle[newStyleIdx+1];
        const newStyleContent2 = newStyle[newStyleIdx2+1];
        newStyle[newStyleIdx+1] = newStyleContent2;
        newStyle[newStyleIdx2+1] = newStyleContent;
        const newHTMLContent = newHTML[2][1][currentIdx];
        const newHTMLContent2 = newHTML[2][1][currentIdx + index];
        newHTML[2][1][currentIdx] = newHTMLContent2;
        newHTML[2][1][currentIdx + index] = newHTMLContent;
        newHTML[2][1][currentIdx][0] = `<h1 id="_${currentIdx}" class="element ${currentIdx}">`;
        newHTML[2][1][currentIdx + index][0] = `<h1 id="_${currentIdx + index}" class="element ${currentIdx + index}">`;
        const newElementsContent = newElements[currentIdx];
        const newElementsContent2 = newElements[currentIdx + index];
        newElements[currentIdx] = newElementsContent2;
        newElements[currentIdx + index] = newElementsContent;
        if(direction === "up"){
            newElements[currentIdx][1] += 1;
            newElements[currentIdx + index][1] -= 1;
        }else{
            newElements[currentIdx][1] -= 1;
            newElements[currentIdx + index][1] += 1;
        }
        
        setStyle(newStyle);
        setHtml(newHTML);
        setElements(newElements);
        setCurrentElement(newElements[currentIdx + index]);
    }

    //add elements
    const addH1 = (content: string, position: number[]) => {
        const newHTML = [...html];
        const HTMLPosition = newHTML[position[0]][position[1]];
        HTMLPosition.push([`<h1 id="_${HTMLPosition.length}" class="element ${HTMLPosition.length}">`, content, `</h1>`]);
        setStyle([...style, `#_${HTMLPosition.length - 1}`, []])
        setElements([...elements, ["Headline", HTMLPosition.length - 1, { "text": "Headline" }]])
        elementsLength.current += 1;
        setHtml(newHTML);
    }
    const addP = (content: string, position: number[]) => {
        const newHTML = [...html];
        const HTMLPosition = newHTML[position[0]][position[1]];
        HTMLPosition.push([`<p id="_${HTMLPosition.length}" class="element ${HTMLPosition.length}">`, content, `</p>`]);
        setStyle([...style, `#_${HTMLPosition.length - 1}`, []])
        setElements([...elements, ["Paragraph", HTMLPosition.length- 1, { "text": "Paragraph" }]])
        elementsLength.current += 1;
        setHtml(newHTML);
    }

    return (
        <div className="editor-container">
            <Draggable handle=".dragable-object-section-1">
                <div className="section-1">
                    <div className="dragable-object dragable-object-section-1"></div>
                    <button className="add-button addH1" onClick={() => addH1("Headline", [2, 1])}>Add Headline</button>
                    <button className="add-button addP" onClick={() => addP("Text", [2, 1])}>Add Text</button>
                    <ElementSelector elements={elements} setCurrentElement={setCurrentElement} />
                    <button className="delete-element-button" onClick={() => deleteCurrentElement()}>Delete Current Element</button>
                    <button className="move-element-button move-element-button-up" onClick={() => moveCurrentElement("up")}>Move Current Element UP</button>
                    <button className="move-element-button move-element-button-down" onClick={() => moveCurrentElement("down")}>Move Current Element DOWN</button>
                </div>
            </Draggable>
            <div className="custom-border">
                <div className="custom-border-relative">
                    <div className="custom-border-dot custom-border-right-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMove(e, "width")} onPointerUp={() => setMoving(false)} />
                    <div className="custom-border-dot custom-border-bottom-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMove(e, "height")} onPointerUp={() => setMoving(false)} />
                    <div className="custom-border-dot custom-border-right-dot custom-border-right-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMove(e, "width")} onPointerUp={() => setMoving(false)} />
                    <div className="custom-border-dot custom-border-bottom-dot custom-border-bottom-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMove(e, "height")} onPointerUp={() => setMoving(false)} />
                    <></>
                    <div className="custom-border-dot custom-margin-dot custom-border-top-dot margin-border-top-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "top")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-margin-dot custom-border-top-inner-dot margin-border-top-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "top")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-margin-dot custom-border-right-dot margin-border-right-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "right")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-margin-dot custom-border-right-inner-dot margin-border-right-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "right")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-margin-dot custom-border-left-dot margin-border-left-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "left")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-margin-dot custom-border-left-inner-dot margin-border-left-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "left")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-margin-dot custom-border-bottom-dot margin-border-bottom-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "bottom")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-margin-dot custom-border-bottom-inner-dot margin-border-bottom-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMoveMargin(e, "bottom")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <></>
                    <div className="custom-border-dot custom-padding-dot custom-border-top-dot padding-border-top-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "top")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-padding-dot custom-border-top-inner-dot padding-border-top-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "top")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-padding-dot custom-border-right-dot padding-border-right-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "right")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-padding-dot custom-border-right-inner-dot padding-border-right-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "right")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-padding-dot custom-border-left-dot padding-border-left-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "left")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-padding-dot custom-border-left-inner-dot padding-border-left-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "left")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-padding-dot custom-border-bottom-dot padding-border-bottom-inner-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "bottom")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <div className="custom-border-dot custom-padding-dot custom-border-bottom-inner-dot padding-border-bottom-dot" onPointerDown={() => {setMoving(true)}} onPointerMove={(e) => onPointerMovePadding(e, "bottom")} onPointerUp={() => {setMoving(false); setHolding(true)}}/>
                    <></>
                    <div className="custom-border-margin-marker" />
                    <div className="custom-border-padding-marker" />
                </div>
            </div>
            <iframe className="website-showcase-iframe" sandbox="allow-same-origin allow-scripts" frameBorder="0" />
            <Draggable handle=".dragable-object-section-2">
                <div className="section-2">
                    <div className="dragable-object dragable-object-section-2"></div>
                    <ElementHub element={currentElement[0]} index={currentElement[1]} object={currentElement[2]} changeStyle={changeStyle} resetStyle={resetStyle} changeText={changeText} makeBorderBoxInvisible={makeBorderBoxInvisible} />
                </div>
            </Draggable>

        </div>
    )
}