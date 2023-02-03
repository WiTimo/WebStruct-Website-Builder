

export default function FontWeight({object, changeStyle}){
    return(
        <div className="font-weight-container">
        <label htmlFor="font-weight">Weight: </label>
            <select name="font-weight" id="font-weight" value={object["font-weight"] ? object["font-weight"] : "normal"} onChange={(e) => changeStyle("font-weight", e.target.value)}>
                <option value="normal">Normal</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
                <option value="bold">Bold</option>
            </select>
            </div>
    )
}