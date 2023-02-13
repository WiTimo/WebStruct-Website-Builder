import Collapsible from "react-collapsible"
import Color from "../Styles/Color.style.component"
import Opacity from "../Styles/Opacity.style.component"

export default function Colors({object, changeStyle}){
    return(
        <Collapsible 
                trigger="Colors" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                <div className="style-container">
                    <Color 
                        object={object} 
                        changeStyle={changeStyle}/>
                    <Opacity 
                        object={object} 
                        changeStyle={changeStyle}/>
                </div>
                
            </Collapsible>
    )
}