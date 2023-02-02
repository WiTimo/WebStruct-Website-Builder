import "./Pharagraph.styles.scss";

export default function Pharagraph({ style, setStyle, html, setHtml, index, object, text = "Default" }) {
    
    const newElement = ["Pharagraph", index, object];
    function changeH1Text(e: any) {
        const newHTML = [...html];
        newHTML[2][1][index][1] = e.target.value;
        newElement[2]["text"] = e.target.value;
        setHtml(newHTML);
    }

    function changeAlign(align: string) {
        const newStyle = [...style];
        const styleIdxArray = newStyle[newStyle.indexOf(`#_${index}`) + 1];
        if (styleIdxArray.includes(`text-align: ${align};`)) return;
        styleIdxArray.push(`text-align: ${align};`);
        let j = 0;
        for (let i of styleIdxArray) {
            if (i.includes("text-align:") && i !== `text-align: ${align};`) {
                styleIdxArray.splice(j, 1)
            }
            j++;
        }
        newElement[2]["align"] = align;
        setStyle(newStyle);
    }

    return (
        <div className="elements-container">
            <label htmlFor="id-input">Text: </label>
            <input className="style-input" id="id-input" name="id-input" value={text} onChange={(e) => changeH1Text(e)} />
            <div className="pharagraph align-container align-container">
                <button className="align-button align-button-left" onClick={() => changeAlign("left")}>Left</button>
                <button className="align-button align-button-center" onClick={() => changeAlign("center")}>Center</button>
                <button className="align-button align-button-right" onClick={() => changeAlign("right")}>Right</button>
            </div>
        </div>
    )
}