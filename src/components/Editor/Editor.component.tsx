import { useEffect, useState } from "react";
import "./Editor.styles.scss";

//imports


//const html = `<html><head></head><style>body{display: flex; justify-content: center}</style><body><h1>Test</h1></body></html>`


export default function Editor() {

    const defaultHtml = ["<html>", ["<head>", ["<style>","", "</style>"], "</head>"], ["<body>", ["<h1>", "Test", "</h1>"], "</body>"], "</html>"];
    const defaultStyle = ["*", ["margin: 0;", "padding: 0;", "box-sizing: border-box;"], "body", ["background-color: white;"]]

    const [html, setHtml] = useState(defaultHtml);
    const [style, setStyle] = useState(defaultStyle);

    //create string from array
    let htmlStringEnd = "";
    useEffect(() => {
        htmlStringEnd = "";
        const htmlString = html.join("");
        let htmlStringLength = htmlString.length;
        for(let i = 0; i < htmlStringLength; i++){
            if(htmlString[i] === ",") htmlStringEnd+="";
            else htmlStringEnd+=htmlString[i];
        }
    },[html])

    //add style to html
    //html[1][1][1] =
    useEffect(() => {
        let styleString = "";
        const styleLength = style.length;
        for(let i = 0; i < styleLength; i++){
            if(i % 2 != 0){
                styleString+=style[i]+"} ";
            }else{
                for(let j = 0; j < style[i].length; j++){
                    styleString+=style[i][j];
                }
                styleString+="{";
            }
        }
        const newHTML = [...html];
        newHTML[1][1][1] = styleString;
        setHtml(newHTML);   
    },[style])
    
    

    useEffect(() => {
        //update Iframe
        const iframe = document.querySelector("iframe");
        if(!iframe) return;
        const iframeDocument = iframe.contentDocument;
        if(!iframeDocument) return;
        const iframeBody = iframeDocument.body;

        const updateIframe = () => {
            iframeBody.innerHTML = htmlStringEnd;
        };

        updateIframe();
    },[])

    return(
        <div className="editor-container">
            <div className="section-1"></div>
            <iframe className="website-showcase-iframe"/>
            <div className="section-2"></div>
        </div>
    )
}