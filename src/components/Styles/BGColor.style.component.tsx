

export default function BGColor({object, changeStyle}){
    return(
        <div className="bg-color-container">
            <label htmlFor="bg-color">Background Color: </label>
            <input type="color" name="bg-color" id="bg-color" value={object["background"] ? object["background"] : "#ffffff"} onChange={(e) => changeStyle("background", e.target.value)}/>
        </div>
    )
}