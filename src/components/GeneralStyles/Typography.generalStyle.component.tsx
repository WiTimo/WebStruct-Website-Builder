
import Text from "../Styles/Text.style.component"
import FontFamily from "../Styles/FontFamily.style.component"
import FontSize from "../Styles/FontSize.style.component"
import Collapsible from "react-collapsible"

export default function Typography({object, changeStyle}){
    return(
        <Collapsible 
        trigger="Typography" 
        transitionTime={200} 
        triggerTagName="div" 
        triggerClassName="elements-title"
        triggerOpenedClassName="elements-title elements-title-opened">
        <Text 
            object={object} 
            changeStyle={changeStyle}/>
        <FontFamily 
            object={object} 
            changeStyle={changeStyle}/>
        <FontSize 
            object={object} 
            changeStyle={changeStyle}/> 
        </Collapsible>
    )
}