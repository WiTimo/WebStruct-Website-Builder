

export default function Margin({object, changeStyle, resetStyle, customBorder}){

    function resetMargin(){
        resetStyle("margin-left");
        resetStyle("margin-top");
        resetStyle("margin-right");
        resetStyle("margin-bottom");
    }

    return(
        <div className="margin-container">
            <p className="margin-indicator">Margin</p>
            <div className="margin-options margin-left-options">
                <div className="margin-range margin-left-range">
                    <label htmlFor="margin-left">Left: </label>
                    <input 
                        id="margin-left-range" 
                        name="margin-left" 
                        type="range" 
                        className="std-range"
                        value={object["margin-left"] ? object["margin-left"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-left", `${e.target.value}`, 
                            document.querySelector("#margin-left-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
                <div className="margin-input margin-left-input">
                    <input 
                        id="margin-left" 
                        name="margin-left" 
                        type="number"
                        min={0}
                        className="std-input"
                        value={object["margin-left"] ? object["margin-left"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-left", `${e.target.value}`, 
                            document.querySelector("#margin-left-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="margin-left" 
                        id="margin-left-unit-dropdown" 
                        className="std-dropdown"
                        value={object["margin-left"] ? object["margin-left"][1] : "vw"} 
                        onChange={(e) => changeStyle("margin-left", `${document.querySelector("#margin-left")?.value}`, 
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
            <div className="margin-options margin-top-options">
                <div className="margin-range margin-top-range">
                    <label htmlFor="margin-top">Top: </label>
                    <input 
                        id="margin-top-range" 
                        name="margin-top" 
                        type="range" 
                        className="std-range"
                        value={object["margin-top"] ? object["margin-top"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-top", `${e.target.value}`, 
                            document.querySelector("#margin-top-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
                <div className="margin-input margin-top-input">
                    <input 
                        id="margin-top" 
                        name="margin-top" 
                        type="number" 
                        min={0}
                        className="std-input"

                        value={object["margin-top"] ? object["margin-top"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-top", `${e.target.value}`, 
                            document.querySelector("#margin-top-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="margin-top" 
                        id="margin-top-unit-dropdown" 
                        className="std-dropdown"
                        value={object["margin-top"] ? object["margin-top"][1] : "vh"} 
                        onChange={(e) => changeStyle("margin-top", `${document.querySelector("#margin-top")?.value}`, 
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
            <div className="margin-options margin-right-options">
                <div className="margin-range margin-right-range">
                    <label htmlFor="margin-right">Right: </label>
                    <input 
                        id="margin-right-range" 
                        name="margin-right" 
                        type="range" 
                        className="std-range"
                        value={object["margin-right"] ? object["margin-right"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-right", `${e.target.value}`, 
                            document.querySelector("#margin-right-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
                <div className="margin-input margin-right-input">
                    <input 
                        id="margin-right" 
                        name="margin-right" 
                        type="number" 
                        min={0}
                        className="std-input"
                        value={object["margin-right"] ? object["margin-right"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-right", `${e.target.value}`, 
                            document.querySelector("#margin-right-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="margin-right" 
                        id="margin-right-unit-dropdown" 
                        className="std-dropdown"
                        value={object["margin-right"] ? object["margin-right"][1] : "vw"} 
                        onChange={(e) => changeStyle("margin-right", `${document.querySelector("#margin-right")?.value}`, 
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
            <div className="margin-options margin-bottom-options">
                <div className="margin-range margin-bottom-range">
                    <label htmlFor="margin-bottom">Bottom: </label>
                    <input 
                        id="margin-bottom-range" 
                        name="top" 
                        type="range" 
                        className="std-range"
                        value={object["margin-bottom"] ? object["margin-bottom"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-bottom", `${e.target.value}`, 
                            document.querySelector("#margin-bottom-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                </div>
                <div className="margin-input margin-bottom-input">
                    <input 
                        id="margin-bottom" 
                        name="margin-bottom" 
                        type="number" 
                        min={0}
                        className="std-input"
                        value={object["margin-bottom"] ? object["margin-bottom"][0] : "0"} 
                        onChange={(e) => changeStyle("margin-bottom", `${e.target.value}`, 
                            document.querySelector("#margin-bottom-unit-dropdown")?.value, true)} 
                        onBlur={() => customBorder()} />
                    <select 
                        name="margin-bottom" 
                        id="margin-bottom-unit-dropdown" 
                        className="std-dropdown"
                        value={object["margin-bottom"] ? object["margin-bottom"][1] : "vh"} 
                        onChange={(e) => changeStyle("margin-bottom", `${document.querySelector("#margin-bottom")?.value}`, 
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
            <div className="margin-reset-button-container">
                <button className="std-button" id="margin-reset" onClick={() => resetMargin()}>Reset</button>
            </div>
        </div>
    )
}