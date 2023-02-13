import CustomPropertyStd from "../Styles/CustomProperty.style.component"
import Collapsible from "react-collapsible"

export default function CustomProperty({object, changeStyle, resetStyle}){
    return(
        <Collapsible 
        trigger="Custom" 
        transitionTime={200} 
        triggerTagName="div" 
        triggerClassName="elements-title"
        triggerOpenedClassName="elements-title elements-title-opened">
            <CustomPropertyStd object={object} changeStyle={changeStyle}  resetStyle={resetStyle}/>
        </Collapsible>
    )
}