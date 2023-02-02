

export default function FontSize({object, changeStyle}){
    return(
        <div className="font-size-container">
            <label htmlFor="font-size">Font-Size: </label>
            <input id="font-size-range" name="font-size" type="range" value={object["font-size"] ? object["font-size"][0] : "32"} onChange={(e) => changeStyle("font-size", `${e.target.value}`, document.querySelector("#font-size-unit-dropdown").value, true)} />
            <input id="font-size" name="font-size" value={object["font-size"] ? object["font-size"][0] : "32"} onChange={(e) => changeStyle("font-size", `${e.target.value}`, document.querySelector("#font-size-unit-dropdown").value, true)} />
            <select name="font-size" id="font-size-unit-dropdown" value={object["font-size"] ? object["font-size"][1] : "px"} onChange={(e) => changeStyle("font-size", `${document.querySelector("#font-size").value}`, e.target.value, true)}>
                <option value="px">px</option>
                <option value="pt">pt</option>
                <option value="%">%</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
                <option value="vw">vw</option>
                <option value="vh">vh</option>
            </select>
        </div>
    )
}
