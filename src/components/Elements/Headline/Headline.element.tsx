import "./Headline.styles.scss";
import { useEffect, useState, useRef, useCallback } from "react"
import FontWeight from "../../Styles/FontWeight.style.component";
import Color from "../../Styles/Color.style.component";
import FontSize from "../../Styles/FontSize.style.component";
import FontFamily from "../../Styles/FontFamily.style.component";
import TextAlign from "../../Styles/TextAlign.style.component";
import Text from "../../Styles/Text.component";
import Display from "../../Styles/Display.style.component";
import Width from "../../Styles/Width.style.component";
import Height from "../../Styles/Height.style.component";
import BGColor from "../../Styles/BGColor.style.component";
import BorderRadius from "../../Styles/BorderRadius.style.component";
import VerticalAlign from "../../Styles/VerticalAlign.style.component";
import Absolute from "../../Styles/Absolute.style.component";
import Margin from "../../Styles/Margin.style.component";
import Padding from "../../Styles/Padding.style.component";
import Border from "../../Styles/Border.style.component";
import Opacity from "../../Styles/Opacity.style.component";
import ZIndex from "../../Styles/ZIndex.style.component";
import BoxShadow from "../../Styles/BoxShadow.style.component";
import Position from "../../Styles/Position.style.component";
import Overflow from "../../Styles/Overflow.style.component";
import Cursor from "../../Styles/Cursor.style.component";


export default function Headline({ style, setStyle, html, setHtml, index, object, text = "Default" }) {


    const newElement = ["Headline", index, object];
    function changeText(e: any) {
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

    function resetStyle(css: string, double = false) {
        const newStyle = [...style];
        const styleIdxArray = newStyle[newStyle.indexOf(`#_${index}`) + 1];
        let j = 0;
        for (let i of styleIdxArray) {
            if (i.includes(`${css}:`)) {
                styleIdxArray.splice(j, 1)
            }
            j++;
        }
        if(!double) newElement[2][`${css}`] = "";
        else newElement[2][`${css}`] = ["", ""];
        setStyle(newStyle);
    }

    return (
        <div className="elements-container">
            <Text text={text} changeText={changeText}/>
            <TextAlign object={object} changeStyle={changeStyle}/>
            <VerticalAlign object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
            <FontFamily object={object} changeStyle={changeStyle}/>
            <FontSize object={object} changeStyle={changeStyle}/>
            <Color object={object} changeStyle={changeStyle}/>
            <BGColor object={object} changeStyle={changeStyle}/>
            <FontWeight object={object} changeStyle={changeStyle}/>
            <Display changeStyle={changeStyle} resetStyle={resetStyle}/>  
            <Width object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>  
            <Height object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
            <BorderRadius object={object} changeStyle={changeStyle}/>
            <Absolute object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
            <Margin object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
            <Padding object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
            <Border object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
            <Opacity object={object} changeStyle={changeStyle}/>
        </div>
    )
}