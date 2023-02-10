import { useState } from "react";

export default function BGImage({object, changeStyle, resetStyle}){

    const addImage = () => {
        const input = document.querySelector(".bg-image-input")?.value;
        object["background-image"] = input;
        changeStyle("background-image", `url(${object["background-image"]})`);
        object["background-image"] = `url(${object["background-image"]})`;
    }

    const removeImage = () => {
        resetStyle("background-image");
        resetStyle("background-size");
        resetStyle("background-repeat");
    }

    const loadFile = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            object["background-image"] = reader.result;
            changeStyle("background-image", `url(${object["background-image"]})`);
            object["background-image"] = `url(${object["background-image"]})`;
        }
    }

    return(
        <div className="bg-image-container">
            <label className="bg-image-label" htmlFor="bg-image">Image URL: </label>
            <input className="bg-image-input" id="bg-image" />
            <button className="bg-image-submit-button" onClick={addImage}>Submit</button>
            <label className="bg-image-upload-label" htmlFor="bg-image-file">Upload</label>
            <input 
                type="file" 
                accept="image/*" 
                name="bg-image-upload" 
                id="bg-image-file" 
                onChange={loadFile}/>
            <div>
                <button className="bg-image-remove" onClick={removeImage}>Reset</button>
                <div className="bg-image-options">
                    <div className="bg-image-size" style={{display: "flex"}}>
                        <button onClick={() => changeStyle("background-size", "auto")}>Auto</button>
                        <button onClick={() => changeStyle("background-size", "cover")}>Cover</button>
                        <button onClick={() => changeStyle("background-size", "contain")}>Contain</button>
                    </div>
                    <div className="bg-image-repeat">
                        <button onClick={() => changeStyle("background-repeat", "repeat")}>Repeat</button>
                        <button onClick={() => changeStyle("background-repeat", "no-repeat")}>No Repeat</button>
                    </div>
                </div>
            </div>
        </div>
    )
}