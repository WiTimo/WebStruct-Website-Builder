import "./Headline.styles.scss";
import { useEffect } from "react"

export default function Headline({ style, setStyle, html, setHtml, index, isHeadline, elements, setElements }) {

    function changeH1Text(e: any) {
        const newHTML = [...html];
        newHTML[2][1][index][1] = e.target.value;
        setHtml(newHTML);
    }

    function changeAlign(align: string) {
        const newStyle = [...style];
        const styleIdxArray = newStyle[newStyle.indexOf(`#_${index}`) + 1];
        if (styleIdxArray.includes(`text-align: ${align};`)) return;
        styleIdxArray.push(`text-align: ${align};`);
        let j = 0;
        for (let i of styleIdxArray) {
            if (i.includes("text-align:") && i !== `text-align: ${align};`) {
                styleIdxArray.splice(j, 1)
            }
            j++;
        }
        setStyle(newStyle);
    }

    return (
        <div className="elements-container">
            <label htmlFor="id-input">Text: </label>
            <input className="style-input" id="id-input" name="id-input" placeholder={isHeadline ? "Headline" : "Text"} onChange={(e) => changeH1Text(e)} />
            <div className="headline-align-container align-container">
                <button className="align-button align-button-left" onClick={() => changeAlign("left")}>Left</button>
                <button className="align-button align-button-center" onClick={() => changeAlign("center")}>Center</button>
                <button className="align-button align-button-right" onClick={() => changeAlign("right")}>Right</button>
            </div>
        </div>
    )
}