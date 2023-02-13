

export default function Width({object, changeStyle, resetStyle, customBorder}){



    return(
        <div className="width-container">
            <div className="width-range-container">
                <label htmlFor="width">Width: </label>
                <input 
                    id="width-range" 
                    name="width"
                    type="range" 
                    className="std-range"
                    value={object["width"] ? object["width"][0] : "100"} 
                    onChange={(e) => changeStyle("width", `${e.target.value}`, 
                        document.querySelector("#width-unit-dropdown")?.value, true)} 
                    onBlur={() => customBorder()}/>
            </div>
            <div className="width-input-container">
                <input  
                    id="width" 
                    name="width" 
                    type="number" 
                    min={0}
                    className="std-input"
                    value={object["width"] ? object["width"][0] : "100"} 
                    onChange={(e) => changeStyle("width", `${e.target.value}`, 
                        document.querySelector("#width-unit-dropdown")?.value, true)} 
                    onBlur={() => customBorder()}/>
                <select 
                    name="width" 
                    id="width-unit-dropdown" 
                    className="std-dropdown"
                    value={object["width"] ? object["width"][1] : "vw"} 
                    onChange={(e) => changeStyle("width", `${document.querySelector("#width")?.value}`, 
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
            <button className="std-input width-reset-button" onClick={() => resetStyle("width")}>Reset</button>
            </div>
        </div>
    )
}