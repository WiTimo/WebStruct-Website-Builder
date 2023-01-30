import { useEffect } from "react";
import "./Editor.styles.scss";

//imports


//const html = `<html><head></head><style>body{display: flex; justify-content: center}</style><body><h1>Test</h1></body></html>`
const html = ["html", ["head", ["style", "body{display: flex; justify-content: center}"]], ["body", ["h1", "Test"]]];


export default function Editor() {

    //create HTML Elements
    function createHtml(){
        return{
            tag: "html",
        }
    }    
    function createHead(style: string){
        return{
            tag: "head",
            style: style,
        }
    }
    function createBody(){
        return{
            tag: "body",
        }
    }
    

    useEffect(() => {
        //update Iframe
        const iframe = document.querySelector("iframe");
        const iframeDocument = iframe.contentDocument;
        const iframeBody = iframeDocument.body;

        const updateIframe = () => {
            iframeBody.innerHTML = html;
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