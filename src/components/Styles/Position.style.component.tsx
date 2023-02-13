import { useState, useEffect } from "react";


export default function Position({object, changeStyle, resetStyle}){

    function changeHandler(e: any){
        changeStyle("position", e.target.value);
        if(e.target.value === "absolute"){
            changeStyle("top", "0", "vh", true);
            changeStyle("left", "0", "vw", true);
        }
    }



    return(
        <div className="position-container">
            <div className="position-select-container">
                <label htmlFor="position">Position: </label>
                <select 
                    id="position" 
                    name="position" 
                    className="std-input"
                    value={object["position"] ? object["position"] : "static"} 
                    onChange={(e) => changeHandler(e)}>
                    <option value="static">static</option>
                    <option value="relative">relative</option>
                    <option value="absolute">absolute</option>
                    <option value="fixed">fixed</option>
                    <option value="sticky">sticky</option>
                </select>
            </div>
            <div className="absolute-options">
                <div className="absolute-left-options">
                    <div className="ablsolute-left-options-range">
                        <label htmlFor="left">X-Axis: </label>
                        <input 
                            id="left-range" 
                            name="left" 
                            className="std-range"
                            type="range" 
                            value={object["left"] ? object["left"][0] : "0"} 
                            onChange={(e) => changeStyle("left", `${e.target.value}`, 
                                document.querySelector("#left-unit-dropdown")?.value, true)} />
                    </div>
                    <div className="absolute-left-options-input">
                        <input 
                            id="left" 
                            name="left" 
                            type="number" 
                            min={0}
                            className="std-input"
                            value={object["left"] ? object["left"][0] : "0"} 
                            onChange={(e) => changeStyle("left", `${e.target.value}`, 
                                document.querySelector("#left-unit-dropdown")?.value, true)} />
                        <select 
                            name="left" 
                            id="left-unit-dropdown" 
                            className="std-dropdown"
                            value={object["left"] ? object["left"][1] : "vw"} 
                            onChange={(e) => changeStyle("left", `${document.querySelector("#left")?.value}`, 
                                e.target.value, true)}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                </div>
                <div className="absolute-top-options">
                    <div className="absolute-top-options-range">
                        <label htmlFor="top">Y-Axis: </label>
                        <input 
                            id="top-range" 
                            name="top" 
                            type="range" 
                            className="std-range"
                            value={object["top"] ? object["top"][0] : "0"} 
                            onChange={(e) => changeStyle("top", `${e.target.value}`, 
                                document.querySelector("#top-unit-dropdown")?.value, true)} />
                    </div>
                    <div className="absolute-top-options-input">
                        <input 
                            id="top" 
                            name="top"
                            type="number" 
                            min={0}
                            className="std-input"
                            value={object["top"] ? object["top"][0] : "0"} 
                            onChange={(e) => changeStyle("top", `${e.target.value}`, 
                                document.querySelector("#top-unit-dropdown")?.value, true)} />
                        <select 
                            name="top" 
                            id="top-unit-dropdown" 
                            className="std-dropdown"
                            value={object["top"] ? object["top"][1] : "vh"} 
                            onChange={(e) => changeStyle("top", `${document.querySelector("#top")?.value}`, 
                                e.target.value, true)}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}