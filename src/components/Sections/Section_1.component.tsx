import Draggable from "react-draggable";
import ElementSelector from "../ElementSelector/ElementSelector.component";
import "./Section.style.scss"
import {FaArrowCircleDown, FaArrowCircleUp} from "react-icons/fa"
import {MdDelete, MdDragHandle} from "react-icons/md"
import {HiOutlineDocumentDownload} from "react-icons/hi"



export default function Section_1({elements, setCurrentElement, setElements, html, setHtml, style, setStyle, elementsLength, currentElement, makeBorderBoxInvisible}){

    const defaultStyles_Headline = {"text": "Headline", "font-weight": "bold"}

    //adding Elements to the Dom
    const addH1 = (content: string, position: number[]) => {
        const newHTML = [...html];
        const HTMLPosition = newHTML[position[0]][position[1]];
        HTMLPosition.push([`<h1 id="_${HTMLPosition.length}" class="element ${HTMLPosition.length}">`, content, `</h1>`]);
        setStyle([...style, `#_${HTMLPosition.length - 1}`, []])
        setElements([...elements, ["Headline", HTMLPosition.length - 1, defaultStyles_Headline]])
        elementsLength.current += 1;
        setHtml(newHTML);
    }
    const addP = (content: string, position: number[]) => {
        const newHTML = [...html];
        const HTMLPosition = newHTML[position[0]][position[1]];
        HTMLPosition.push([`<p id="_${HTMLPosition.length}" class="element ${HTMLPosition.length}">`, content, `</p>`]);
        setStyle([...style, `#_${HTMLPosition.length - 1}`, []])
        setElements([...elements, ["Paragraph", HTMLPosition.length - 1, { "text": "Paragraph" }]])
        elementsLength.current += 1;
        setHtml(newHTML);
    }

    function deleteCurrentElement() {
        if (currentElement[0] === "none") return;
        const currentIdx: number = currentElement[1];
        const newHTML = [...html];
        const newElements = [...elements];
        const newStyle = [...style];
        const newStyleIdx = newStyle.indexOf(`#_${currentIdx}`);
        newStyle.splice(newStyleIdx, 2);
        newHTML[2][1].splice(currentIdx, 1);
        newElements.splice(currentIdx, 1);
        for (let i = currentIdx; i < newElements.length; i++) {
            newElements[i][1] -= 1;
        }
        let j = currentIdx;
        for (let i = newStyleIdx; i < newStyle.length; i += 2) {
            newStyle[i] = `#_${newElements[j][1]}`;
            j++;
        }
        for (let i = currentIdx; i < newHTML[2][1].length; i++) {
            newHTML[2][1][i][0] = `<h1 id="_${i}" class="element ${i}">`;
        }
        setStyle(newStyle);
        setHtml(newHTML);
        setElements(newElements);
        if (newElements.length !== 0) {
            setCurrentElement(newElements[newElements.length - 1]);
        } else {
            setCurrentElement(["none", 0, {}])
        }
        makeBorderBoxInvisible();
        elementsLength.current -= 1;
    }

    function moveCurrentElement(direction: string) {
        const currentIdx: number = currentElement[1];
        let index: number = 0;
        if (direction === "up") {
            //up
            if (currentIdx === 0 || currentElement[0] === "none") return;
            index = -1
        } else {
            //down
            if (currentIdx === elementsLength.current - 1 || currentElement[0] === "none") return;
            index = 1
        }
        const newHTML = [...html], newElements = [...elements], newStyle = [...style];
        const newStyleIdx = newStyle.indexOf(`#_${currentIdx}`), newStyleIdx2 = newStyle.indexOf(`#_${currentIdx + index}`);
        const newStyleContent = newStyle[newStyleIdx + 1], newStyleContent2 = newStyle[newStyleIdx2 + 1];
        newStyle[newStyleIdx + 1] = newStyleContent2;
        newStyle[newStyleIdx2 + 1] = newStyleContent;
        const newHTMLContent = newHTML[2][1][currentIdx], newHTMLContent2 = newHTML[2][1][currentIdx + index];
        newHTML[2][1][currentIdx] = newHTMLContent2;
        newHTML[2][1][currentIdx + index] = newHTMLContent;
        newHTML[2][1][currentIdx][0] = `<h1 id="_${currentIdx}" class="element ${currentIdx}">`;
        newHTML[2][1][currentIdx + index][0] = `<h1 id="_${currentIdx + index}" class="element ${currentIdx + index}">`;
        const newElementsContent = newElements[currentIdx], newElementsContent2 = newElements[currentIdx + index];
        newElements[currentIdx] = newElementsContent2;
        newElements[currentIdx + index] = newElementsContent;
        if (direction === "up") {
            newElements[currentIdx][1] += 1;
            newElements[currentIdx + index][1] -= 1;
        } else {
            newElements[currentIdx][1] -= 1;
            newElements[currentIdx + index][1] += 1;
        }

        setStyle(newStyle);
        setHtml(newHTML);
        setElements(newElements);
        setCurrentElement(newElements[currentIdx + index]);
    }


    const handleDownload = () => {
        const element = document.createElement("a");
        const iframe = document.querySelector("iframe");
        if(!iframe?.contentDocument?.documentElement.innerHTML) return;
        const Iframehtml: string = iframe?.contentDocument?.documentElement.innerHTML;
        const file = new Blob([Iframehtml], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "index.html";
        document.body.appendChild(element);
        element.click();
    }

    //delete element with shortcut "Delete"
    document.addEventListener("keydown", (e) => {
        if (e.key === "Delete") {
            deleteCurrentElement();
        }
    })

    const addElement = () => {
        const select = document.getElementById("adding-elements-select") as HTMLSelectElement;
        switch(select.value){
            case "h1": addH1("Headline", [2, 1]); break;
            case "p": addP("Text", [2, 1]); break;
        }
    }

    return(
        <Draggable handle=".dragable-object-section-1">
            <div className="section-1">
                <div className="dragable-object dragable-object-section-1">
                    <MdDragHandle className="dragable-object-icon" />
                </div>
                <div className="adding-elements-container">
                    <select id="adding-elements-select">
                        <option value="h1">{`Headline <h1>`}</option>
                        <option value="p">{`Text <p>`}</option>
                    </select>
                    <button className="adding-elements-button" onClick={addElement}>ADD</button>
                </div>
                <div className="section-1-elements-display">
                <ElementSelector 
                    elements={elements} 
                    setCurrentElement={setCurrentElement} 
                    currentElement={currentElement}
                    />
                </div>
                <div className="section-1-actions-container">
                    <div className="section-1-actions">
                    <FaArrowCircleUp className="section-1-action-icon move-element-button move-element-button-up" 
                        onClick={() => moveCurrentElement("up")} />
                    <MdDelete className="section-1-action-icon delete-element-button" 
                        onClick={() => deleteCurrentElement()} />
                    <FaArrowCircleDown className="section-1-action-icon move-element-button move-element-button-down" 
                        onClick={() => moveCurrentElement("down")} />
                    </div>
                    <div className="download-html-container">
                        <HiOutlineDocumentDownload className="section-1-action-icon download-html" 
                            onClick={ () => handleDownload()}/>
                    </div>
                    
                </div>
            </div>
        </Draggable>
    )
}