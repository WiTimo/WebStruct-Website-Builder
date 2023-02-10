import {useState, useEffect} from "react";

export default function Height({object, changeStyle, resetStyle, customBorder}){

    return(
        <div className="height-container">
            <label htmlFor="height">Height: </label>
            <input 
                id="height-range" 
                name="height" 
                type="range" 
                value={object["height"] ? object["height"][0] : "10"} 
                onChange={(e) => changeStyle("height", `${e.target.value}`, 
                    document.querySelector("#height-unit-dropdown").value, true)} 
                onBlur={() => customBorder()}/>
            <input 
                id="height" 
                name="height" 
                type="number" 
                value={object["height"] ? object["height"][0] : "10"} 
                onChange={(e) => changeStyle("height", `${e.target.value}`, 
                    document.querySelector("#height-unit-dropdown").value, true)} 
                onBlur={() => customBorder()} />
            <select 
                name="height" 
                id="height-unit-dropdown" 
                value={object["height"] ? object["height"][1] : "vh"} 
                onChange={(e) => changeStyle("height", `${document.querySelector("#height").value}`, 
                    e.target.value, true)} 
                onBlur={() => customBorder()} >
                <option value="px">px</option>
                <option value="pt">pt</option>
                <option value="%">%</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
                <option value="vw">vw</option>
                <option value="vh">vh</option>
            </select>
            <button id="height-reset" onClick={() => resetStyle("height")}>Reset</button>
        </div>

    )
}