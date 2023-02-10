

export default function Color({object, changeStyle}){
    return(
        <div className="color-container">
            <label htmlFor="font-color">Text-Color: </label>
            <input 
                id="font-color" 
                name="font-color" 
                type="color" 
                value={object["color"] ? object["color"] : "#000000"} 
                onChange={(e) => changeStyle("color", 
                    e.target.value)} />
        </div>
    )
}