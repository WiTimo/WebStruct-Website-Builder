import { useEffect, useState, useRef } from "react";
import "./Editor.styles.scss";
import Draggable from 'react-draggable';
//imports
import ElementHub from "../ElementHub/ElementHub.component";
import ElementSelector from "../ElementSelector/ElementSelector.component";
import CustomPadding from "../CustomSelect/CustomPadding.component";
import CustomMargin from "../CustomSelect/CustomMargin.component";
import CustomSize from "../CustomSelect/CustomSize.component";


interface DefaultDomElement{
    style: string,
}
export default function Editor() {

    //default html and style, for the beginning
    const defaultHtml = ["<html>", ["<head>", ["<style>", "", "</style>"], "</head>"], ["<body>", [], "</body>"], "</html>"];
    const defaultStyle = ["*", ["margin: 0;", "padding: 0;", "box-sizing: border-box;", "overflow-x: hidden;"], "body", ["background-color: white;"]]

    const [html, setHtml] = useState<string[][][]>(defaultHtml);
    const [style, setStyle] = useState(defaultStyle);
    const [elements, setElements] = useState([]);
    const [currentElement, setCurrentElement] = useState(["none", 0, {}]);
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
        iframeBody.innerHTML = htmlStringEnd;
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
        for (let i = 0; i < StyleStringLength; i++) {
            if (styleString[i] === "," && styleString[i - 1] === ";") styleString = styleString.slice(0, i) + styleString.slice(i + 1);
        }
        const newHTML: string[][][] = [...html];
        newHTML[1][1][1] = styleString;
        setHtml(newHTML);
    }, [style])

    useEffect(() => {
        const iframe = document.querySelector("iframe");
        if (!iframe) return;
        const iframeDocument = iframe.contentDocument;
        if (!iframeDocument) return;
        //add event listeners
        const customBorder: DefaultDomElement = document.querySelector(".custom-border");
        if (!customBorder) return;
        iframeDocument.querySelectorAll(".element").forEach((element) => {
            element.addEventListener("pointerenter", () => {
                customBorder.style = `left: ${element.getBoundingClientRect().left}px; top: ${element.getBoundingClientRect().top}px; width: ${element.getBoundingClientRect().width + 2}px; height: ${element.getBoundingClientRect().height + 2}px; opacity: 1;`;
                const dots = document.querySelectorAll(".custom-border-dot");
                for (let i of dots) {
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
                for (let i of dots) {
                    i.style.opacity = "1";
                }
            })
            element.addEventListener("dblclick", (e) => {
                setMousePosition([e.pageX, e.pageY]);
                setMouseMoving(true)
                if (currentElement[2]["transform"] !== undefined) {
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
                if (!mouseMoving) return;
                changeStyle("transform", `translate(${Math.round(currentX + (e.pageX - mousePosition[0]) / (window.innerWidth / 100))}vw, ${Math.round(currentY + (e.pageY - mousePosition[1]) / (window.innerHeight / 100))}vh)`, undefined, undefined, currentElement[1], currentElement[2]);
            })
            iframeDocument.addEventListener("scroll", () => {
                customBorder.style = `left: ${element.getBoundingClientRect().left}px; top: ${element.getBoundingClientRect().top}px; width: ${element.getBoundingClientRect().width + 2}px; height: ${element.getBoundingClientRect().height + 2}px; opacity: 1;`;
            })
        })


        //Displays the margin, padding, width and border of the current element

        const marginMarker = document.querySelector(".custom-border-margin-marker");
        const paddingMarker = document.querySelector(".custom-border-padding-marker");
        document.querySelectorAll(".custom-border-dot").forEach(element => {
            element.addEventListener("pointerover", (e) => {
                customBorder.style.opacity = "1";
                if (element.classList.contains(""))
                    element.style.opacity = "1";
            });
            element.addEventListener("pointerout", (e) => {
                customBorder.style.opacity = "0";
                marginMarker.style.opacity = "0";
                paddingMarker.style.opacity = "0";
            })
        });

    }, [html, style, mouseMoving])

    

    useEffect(() => {
        document.querySelector(".section-2")?.scrollTo(0, 0);
    }, [currentElement])

    function changeStyle(css: string, value: string, unit = "", double = false, index: number, object: any) {
        const newStyle = [...style];
        const newElements = [...elements];
        if (newElements.length !== elementsLength.current) return;
        if (currentElement[1] !== currentElement[1]) return;
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
    function deleteCurrentElement() {
        if (currentElement[0] === "none") return;
        const currentIdx: number = currentElement[1];
        const newHTML = [...html];
        const newElements = [...elements];
        const newStyle = [...style];
        const newStyleIdx = newStyle.indexOf(`#_${currentIdx}`);
        newStyle.splice(newStyleIdx, 2);
        newHTML[2][1].splice(currentIdx, 1);
        newElements.splice(currentIdx, 1);
        for (let i = currentIdx; i < newElements.length; i++) {
            newElements[i][1] -= 1;
        }
        let j = currentIdx;
        for (let i = newStyleIdx; i < newStyle.length; i += 2) {
            newStyle[i] = `#_${newElements[j][1]}`;
            j++;
        }
        for (let i = currentIdx; i < newHTML[2][1].length; i++) {
            newHTML[2][1][i][0] = `<h1 id="_${i}" class="element ${i}">`;
        }
        setStyle(newStyle);
        setHtml(newHTML);
        setElements(newElements);
        if (newElements.length !== 0) {
            setCurrentElement(newElements[newElements.length - 1]);
        } else {
            setCurrentElement(["none", 0, {}])
        }
        makeBorderBoxInvisible();
        elementsLength.current -= 1;
    }

    function moveCurrentElement(direction: string) {
        const currentIdx: number = currentElement[1];
        let index: number = 0;
        if (direction === "up") {
            //up
            if (currentIdx === 0 || currentElement[0] === "none") return;
            index = -1
        } else {
            //down
            if (currentIdx === elementsLength.current - 1 || currentElement[0] === "none") return;
            index = 1
        }
        const newHTML = [...html];
        const newElements = [...elements];
        const newStyle = [...style];
        const newStyleIdx = newStyle.indexOf(`#_${currentIdx}`);
        const newStyleIdx2 = newStyle.indexOf(`#_${currentIdx + index}`);
        const newStyleContent = newStyle[newStyleIdx + 1];
        const newStyleContent2 = newStyle[newStyleIdx2 + 1];
        newStyle[newStyleIdx + 1] = newStyleContent2;
        newStyle[newStyleIdx2 + 1] = newStyleContent;
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
        if (direction === "up") {
            newElements[currentIdx][1] += 1;
            newElements[currentIdx + index][1] -= 1;
        } else {
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
        setElements([...elements, ["Paragraph", HTMLPosition.length - 1, { "text": "Paragraph" }]])
        elementsLength.current += 1;
        setHtml(newHTML);
    }

    const handleDownload = () => {
        const element = document.createElement("a");
        const iframe = document.querySelector("iframe");
        if(!iframe?.contentDocument?.documentElement.innerHTML) return;
        const Iframehtml: string = iframe?.contentDocument?.documentElement.innerHTML;
        const file = new Blob([Iframehtml], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "index.html";
        document.body.appendChild(element);
        element.click();
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
                    <button className="download-html" onClick={ () => handleDownload()}>Download HTML File</button>
                </div>
            </Draggable>
            <div className="custom-border">
                <div className="custom-border-relative">
                    <CustomSize currentElement={currentElement} changeStyle={changeStyle} />
                    <CustomMargin currentElement={currentElement} changeStyle={changeStyle} />
                    <CustomPadding currentElement={currentElement} changeStyle={changeStyle} />
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