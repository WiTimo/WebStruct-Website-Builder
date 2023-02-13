import Collapsible from "react-collapsible"
import PositionStd from "../Styles/Position.style.component"

export default function Position({object, changeStyle, resetStyle}){
    return(
        <Collapsible 
                trigger="Position" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <PositionStd 
                            object={object} 
                            changeStyle={changeStyle} 
                            resetStyle={resetStyle}/>
                    </div>
                
            </Collapsible>
    )
}