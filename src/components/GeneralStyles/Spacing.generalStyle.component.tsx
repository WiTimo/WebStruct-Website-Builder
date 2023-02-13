import Collapsible from "react-collapsible"
import Margin from "../Styles/Margin.style.component"
import Padding from "../Styles/Padding.style.component"

export default function Spacing({object, changeStyle, resetStyle, makeBorderBoxInvisible}){
    return(
        <Collapsible 
        trigger="Spacing" 
        transitionTime={200} 
        triggerTagName="div" 
        triggerClassName="elements-title"
        triggerOpenedClassName="elements-title elements-title-opened">
        <div className="style-container">
            <Margin 
                object={object} 
                changeStyle={changeStyle} 
                resetStyle={resetStyle} 
                customBorder={makeBorderBoxInvisible}/>
            <Padding 
                object={object} 
                changeStyle={changeStyle} 
                resetStyle={resetStyle} 
                customBorder={makeBorderBoxInvisible}/>
        </div>
       
    </Collapsible>
    )
}