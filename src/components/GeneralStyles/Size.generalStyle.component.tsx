import Collapsible from "react-collapsible"
import Width from "../Styles/Width.style.component"
import Height from "../Styles/Height.style.component"

export default function Size({object, changeStyle, resetStyle, makeBorderBoxInvisible}){
    return(
        <Collapsible 
        trigger="Size" 
        transitionTime={200} 
        triggerTagName="div" 
        triggerClassName="elements-title"
        triggerOpenedClassName="elements-title elements-title-opened">
            <div className="style-container">
                <Width 
                    object={object} 
                    changeStyle={changeStyle} 
                    resetStyle={resetStyle} 
                    customBorder={makeBorderBoxInvisible}/>  
                <Height 
                    object={object} 
                    changeStyle={changeStyle} 
                    resetStyle={resetStyle} 
                    customBorder={makeBorderBoxInvisible}/>
            </div>
        
    </Collapsible>
    )
}