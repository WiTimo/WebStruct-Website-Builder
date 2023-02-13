

export default function Padding({object, changeStyle, resetStyle , customBorder}){


    function resetPadding(){
        resetStyle("padding-left");
        resetStyle("padding-top");
        resetStyle("padding-right");
        resetStyle("padding-bottom");
    }

    return(
        <div className="padding-container">
            <p className="padding-indicator">Padding</p>
            <div className="padding-options padding-left-options">
                <div className="padding-range padding-left-range">
                    <label htmlFor="padding-left">Left: </label>
                    <input 
                        id="margin-left-range" 
                        name="padding-left" 
                        type="range" 
                        className="std-range"
                        value={object["padding-left"] ? object["padding-left"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-left", `${e.target.value}`, 
                            document.querySelector("#padding-left-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
               <div className="padding-input padding-left-input">
                <input 
                        id="padding-left" 
                        name="padding-left" 
                        type="number" 
                        min={0}
                        className="std-input"
                        value={object["padding-left"] ? object["padding-left"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-left", `${e.target.value}`, 
                            document.querySelector("#padding-left-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="padding-left" 
                        id="padding-left-unit-dropdown" 
                        className="std-dropdown"
                        value={object["padding-left"] ? object["padding-left"][1] : "vw"} 
                        onChange={(e) => changeStyle("padding-left", `${document.querySelector("#padding-left")?.value}`, 
                            e.target.value, true)} 
                        onBlur={() => customBorder()}>
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
            <div className="padding-options padding-top-options">
                <div className="padding-range padding-top-range">
                    <label htmlFor="padding-top">Top: </label>
                    <input 
                        id="padding-top-range" 
                        name="padding-top" 
                        type="range" 
                        className="std-range"
                        value={object["padding-top"] ? object["padding-top"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-top", `${e.target.value}`, 
                            document.querySelector("#padding-top-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
                <div className="padding-input padding-top-input">
                    <input 
                        id="padding-top" 
                        name="padding-top" 
                        type="number" 
                        min={0}
                        className="std-input"
                        value={object["padding-top"] ? object["padding-top"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-top", `${e.target.value}`, 
                            document.querySelector("#padding-top-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="padding-top" 
                        id="padding-top-unit-dropdown" 
                        className="std-dropdown"
                        value={object["padding-top"] ? object["padding-top"][1] : "vh"} 
                        onChange={(e) => changeStyle("padding-top", `${document.querySelector("#padding-top")?.value}`, 
                            e.target.value, true)} 
                        onBlur={() => customBorder()}>
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
            <div className="padding-options padding-right-options">
                <div className="padding-range padding-right-range">
                    <label htmlFor="padding-right">Right: </label>
                    <input 
                        id="padding-right-range" 
                        name="padding-right" 
                        type="range" 
                        className="std-range"
                        value={object["padding-right"] ? object["padding-right"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-right", `${e.target.value}`, 
                            document.querySelector("#padding-right-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
                <div className="padding-input paddint-right-input">
                    <input 
                        id="padding-right" 
                        name="padding-right" 
                        type="number" 
                        min={0}
                        className="std-input"
                        value={object["padding-right"] ? object["padding-right"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-right", `${e.target.value}`, 
                            document.querySelector("#padding-right-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="padding-right" 
                        id="padding-right-unit-dropdown" 
                        className="std-dropdown"
                        value={object["padding-right"] ? object["padding-right"][1] : "vw"} 
                        onChange={(e) => changeStyle("padding-right", `${document.querySelector("#padding-right")?.value}`, 
                            e.target.value, true)} 
                        onBlur={() => customBorder()}>
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
            <div className="padding-options padding-bottom-options">
                <div className="padding-range padding-bottom-range">
                    <label htmlFor="padding-bottom">Bottom: </label>
                    <input 
                        id="padding-bottom-range" 
                        name="top" 
                        type="range" 
                        className="std-range"
                        value={object["padding-bottom"] ? object["padding-bottom"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-bottom", `${e.target.value}`, 
                            document.querySelector("#padding-bottom-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
                <div className="padding-input padding-bottom-input">
                    <input 
                        id="padding-bottom" 
                        name="padding-bottom" 
                        type="number" 
                        min={0}
                        className="std-input"
                        value={object["padding-bottom"] ? object["padding-bottom"][0] : "0"} 
                        onChange={(e) => changeStyle("padding-bottom", `${e.target.value}`, 
                            document.querySelector("#padding-bottom-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="padding-bottom" 
                        id="padding-bottom-unit-dropdown" 
                        className="std-dropdown"
                        value={object["padding-bottom"] ? object["padding-bottom"][1] : "vh"} 
                        onChange={(e) => changeStyle("padding-bottom", `${document.querySelector("#padding-bottom")?.value}`, 
                            e.target.value, true)} 
                        onBlur={() => customBorder()}>
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
            <div className="padding-reset-button-container">
                <button className="std-button" id="padding-reset" onClick={() => resetPadding()}>Reset</button>
            </div>
        </div>
    )
}