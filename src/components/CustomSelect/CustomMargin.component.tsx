import {useState} from "react"

export default function CustomMargin({currentElement, changeStyle}){

    const [moving, setMoving] = useState(false);
    const [holding, setHolding] = useState(false);
    const [margin, setMargin] = useState([0, 0, 0, 0]);

    function onPointerMoveMargin(e: any, direction: string) {
        let dot;
        if (direction === "top") dot = document.querySelector(".margin-border-top-dot");
        else if (direction === "bottom") dot = document.querySelector(".margin-border-bottom-dot");
        else if (direction === "left") dot = document.querySelector(".margin-border-left-dot");
        else dot = document.querySelector(".margin-border-right-dot");
        dot?.setPointerCapture(e.pointerId);
        const Iframe = document.querySelector("iframe");
        if (!Iframe) return;
        const IframeDocument = Iframe.contentDocument;
        if (!IframeDocument) return;
        const element = IframeDocument.querySelector(`#_${currentElement[1]}`);
        if (!element) return;
        const elementRect = element.getBoundingClientRect();
        if (holding) {
            setHolding(false);
            setMargin([element.getBoundingClientRect().top, element.getBoundingClientRect().bottom, element.getBoundingClientRect().left, element.getBoundingClientRect().right])
        }
        if (moving) {
            const marginMarker = document.querySelector(".custom-border-margin-marker");
            if (!marginMarker) return;
            if (direction === "top") {
                setMarginDotPosition("top", e.pageY - margin[0]);
                marginMarker.style = `bottom: ${element.clientHeight}px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["margin-top"][0]}${currentElement[2]["margin-top"][1]}; opacity: 1;`
            }
            else if (direction === "bottom") {
                setMarginDotPosition("bottom", e.pageY - margin[1])
                marginMarker.style = `top: ${element.clientHeight}px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["margin-bottom"][0]}${currentElement[2]["margin-bottom"][1]}; opacity: 1;`
            }
            else if (direction === "left") {
                setMarginDotPosition("left", e.pageX - margin[2])
                marginMarker.style = `top: 0px; left: 0px; width: ${currentElement[2]["margin-left"][0]}${currentElement[2]["margin-left"][1]}; height: ${elementRect.height}px; opacity: 1; transform: translateX(${currentElement[2]["margin-left"][0] * -1}${currentElement[2]["margin-left"][1]})`
            }
            else {
                setMarginDotPosition("right", margin[3] - e.pageX)
                marginMarker.style = `top: 0px; left: ${element.clientWidth}px; width: ${currentElement[2]["margin-right"][0]}${currentElement[2]["margin-right"][1]}; height: ${elementRect.height}px; opacity: 1;`
            };
        }
    }

    function setMarginDotPosition(css: string, position: number) {
        if (css === "top") changeStyle("margin-top", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2])
        else if (css === "bottom") changeStyle("margin-bottom", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2]);
        else if (css === "left") changeStyle("margin-left", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
        else changeStyle("margin-right", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
    }

    return(
        <>
        <div className="custom-border-dot custom-margin-dot custom-border-top-dot margin-border-top-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "top")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-margin-dot custom-border-top-inner-dot margin-border-top-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "top")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-margin-dot custom-border-right-dot margin-border-right-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "right")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-margin-dot custom-border-right-inner-dot margin-border-right-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "right")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-margin-dot custom-border-left-dot margin-border-left-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "left")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-margin-dot custom-border-left-inner-dot margin-border-left-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "left")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-margin-dot custom-border-bottom-dot margin-border-bottom-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "bottom")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-margin-dot custom-border-bottom-inner-dot margin-border-bottom-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMoveMargin(e, "bottom")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-margin-marker" />
        </>
    )
}