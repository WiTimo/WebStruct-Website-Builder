import { useState, useEffect } from "react";


export default function Position({object, changeStyle, resetStyle}){


    const [checked, setChecked] = useState(false)


    function changeHandler(e: any){
        if(e.target.checked){
            changeStyle("position", "absolute"); 
            setChecked(true);

        }else{
            resetStyle("position")
            setChecked(false)
        }
    }

    return(
        <div className="position-container">
            <label htmlFor="position">Position: </label>
            <select 
                id="position" 
                name="position" 
                value={object["position"] ? object["position"] : "static"} 
                onChange={(e) => changeStyle("position", 
                    e.target.value)}>
                <option value="static">static</option>
                <option value="relative">relative</option>
                <option value="absolute">absolute</option>
                <option value="fixed">fixed</option>
                <option value="sticky">sticky</option>
            </select>
            <div>Position absolute/fixed/sticky needed</div>
                <div className="absolute-options">
                    <div className="absolute-left-options">
                        <label htmlFor="left">X-Axis: </label>
                        <input 
                            id="left-range" 
                            name="left" 
                            type="range" 
                            value={object["left"] ? object["left"][0] : "0"} 
                            onChange={(e) => changeStyle("left", `${e.target.value}`, 
                                document.querySelector("#left-unit-dropdown").value, true)} />
                        <input 
                            id="left" 
                            name="left" 
                            type="number" 
                            value={object["left"] ? object["left"][0] : "0"} 
                            onChange={(e) => changeStyle("left", `${e.target.value}`, 
                                document.querySelector("#left-unit-dropdown").value, true)} />
                        <select 
                            name="left" 
                            id="left-unit-dropdown" 
                            value={object["left"] ? object["left"][1] : "vw"} 
                            onChange={(e) => changeStyle("left", `${document.querySelector("#left").value}`, 
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
                    <div className="absolute-top-options">
                    <label htmlFor="top">Y-Axis: </label>
                        <input 
                            id="top-range" 
                            name="top" 
                            type="range" 
                            value={object["top"] ? object["top"][0] : "0"} 
                            onChange={(e) => changeStyle("top", `${e.target.value}`, 
                                document.querySelector("#top-unit-dropdown").value, true)} />
                        <input 
                            id="top" 
                            name="top" 
                            type="number" 
                            value={object["top"] ? object["top"][0] : "0"} 
                            onChange={(e) => changeStyle("top", `${e.target.value}`, 
                                document.querySelector("#top-unit-dropdown").value, true)} />
                        <select 
                            name="top" 
                            id="top-unit-dropdown" 
                            value={object["top"] ? object["top"][1] : "vh"} 
                            onChange={(e) => changeStyle("top", `${document.querySelector("#top").value}`, 
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
    )
}