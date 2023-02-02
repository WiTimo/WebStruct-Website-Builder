import "./Headline.styles.scss";
import { useEffect, useState, useRef, useCallback } from "react"
import FontWeight from "../../Styles/FontWeight.style.component";
import Color from "../../Styles/Color.style.component";
import FontSize from "../../Styles/FontSize.style.component";
import FontFamily from "../../Styles/FontFamily.style.component";
import TextAlign from "../../Styles/TextAlign.style.component";

export default function Headline({ style, setStyle, html, setHtml, index, object, text = "Default" }) {


    const newElement = ["Headline", index, object];
    function changeH1Text(e: any) {
        const newHTML = [...html];
        newHTML[2][1][index][1] = e.target.value;
        newElement[2]["text"] = e.target.value;
        setHtml(newHTML);
    }

    function changeStyle(css: string, value: string, unit = "", double = false) {
        const newStyle = [...style];
        const styleIdxArray = newStyle[newStyle.indexOf(`#_${index}`) + 1];
        if (styleIdxArray.includes(`${css}: ${value}${unit};`)) return;
        styleIdxArray.push(`${css}: ${value}${unit};`);
        let j = 0;
        for (let i of styleIdxArray) {
            if (i.includes(`${css}:`) && i !== `${css}: ${value}${unit};`) {
                styleIdxArray.splice(j, 1)
            }
            j++;
        }
        if(!double) newElement[2][`${css}`] = value;
        else newElement[2][`${css}`] = [value, unit];
        setStyle(newStyle);
    }

    //select
    useEffect(() => {
        const FontFamilySelect = document.getElementById("font-family-dropdown") as HTMLSelectElement;
        if(!object["font-family"]) return;
        FontFamilySelect.value = object["font-family"];

        const FontSizeSelect = document.getElementById("font-size-unit-dropdown") as HTMLInputElement;
        if(!object["font-size"]) return;
        FontSizeSelect.value = object["font-size"][1];
    },[])

    

    return (
        <div className="elements-container">
            <label htmlFor="id-input">Text: </label>
            <input className="style-input" id="id-input" name="id-input" value={text} onChange={(e) => changeH1Text(e)} />
            <TextAlign object={object} changeStyle={changeStyle}/>
            <FontFamily object={object} changeStyle={changeStyle}/>
            <FontSize object={object} changeStyle={changeStyle}/>
            <Color object={object} changeStyle={changeStyle}/>
            <FontWeight object={object} changeStyle={changeStyle}/>
        </div>
    )
}