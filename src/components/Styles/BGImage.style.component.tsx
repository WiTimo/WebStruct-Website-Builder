import { useState } from "react";
import {AiOutlineCloudUpload} from "react-icons/ai";

export default function BGImage({object, changeStyle, resetStyle}){

    const addImage = () => {
        const input = document.querySelector("#bg-image")?.value;
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
            <div className="bg-image-input">
                <label className="bg-image-label" htmlFor="bg-image">Image URL: </label>
                <input className="std-input" id="bg-image" />
            </div>
            <div className="bg-image-input-upload">
                <button className="std-button bg-image-submit-button" onClick={addImage}>Submit</button>
                <label htmlFor="bg-image-file" className="std-button bg-image-input-upload-label"><AiOutlineCloudUpload className="bg-image-input-upload-svg"/></label>
                <input 
                    type="file" 
                    accept="image/*" 
                    name="bg-image-upload" 
                    id="bg-image-file" 
                    className="std-input"
                    onChange={loadFile}/>
            </div>
            <div className="bg-image-options">
                <p>Options</p>
                <div className="bg-image-size" style={{display: "flex"}}>
                    <button className="std-button" onClick={() => changeStyle("background-size", "auto")}>Auto</button>
                    <button className="std-button" onClick={() => changeStyle("background-size", "cover")}>Cover</button>
                    <button className="std-button" onClick={() => changeStyle("background-size", "contain")}>Contain</button>
                </div>
                <div className="bg-image-repeat">
                    <button className="std-button" onClick={() => changeStyle("background-repeat", "repeat")}>Repeat</button>
                    <button className="std-button" onClick={() => changeStyle("background-repeat", "no-repeat")}>No Repeat</button>
                </div>
            </div>
        </div>
    )
}