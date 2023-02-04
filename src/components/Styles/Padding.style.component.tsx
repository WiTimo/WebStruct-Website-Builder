

export default function Padding({object, changeStyle, resetStyle , customBorder}){


    function resetPadding(){
        resetStyle("padding-left");
        resetStyle("padding-top");
        resetStyle("padding-right");
        resetStyle("padding-bottom");
    }

    return(
        <div className="padding-container">
            <div className="padding-left-options">
                        <label htmlFor="padding-left">Left: </label>
                        <input id="margin-left-range" name="padding-left" type="range" value={object["padding-left"] ? object["padding-left"][0] : "0"} onChange={(e) => changeStyle("padding-left", `${e.target.value}`, document.querySelector("#padding-left-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <input id="padding-left" name="padding-left" type="number" value={object["padding-left"] ? object["padding-left"][0] : "0"} onChange={(e) => changeStyle("padding-left", `${e.target.value}`, document.querySelector("#padding-left-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <select name="padding-left" id="padding-left-unit-dropdown" value={object["padding-left"] ? object["padding-left"][1] : "vw"} onChange={(e) => changeStyle("padding-left", `${document.querySelector("#padding-left").value}`, e.target.value, true)} onBlur={() => customBorder()}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="padding-top-options">
                    <label htmlFor="padding-top">Top: </label>
                        <input id="padding-top-range" name="padding-top" type="range" value={object["padding-top"] ? object["padding-top"][0] : "0"} onChange={(e) => changeStyle("padding-top", `${e.target.value}`, document.querySelector("#padding-top-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <input id="padding-top" name="padding-top" type="number" value={object["padding-top"] ? object["padding-top"][0] : "0"} onChange={(e) => changeStyle("padding-top", `${e.target.value}`, document.querySelector("#padding-top-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <select name="padding-top" id="padding-top-unit-dropdown" value={object["padding-top"] ? object["padding-top"][1] : "vh"} onChange={(e) => changeStyle("padding-top", `${document.querySelector("#padding-top").value}`, e.target.value, true)} onBlur={() => customBorder()}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="padding-right-options">
                        <label htmlFor="padding-right">Right: </label>
                        <input id="padding-right-range" name="padding-right" type="range" value={object["padding-right"] ? object["padding-right"][0] : "0"} onChange={(e) => changeStyle("padding-right", `${e.target.value}`, document.querySelector("#padding-right-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <input id="padding-right" name="padding-right" type="number" value={object["padding-right"] ? object["padding-right"][0] : "0"} onChange={(e) => changeStyle("padding-right", `${e.target.value}`, document.querySelector("#padding-right-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <select name="padding-right" id="padding-right-unit-dropdown" value={object["padding-right"] ? object["padding-right"][1] : "vw"} onChange={(e) => changeStyle("padding-right", `${document.querySelector("#padding-right").value}`, e.target.value, true)} onBlur={() => customBorder()}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="padding-bottom-options">
                    <label htmlFor="padding-bottom">Bottom: </label>
                        <input id="padding-bottom-range" name="top" type="range" value={object["padding-bottom"] ? object["padding-bottom"][0] : "0"} onChange={(e) => changeStyle("padding-bottom", `${e.target.value}`, document.querySelector("#padding-bottom-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <input id="padding-bottom" name="padding-bottom" type="number" value={object["padding-bottom"] ? object["padding-bottom"][0] : "0"} onChange={(e) => changeStyle("padding-bottom", `${e.target.value}`, document.querySelector("#padding-bottom-unit-dropdown").value, true)} onBlur={() => customBorder()} />
                        <select name="padding-bottom" id="padding-bottom-unit-dropdown" value={object["padding-bottom"] ? object["padding-bottom"][1] : "vh"} onChange={(e) => changeStyle("padding-bottom", `${document.querySelector("#padding-bottom").value}`, e.target.value, true)} onBlur={() => customBorder()}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <button id="padding-reset" onClick={() => resetPadding()}>Reset</button>
        </div>
    )
}