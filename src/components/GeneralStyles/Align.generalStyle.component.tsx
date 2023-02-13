import Collapsible from "react-collapsible"
import AlignStd from "../Styles/Align.style.component"

export default function Align({object, changeStyle, resetStyle}){
    return(
        <Collapsible 
                trigger="Align" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <AlignStd 
                            object={object} 
                            changeStyle={changeStyle} 
                            resetStyle={resetStyle}/>
                    </div>
                
            </Collapsible>
    )
}