import {useState, useEffect} from "react";

export default function CustomProperty({object, changeStyle, resetStyle}){

    const addCustomProperty = () => {
        const inputProperty = document.querySelector(".custom-property-input")?.value;
        const inputValue = document.querySelector(".custom-property-value-input")?.value;
        changeStyle(inputProperty, inputValue)
        object["customPropertys"] ? object["customPropertys"].push([inputProperty, inputValue]) : object["customPropertys"] = [[inputProperty, inputValue]];
    }

    const removeCustomProperty = (index: number) => {
        const property = object["customPropertys"][index][0];
        const value = object["customPropertys"][index][1];
        resetStyle(property, value)
        object["customPropertys"].splice(index, 1);
    }


    return(
        <div className="custom-property-container">
            <label className="custom-property-label" htmlFor="custom-property">Property: </label>
            <input className="custom-property-input" id="custom-property" />
            <label className="custom-property-value-label" htmlFor="custom-property-value">Value: </label>
            <input className="custom-property-value-input" id="custom-property-value" />
            <button className="custom-property-submit-button" onClick={addCustomProperty}>Submit</button>
            {object["customPropertys"] ? 
            object["customPropertys"].map((property: any, index: number) => {
                return(
                    <div key={index}>
                        <div className="custom-property">{`${property[0]}: ${property[1]}`}</div>
                        <button className="custom-property-remove" onClick={() => removeCustomProperty(index)}>X</button>
                    </div>
                )
            })
        : null}
        </div>
    )
}