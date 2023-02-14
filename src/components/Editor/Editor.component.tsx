import { useEffect, useState, useRef } from "react";
import "./Editor.styles.scss";
//imports
import Section_1 from "../Sections/Section_1.component";
import Section_2 from "../Sections/Section_2.component";
import Border from "../Sections/Border.component";
import MobileSections from "../Sections/MobileSections.component";


interface DefaultDomElement{
    style: string,
}

export default function Editor() {

    //default html and style, for the beginning
    const defaultHtml = ["<html>", ["<head>", ["<style>", "", "</style>"], "</head>"], ["<body>", [], "</body>"], "</html>"];
    const defaultStyle = ["*", ["margin: 0;", "padding: 0;", "box-sizing: border-box;", "overflow-x: hidden;", "z-index: 100;"], "body", ["background-color: white;"]]

    const [html, setHtml] = useState<string[][][]>(defaultHtml);
    const [style, setStyle] = useState(defaultStyle);
    const [elements, setElements] = useState([]);
    const [currentElement, setCurrentElement] = useState(["none", 0, {}]);
    const [mouseMoving, setMouseMoving] = useState(false);
    const [mousePosition, setMousePosition] = useState([0, 0]);
    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const elementsLength = useRef(0);
    const [mobile, setMobile] = useState(false);


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
            const elementRect = element.getBoundingClientRect();
            element.addEventListener("pointerenter", () => {
                customBorder.style = `left: ${elementRect.left}px; top: ${elementRect.top}px; width: ${elementRect.width + 2}px; height: ${elementRect.height + 2}px; opacity: 1;`;
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


    useEffect(() => {
        window.addEventListener("resize", () => {
            if(window.innerWidth < 650){
                setMobile(true);
            }else{
                setMobile(false);
            }
        })
        if(window.innerWidth < 650){
            setMobile(true);
        }
    },[])

    return (
        <div className="editor-container">
        <iframe className="website-showcase-iframe" sandbox="allow-same-origin allow-scripts" frameBorder="0" />
            {!mobile ? 
            <>
            <Section_1 
            elements={elements} 
            setCurrentElement={setCurrentElement} 
            setElements={setElements} 
            html={html} 
            setHtml={setHtml} 
            style={style} 
            setStyle={setStyle} 
            elementsLength={elementsLength} 
            currentElement={currentElement} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}
        />
        <Border 
            currentElement={currentElement} 
            changeStyle={changeStyle}
        />
        <Section_2
            element={currentElement[0]} 
            index={currentElement[1]} 
            object={currentElement[2]} 
            changeStyle={changeStyle} 
            resetStyle={resetStyle} 
            changeText={changeText} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}
        />
        </>
        : 
        <MobileSections 
        elements={elements} 
        setCurrentElement={setCurrentElement} 
        setElements={setElements} 
        html={html} 
        setHtml={setHtml} 
        style={style} 
        setStyle={setStyle} 
        elementsLength={elementsLength} 
        currentElement={currentElement} 
        makeBorderBoxInvisible={makeBorderBoxInvisible}
        index={currentElement[1]}
        object={currentElement[2]}
        changeStyle={changeStyle}
        resetStyle={resetStyle}
        changeText={changeText}
        element={currentElement[0]}
        />
        }
            
        </div>
    )
}