 import Headline from "../Elements/Headline/Headline.element";
 
 export default function ElementHub({style, html, setHtml, setStyle, index, element}) {


    switch(element){
        case "Headline":
            return <Headline style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} isHeadline={true}/>
        case "Paragraph":
            return <Headline style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} isHeadline={false}/>
        default:
            return <div></div>
    }
 }