import {useState} from "react";

export default function CustomPadding({currentElement, changeStyle}){


    const [padding, setPadding] = useState([0, 0, 0, 0]);
    const [moving, setMoving] = useState(false);
    const [holding, setHolding] = useState(false);

    function onPointerMovePadding(e: any, direction: string) {
        let dot;
        if (direction === "top") dot = document.querySelector(".padding-border-top-dot");
        else if (direction === "bottom") dot = document.querySelector(".padding-border-bottom-dot");
        else if (direction === "left") dot = document.querySelector(".padding-border-left-dot");
        else dot = document.querySelector(".padding-border-right-dot");
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
            setPadding([elementRect.top, elementRect.bottom, elementRect.left, elementRect.right])
        }
        if (moving) {
            const paddingMarker = document.querySelector(".custom-border-padding-marker");
            if (!paddingMarker) return;
            if (direction === "top") {
                setPaddingDotPosition("top", e.pageY - padding[0])
                paddingMarker.style = `top: 0px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["padding-top"][0]}${currentElement[2]["padding-top"][1]}; opacity: 1;`
            }
            else if (direction === "bottom") {
                setPaddingDotPosition("bottom", e.pageY - padding[1])
                paddingMarker.style = `bottom: 0px; left: ${elementRect.left}px; width: ${elementRect.width}px; height: ${currentElement[2]["padding-bottom"][0]}${currentElement[2]["padding-bottom"][1]}; opacity: 1;`
            }
            else if (direction === "left") {
                setPaddingDotPosition("left", e.pageX - padding[2])
                paddingMarker.style = `top: 0px; left: 0px; width: ${currentElement[2]["padding-left"][0]}${currentElement[2]["padding-left"][1]}; height: ${elementRect.height}px; opacity: 1;`
            }
            else {
                setPaddingDotPosition("right", padding[3] - e.pageX)
                paddingMarker.style = `top: 0px; right: 0px; width: ${currentElement[2]["padding-right"][0]}${currentElement[2]["padding-right"][1]}; height: ${elementRect.height}px; opacity: 1;`
            }
        }
    }

    function setPaddingDotPosition(css: string, position: number) {
        if (css === "top") changeStyle("padding-top", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2])
        else if (css === "bottom") changeStyle("padding-bottom", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2]);
        else if (css === "left") changeStyle("padding-left", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
        else changeStyle("padding-right", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
    }

    return(
        <>
        <div className="custom-border-dot custom-padding-dot custom-border-top-dot padding-border-top-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "top")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-padding-dot custom-border-top-inner-dot padding-border-top-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "top")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-padding-dot custom-border-right-dot padding-border-right-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "right")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-padding-dot custom-border-right-inner-dot padding-border-right-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "right")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-padding-dot custom-border-left-dot padding-border-left-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "left")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-padding-dot custom-border-left-inner-dot padding-border-left-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "left")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-padding-dot custom-border-bottom-dot padding-border-bottom-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "bottom")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-dot custom-padding-dot custom-border-bottom-inner-dot padding-border-bottom-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMovePadding(e, "bottom")} 
            onPointerUp={() => { setMoving(false); setHolding(true) }} />
        <div className="custom-border-padding-marker" />
        </>
    )
}