import Collapsible from "react-collapsible"
import BorderStd from "../Styles/Border.style.component"
import BorderRadius from "../Styles/BorderRadius.style.component"

export default function Border({object, changeStyle, resetStyle}){
    return(
        <Collapsible 
                trigger="Border" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <BorderStd 
                            object={object}       
                            changeStyle={changeStyle} 
                            resetStyle={resetStyle}/>
                        <BorderRadius 
                            object={object} 
                            changeStyle={changeStyle}/>
                    </div>
                
            </Collapsible>
    )
}