 import Headline from "../Elements/Headline/Headline.element";
 
 export default function ElementHub({style, html, setHtml, setStyle, index, element, object, objectText}) {


    switch(element){
        case "Headline":
            return <Headline style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} isHeadline={true} object={object} objectText={objectText}/>
        case "Paragraph":
            return <Headline style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} isHeadline={false} object={object} objectText={objectText} />
        default:
            return <div></div>
    }
 }