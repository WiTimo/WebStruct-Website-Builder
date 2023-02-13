

export default function FontSize({object, changeStyle, standard = "32"}){
    return(
        <div className="font-size-container">
            <div className="font-size-section-1">
                <label htmlFor="font-size">Font-Size: </label>
                <input 
                    id="font-size-range" 
                    name="font-size" 
                    type="range" 
                    className="std-range"
                    value={object["font-size"] ? object["font-size"][0] : standard} 
                    onChange={(e) => changeStyle("font-size", `${e.target.value}`, 
                        document.querySelector("#font-size-unit-dropdown")?.value, true)} />
            </div>
            <div className="font-size-section-2">
                <input 
                    id="font-size" 
                    name="font-size" 
                    type="number" 
                    className="std-input"
                    min={0}
                    value={object["font-size"] ? object["font-size"][0] : standard} 
                    onChange={(e) => changeStyle("font-size", `${e.target.value}`, 
                        document.querySelector("#font-size-unit-dropdown")?.value, true)} />
                <select 
                    name="font-size" 
                    id="font-size-unit-dropdown" 
                    className="std-dropdown"
                    value={object["font-size"] ? object["font-size"][1] : "px"} 
                    onChange={(e) => changeStyle("font-size", `${document.querySelector("#font-size")?.value}`, 
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
    )
}
