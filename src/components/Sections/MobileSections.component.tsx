import { useState } from "react"
import Section_1 from "./Section_1.component";
import Section_2 from "./Section_2.component";


export default function MobileSections({elements, setCurrentElement, setElements, html, setHtml, style, setStyle, elementsLength, currentElement, makeBorderBoxInvisible, changeStyle, element, index, object, resetStyle, changeText}) {
    
    const [showSection1, setShowSection1] = useState(false);
    const [showSection2, setShowSection2] = useState(false);
    
    const changeButtonHandler = (section: string) => {
        if(section === "1" && showSection1) {
            setShowSection1(false);
            return;
        }
        if(section === "2" && showSection2) {
            setShowSection2(false);
            return;
        }
        if(section === "1") {
            setShowSection1(true);
            setShowSection2(false);
        } else if(section === "2") {
            setShowSection1(false);
            setShowSection2(true);
        }
    }

    return(
        <div className="mobile-sections-container">
            <div className="mobile-sections-buttons">
                <button className="section-1-button" onClick={() => changeButtonHandler("1")}>HTML</button>
                <button className="section-2-button" onClick={() => changeButtonHandler("2")}>CSS</button>
            </div>
        {showSection1 ? 
            <Section_1 
            elements={elements} 
            setCurrentElement={setCurrentElement} 
            setElements={setElements} 
            html={html} 
            setHtml={setHtml} 
            style={style} 
            setStyle={setStyle} 
            elementsLength={elementsLength} 
            currentElement={currentElement} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}
            />    
        : null}
        {showSection2 ?
            <Section_2 
            element={currentElement[0]} 
            index={currentElement[1]} 
            object={currentElement[2]} 
            changeStyle={changeStyle} 
            resetStyle={resetStyle} 
            changeText={changeText} 
            makeBorderBoxInvisible={makeBorderBoxInvisible}
        />
        : null}
        </div>
    )
}