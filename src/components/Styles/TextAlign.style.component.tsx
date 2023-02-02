

export default function TextAlign({object, changeStyle}){

    return(
        <div className="align-container">
            <button className="align-button align-button-left" onClick={() => changeStyle("text-align","left")}>Left</button>
            <button className="align-button align-button-center" onClick={() => changeStyle("text-align","center")}>Center</button>
            <button className="align-button align-button-right" onClick={() => changeStyle("text-align","right")}>Right</button>
        </div>
    )
}