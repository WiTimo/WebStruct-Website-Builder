 import Headline from "../Elements/Headline/Headline.element";
 
 export default function ElementHub({style, html, setHtml, setStyle, index, element}) {

    console.log(index)
    console.log(element)

    switch(element){
        case "Headline":
            return <Headline style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} />
        case "Paragraph":
            return <Headline style={style} html={html} setHtml={setHtml} setStyle={setStyle} index={index} />
        default:
            return <div></div>
    }
 }