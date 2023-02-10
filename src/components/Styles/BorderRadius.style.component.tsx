
export default function BorderRadius({object, changeStyle}){
    return(
        <div className="border-radius-container">
            <label htmlFor="border-radius">Roundness: </label>
            <input 
                id="border-radius-range" 
                name="border-radius" 
                type="range" 
                value={object["border-radius"] ? object["border-radius"][0] : "0"} 
                onChange={(e) => changeStyle("border-radius", `${e.target.value}`, 
                    document.querySelector("#border-radius-unit-dropdown").value, true)} />
            <input 
                id="border-radius" 
                name="border-radius" 
                type="number" 
                value={object["border-radius"] ? object["border-radius"][0] : "0"} 
                onChange={(e) => changeStyle("border-radius", `${e.target.value}`, 
                    document.querySelector("#border-radius-unit-dropdown").value, true)} />
            <select 
                name="border-radius" 
                id="border-radius-unit-dropdown" 
                value={object["border-radius"] ? object["border-radius"][1] : "px"} 
                onChange={(e) => changeStyle("border-radius", `${document.querySelector("#border-radius").value}`, 
                    e.target.value, true)}>
                <option value="px">px</option>
                <option value="%">%</option>
            </select>
        </div>
    )
}