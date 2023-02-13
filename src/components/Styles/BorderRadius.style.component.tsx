
export default function BorderRadius({object, changeStyle}){
    return(
        <div className="border-radius-container">
            <div className="border-radius-range">
                <label htmlFor="border-radius">Radius: </label>
                <input 
                    id="border-radius-range" 
                    name="border-radius" 
                    type="range" 
                    className="std-range"
                    value={object["border-radius"] ? object["border-radius"][0] : "0"} 
                    onChange={(e) => changeStyle("border-radius", `${e.target.value}`, 
                        document.querySelector("#border-radius-unit-dropdown")?.value, true)} />
            </div>
            <div className="border-radius-input">
                <input 
                    id="border-radius" 
                    name="border-radius" 
                    type="number" 
                    min={0}
                    className="std-input"
                    value={object["border-radius"] ? object["border-radius"][0] : "0"} 
                    onChange={(e) => changeStyle("border-radius", `${e.target.value}`, 
                        document.querySelector("#border-radius-unit-dropdown")?.value, true)} />
                <select 
                    name="border-radius" 
                    id="border-radius-unit-dropdown" 
                    className="std-dropdown"
                    value={object["border-radius"] ? object["border-radius"][1] : "px"} 
                    onChange={(e) => changeStyle("border-radius", `${document.querySelector("#border-radius")?.value}`, 
                        e.target.value, true)}>
                    <option value="px">px</option>
                    <option value="%">%</option>
                </select>
            </div>
        </div>
    )
}