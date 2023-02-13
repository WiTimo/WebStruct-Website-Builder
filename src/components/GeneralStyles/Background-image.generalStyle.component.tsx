import Collapsible from "react-collapsible"
import BGImage from "../Styles/BGImage.style.component"

export default function BackgroundImage({object, changeStyle, resetStyle}){
    return(
        <Collapsible 
        trigger="Background-image" 
        transitionTime={200} 
        triggerTagName="div" 
        triggerClassName="elements-title"
        triggerOpenedClassName="elements-title elements-title-opened">
            <div className="style-container">
                <BGImage 
                    object={object} 
                    changeStyle={changeStyle} 
                    resetStyle={resetStyle}/>
            </div>
    </Collapsible>
    )
}