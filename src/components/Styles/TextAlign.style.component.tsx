

export default function TextAlign({object, changeStyle}){

    function changeToBlock(){
        changeStyle("display","block");
    }

    return(
        <div className="align-container">
            <div id="align-text">Text-Align: </div>
            <button 
                className="align-button align-button-left" 
                onClick={() => {changeStyle("text-align","left"); 
                    changeToBlock()}}>Left</button>
            <button 
                className="align-button align-button-center" 
                onClick={() => {changeStyle("text-align","center"); 
                    changeToBlock()}}>Center</button>
            <button 
                className="align-button align-button-right" 
                onClick={() => {changeStyle("text-align","right"); 
                    changeToBlock()}}>Right</button>
        </div>
    )
}