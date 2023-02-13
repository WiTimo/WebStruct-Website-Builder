import Collapsible from "react-collapsible"
import DisplayStd from "../Styles/Display.style.component"

export default function Display({changeStyle, resetStyle}){
    return(
        <Collapsible 
                trigger="Display" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <DisplayStd
                            changeStyle={changeStyle} 
                            resetStyle={resetStyle}/> 
                    </div>
            </Collapsible>
    )
}