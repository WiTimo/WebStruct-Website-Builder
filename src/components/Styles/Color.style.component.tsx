

export default function Color({object, changeStyle}){
    return(
        <div className="color-container">
            <div className="text-color-container">
                <label htmlFor="font-color">Text-Color: </label>
                <input 
                    id="font-color" 
                    name="font-color" 
                    type="color" 
                    value={object["color"] ? object["color"] : "#000000"} 
                    onChange={(e) => changeStyle("color", 
                        e.target.value)} />
            </div>
            <div className="bg-color-container">
                <label htmlFor="bg-color">BG-Color: </label>
                <input 
                    type="color" 
                    name="bg-color" 
                    id="bg-color" 
                    value={object["background"] ? object["background"] : "#ffffff"} 
                    onChange={(e) => changeStyle("background", 
                        e.target.value)}/>
            </div>
        </div>
    )
}