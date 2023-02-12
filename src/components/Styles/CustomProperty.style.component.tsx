import {useState, useEffect} from "react";
import {MdDelete} from "react-icons/md";

export default function CustomProperty({object, changeStyle, resetStyle}){

    const addCustomProperty = () => {
        const inputProperty = document.querySelector(".custom-property-input")?.value;
        const inputValue = document.querySelector(".custom-property-value-input")?.value;
        if(!inputProperty || !inputValue) return;
        changeStyle(inputProperty, inputValue)
        if(object["customPropertys"]){
            for(let i of object["customPropertys"]){
                if(i[0] === inputProperty){
                    i[1] = inputValue;
                    return;
                }
            }
            object["customPropertys"].push([inputProperty, inputValue])
        }else{
            object["customPropertys"] = [[inputProperty, inputValue]];
            const displayContainer = document.querySelector(".custom-property-display-container");
            if(!displayContainer) return;
            displayContainer.style = "opacity: 1";
        }
    }


    const removeCustomProperty = (index: number) => {
        const property = object["customPropertys"][index][0];
        const value = object["customPropertys"][index][1];
        resetStyle(property, value)
        object["customPropertys"].splice(index, 1);
    }


    return(
        <div className="custom-property-container">
            <div className="custom-property-cont-both custom-property-cont-1">
                <label className="custom-property-label" htmlFor="custom-property">Property: </label>
                <input className="std-input custom-property-input" id="custom-property" />
            </div>
            <div className="custom-property-cont-both custom-propterty-cont-2">
                <label className="custom-property-value-label" htmlFor="custom-property-value">Value: </label>
                <input className="std-input custom-property-value-input" id="custom-property-value" />
            </div>
            <div className="custom-property-button-container">
                <button className="std-button custom-property-submit-button" onClick={addCustomProperty}>Submit</button>
            </div>
            <div className="custom-property-display-container">
                {object["customPropertys"] ? 
                object["customPropertys"].map((property: any, index: number) => {
                    return(
                        <div key={index} className="custom-property-item-display">
                            <div className="custom-property">{`${property[0]}: ${property[1]}`}</div>
                            <MdDelete className="custom-property-remove" 
                                onClick={() => removeCustomProperty(index)} />
                        </div>
                    )
                })
                : null}
            </div>
        </div>
    )
}