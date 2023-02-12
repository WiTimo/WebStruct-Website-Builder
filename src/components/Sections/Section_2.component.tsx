import Draggable from "react-draggable"
import ElementHub from "../ElementHub/ElementHub.component"
import {MdDragHandle} from "react-icons/md"

export default function Section_2({element, index, object, changeStyle, resetStyle, changeText, makeBorderBoxInvisible}){

    return(
        <Draggable handle=".dragable-object-section-2">
                <div className="section-2">
                <div className="dragable-object dragable-object-section-2">
                    <MdDragHandle className="dragable-object-icon" />
                </div>
                    <ElementHub 
                        element={element} 
                        index={index} 
                        object={object} 
                        changeStyle={changeStyle} 
                        resetStyle={resetStyle} 
                        changeText={changeText} 
                        makeBorderBoxInvisible={makeBorderBoxInvisible}
                    />
                </div>
        </Draggable>
    )
}