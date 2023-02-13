

export default function FontFamily({object, changeStyle}){
    return(
        <div className="font-family-container">
            <label htmlFor="font-family-dropdown">Font-Family: </label>
            <select 
                name="font-family" 
                id="font-family-dropdown" 
                className="std-dropdown"
                value={object["font-family"] ? object["font-family"] : "Times New Roman"} 
                onChange={(e) => changeStyle("font-family", 
                    e.target.value)}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Palatino Linotype">Palatino Linotype</option>
                <option value="Book Antiqua">Book Antiqua</option>
                <option value="Garamond">Garamond</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
            </select>
        </div>
    )
}