import React from 'react'   

export default function Display({changeStyle, resetStyle}){
    return(
        <div className="display-container">
            <div className='display-button-container'>
                <button className="std-button display-button display-button-block" 
                    onClick={() => changeStyle("display","block")}>Block</button>
                <button className="std-button display-button display-button-inline" 
                    onClick={() => changeStyle("display","inline-block")}>Inline</button>
                <button className="std-button display-button display-button-flex" 
                    onClick={() => changeStyle("display","flex")}>Flex</button>
            </div>
            <div className='display-reset-container'>
                <button className='std-button'
                onClick={() => resetStyle("display")}>Reset</button>    
            </div>
        </div>
    )
}