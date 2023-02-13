import Collapsible from "react-collapsible"
import FilterStd from "../Styles/Filter.style.component"

export default function Filter({object, changeStyle, resetStyle}){
    return(
        <Collapsible 
        trigger="Filter" 
        transitionTime={200} 
        triggerTagName="div" 
        triggerClassName="elements-title"
        triggerOpenedClassName="elements-title elements-title-opened">
            <div className="style-container">
                <FilterStd 
                    object={object} 
                    changeStyle={changeStyle} 
                    resetStyle={resetStyle}/>
            </div>
       
    </Collapsible>
    )
}