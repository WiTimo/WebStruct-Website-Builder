import {useState} from "react"

export default function CustomSize({currentElement, changeStyle}){

    const [moving, setMoving] = useState(false);

    function onPointerMove(e: any, direction: string) {
        let dot;
        if (direction === "height") dot = document.querySelector(".custom-border-bottom-dot");
        else dot = document.querySelector(".custom-border-right-dot");
        dot?.setPointerCapture(e.pointerId);
        const Iframe = document.querySelector("iframe");
        if (!Iframe) return;
        const IframeDocument = Iframe.contentDocument;
        if (!IframeDocument) return;
        const element = IframeDocument.querySelector(`#_${currentElement[1]}`);
        if (!element) return;
        if (moving) {
            if (direction === "height") setDotPosition("height", e.pageY - element.getBoundingClientRect().top);
            else setDotPosition("width", e.pageX - element.getBoundingClientRect().left);
        }
    }

    function setDotPosition(css: string, position: number) {
        if (css === "height") changeStyle("height", Math.round(position / (window.innerHeight / 100)), "vh", true, currentElement[1], currentElement[2])
        else changeStyle("width", Math.round(position / (window.innerWidth / 100)), "vw", true, currentElement[1], currentElement[2]);
    }

    return(
        <>
        <div className="custom-border-dot custom-border-right-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMove(e, "width")} 
            onPointerUp={() => setMoving(false)} />
        <div className="custom-border-dot custom-border-bottom-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMove(e, "height")} 
            onPointerUp={() => setMoving(false)} />
        <div className="custom-border-dot custom-border-right-dot custom-border-inner-dot custom-border-right-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMove(e, "width")} 
            onPointerUp={() => setMoving(false)} />
        <div className="custom-border-dot custom-border-bottom-dot custom-border-inner-dot custom-border-bottom-inner-dot" 
            onPointerDown={() => { setMoving(true) }} 
            onPointerMove={(e) => onPointerMove(e, "height")} 
            onPointerUp={() => setMoving(false)} />
        </>
    )
}