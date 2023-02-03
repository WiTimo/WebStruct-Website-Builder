

export default function VerticalAlign({object, changeStyle, resetStyle}){

    function changeToFlex(){
        changeStyle("display", "flex");
    }

    return(
        <div className="flex-align-container">
            <div className="horizontal-align-container">
                <div id="horizontal-align-text">Horizontal: </div>
                <button className="flex-align-button justify-content-button justify-content-button-left" onClick={() => {changeStyle("justify-content","flex-start"); changeToFlex()}}>Left</button>
                <button className="flex-align-button justify-content-button justify-content-button-center" onClick={() => {changeStyle("justify-content","center"); changeToFlex()}}>Center</button>
                <button className="flex-align-button justify-content-button justify-content-button-right" onClick={() => {changeStyle("justify-content","flex-end"); changeToFlex()}}>Right</button>
            </div>

            <div className="vertical-align-container">
                <div id="vertical-align-text">Vertical: </div>
                <button className="flex-align-button align-items-button align-items-button-left" onClick={() => {changeStyle("align-items","flex-start"); changeToFlex()}}>Top</button>
                <button className="flex-align-button align-items-button align-items-button-center" onClick={() => {changeStyle("align-items","center"); changeToFlex()}}>Middle</button>
                <button className="flex-align-button align-items-button align-items-button-right" onClick={() => {changeStyle("align-items","flex-end"); changeToFlex()}}>Bottom</button>
            </div>
            
            <button id="vertical-align-reset" onClick={() => {
                resetStyle("display");
                resetStyle("align-items");
            }}>Reset</button>
        </div>
    )
}