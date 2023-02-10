import { useState } from "react";

export default function Border({object, changeStyle, resetStyle}){

    const [borderWidth, setBorderWidth] = useState(object["border"] ? object["border"][0] : "0");
    const [borderStyle, setBorderStyle] = useState(object["border"] ? object["border"][1] : "solid");
    const [borderColor, setBorderColor] = useState(object["border"] ? object["border"][2] : "#000000");



    return(
        <div className="border-container">
            <label htmlFor="border">Border: </label>
                <div className="border-options">
                    <label htmlFor="border-width">Width: </label>
                    <input 
                        id="border-width" 
                        name="border-width" 
                        type="range" 
                        min={0} 
                        max={10} 
                        value={borderWidth} 
                        onChange={(e) => {setBorderWidth(e.target.value); 
                            changeStyle("border", `${e.target.value}px ${borderStyle} ${borderColor}`)}} />
                    <input 
                        id="border-width" 
                        name="border-width" 
                        type="number" 
                        value={borderWidth} 
                        onChange={(e) => {setBorderWidth(e.target.value); 
                            changeStyle("border", `${e.target.value}px ${borderStyle} ${borderColor}`)}} />
                    <label htmlFor="border-style">Style: </label>
                    <select 
                        id="border-style" 
                        name="border-style" 
                        value={borderStyle} 
                        onChange={(e) => {setBorderStyle(e.target.value); 
                            changeStyle("border", `${borderWidth}px ${e.target.value} ${borderColor}`)}}>
                        <option value="solid">solid</option>
                        <option value="dotted">dotted</option>
                        <option value="dashed">dashed</option>
                        <option value="double">double</option>
                    </select>
                    <label htmlFor="border-color">Color: </label>
                    <input 
                        id="border-color" 
                        name="border-color" 
                        type="color" 
                        value={borderColor} 
                        onChange={(e) => {setBorderColor(e.target.value); 
                            changeStyle("border", `${borderWidth}px ${borderStyle} ${e.target.value}`)}} />
                </div>
        </div>
    )
}