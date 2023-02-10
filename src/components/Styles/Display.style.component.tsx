import React from 'react'   

export default function Display({changeStyle, resetStyle}){
    return(
        <div className="display-container">
            <label htmlFor="display">Display: </label>
            <button className="display-button display-button-block" 
                onClick={() => changeStyle("display","block")}>Block</button>
            <button className="display-button display-button-inline" 
                onClick={() => changeStyle("display","inline-block")}>Inline</button>
            <button className="display-button display-button-flex" 
                onClick={() => changeStyle("display","flex")}>Flex</button>
            <button id="display-reset" 
                onClick={() => resetStyle("display")}>Reset</button>
        </div>
    )
}