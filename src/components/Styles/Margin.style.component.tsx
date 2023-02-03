

export default function Margin({object, changeStyle, resetStyle}){

    function resetMargin(){
        resetStyle("margin-left");
        resetStyle("margin-top");
        resetStyle("margin-right");
        resetStyle("margin-bottom");
    }

    return(
        <div className="margin-container">
            <div className="margin-left-options">
                        <label htmlFor="margin-left">Left: </label>
                        <input id="margin-left-range" name="margin-left" type="range" value={object["margin-left"] ? object["margin-left"][0] : "0"} onChange={(e) => changeStyle("margin-left", `${e.target.value}`, document.querySelector("#margin-left-unit-dropdown").value, true)} />
                        <input id="margin-left" name="margin-left" value={object["margin-left"] ? object["margin-left"][0] : "0"} onChange={(e) => changeStyle("margin-left", `${e.target.value}`, document.querySelector("#margin-left-unit-dropdown").value, true)} />
                        <select name="margin-left" id="margin-left-unit-dropdown" value={object["margin-left"] ? object["margin-left"][1] : "vw"} onChange={(e) => changeStyle("margin-left", `${document.querySelector("#margin-left").value}`, e.target.value, true)}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="margin-top-options">
                    <label htmlFor="margin-top">Top: </label>
                        <input id="margin-top-range" name="margin-top" type="range" value={object["margin-top"] ? object["margin-top"][0] : "0"} onChange={(e) => changeStyle("margin-top", `${e.target.value}`, document.querySelector("#margin-top-unit-dropdown").value, true)} />
                        <input id="margin-top" name="margin-top" value={object["margin-top"] ? object["margin-top"][0] : "0"} onChange={(e) => changeStyle("margin-top", `${e.target.value}`, document.querySelector("#margin-top-unit-dropdown").value, true)} />
                        <select name="margin-top" id="margin-top-unit-dropdown" value={object["margin-top"] ? object["margin-top"][1] : "vh"} onChange={(e) => changeStyle("margin-top", `${document.querySelector("#margin-top").value}`, e.target.value, true)}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="margin-right-options">
                        <label htmlFor="margin-right">Right: </label>
                        <input id="margin-right-range" name="margin-right" type="range" value={object["margin-right"] ? object["margin-right"][0] : "0"} onChange={(e) => changeStyle("margin-right", `${e.target.value}`, document.querySelector("#margin-right-unit-dropdown").value, true)} />
                        <input id="margin-right" name="margin-right" value={object["margin-right"] ? object["margin-right"][0] : "0"} onChange={(e) => changeStyle("margin-right", `${e.target.value}`, document.querySelector("#margin-right-unit-dropdown").value, true)} />
                        <select name="margin-right" id="margin-right-unit-dropdown" value={object["margin-right"] ? object["margin-right"][1] : "vw"} onChange={(e) => changeStyle("margin-right", `${document.querySelector("#margin-right").value}`, e.target.value, true)}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="margin-bottom-options">
                    <label htmlFor="margin-bottom">Bottom: </label>
                        <input id="margin-bottom-range" name="top" type="range" value={object["margin-bottom"] ? object["margin-bottom"][0] : "0"} onChange={(e) => changeStyle("margin-bottom", `${e.target.value}`, document.querySelector("#margin-bottom-unit-dropdown").value, true)} />
                        <input id="margin-bottom" name="margin-bottom" value={object["margin-bottom"] ? object["margin-bottom"][0] : "0"} onChange={(e) => changeStyle("margin-bottom", `${e.target.value}`, document.querySelector("#margin-bottom-unit-dropdown").value, true)} />
                        <select name="margin-bottom" id="margin-bottom-unit-dropdown" value={object["margin-bottom"] ? object["margin-bottom"][1] : "vh"} onChange={(e) => changeStyle("margin-bottom", `${document.querySelector("#margin-bottom").value}`, e.target.value, true)}>
                            <option value="px">px</option>
                            <option value="pt">pt</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <button id="margin-reset" onClick={() => resetMargin()}>Reset</button>
        </div>
    )
}