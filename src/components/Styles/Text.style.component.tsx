import {GrTextAlignRight, GrTextAlignCenter, GrTextAlignLeft} from "react-icons/gr";
import {ImUnderline, ImCross} from "react-icons/im";
import {BsTypeStrikethrough,BsTypeBold} from "react-icons/bs";
import {CgBorderStyleDotted} from "react-icons/cg";
import {RxBorderDashed, RxBorderSolid} from "react-icons/rx";
import {FaGripLines} from "react-icons/fa";
import {MdOutlineWaves} from "react-icons/md";

export default function Text({object, changeStyle}){

    function changeToBlock(){
        changeStyle("display","block");
    }

    function changeHandler(style: string, value: string){
        if(style === "text-decoration-line"){
            const data = object["text-decoration-line"];
            const button1 = document.querySelector(".decoration-button-line-underline");
            const button2 = document.querySelector(".decoration-button-line-through");
            if(!button1 || !button2) return;
            if(data){
                
                if((data === "underline" && value === "line-through") || (data === "line-through" && value === "underline")){
                    changeStyle("text-decoration-line","underline line-through");
                    button1.classList.add("text-decoration-active");
                    button2.classList.add("text-decoration-active");
                }else if(data === "underline line-through" && value === "underline") {
                    changeStyle("text-decoration-line","line-through");
                    button1.classList.remove("text-decoration-active");
                }else if (data === "underline line-through" && value === "line-through"){ 
                    changeStyle("text-decoration-line","underline")
                    button2.classList.remove("text-decoration-active");
                }else if(data === "underline" && value === "underline"){
                    changeStyle("text-decoration-line","none")
                    button1.classList.remove("text-decoration-active");           
                }else if(data === "line-through" && value === "line-through"){
                    changeStyle("text-decoration-line","none")
                    button2.classList.remove("text-decoration-active");
                }else if (data === "none") {
                    changeStyle("text-decoration-line",value)
                    if(value === "underline") button1.classList.add("text-decoration-active");
                    else if(value === "line-through") button2.classList.add("text-decoration-active");
                }
            }else{
                changeStyle("text-decoration-line",value)
                if(value === "underline") button1.classList.add("text-decoration-active");
                else if(value === "line-through") button2.classList.add("text-decoration-active");
            };
        }else{
            if(object["font-weight"] === "bold") changeStyle("font-weight","normal");
            else if(object["font-weight"] === "normal") changeStyle("font-weight","bold");
            else changeStyle("font-weight",value);
            const button = document.querySelector(".decoration-button-weight-bold");
            if(!button) return;
            if(button.classList.contains("text-decoration-active")) button.classList.remove("text-decoration-active");
            else button.classList.add("text-decoration-active");
        }
    }

    function changeLineStyleHandler(style: string, value: string){
        const buttons = document.querySelectorAll(".decoration-style-button");
        if(!buttons) return;
        for(let button of buttons){
            if(button.classList.contains("text-decoration-active")) button.classList.remove("text-decoration-active");
        }

        const button = document.querySelector(`.decoration-button-style-${value}`);
        if(!button) return;
        button.classList.add("text-decoration-active");
        changeStyle(style,value);
    }

    function changeAlignHandler(style: string, value: string){
        const buttons = document.querySelectorAll(".align-button");
        if(!buttons) return;
        for(let button of buttons){
            if(button.classList.contains("text-decoration-active")) button.classList.remove("text-decoration-active");
        }

        const button = document.querySelector(`.align-button-${value}`);
        if(!button) return;
        button.classList.add("text-decoration-active");
        changeStyle(style,value);
    }

    return(
        <div className="text-style-container">
            <div className="text-style-container text-align-container">
                <GrTextAlignLeft 
                    className="align-button align-button-left text-decoration-active" 
                    onClick={() => {changeAlignHandler("text-align","left"); 
                        changeToBlock()}} />
                <GrTextAlignCenter 
                    className="align-button align-button-center" 
                    onClick={() => {changeAlignHandler("text-align","center"); 
                        changeToBlock()}} />
                <GrTextAlignRight 
                    className="align-button align-button-right" 
                    onClick={() => {changeAlignHandler("text-align","right"); 
                        changeToBlock()}} />
            </div>
            <div className="text-style-container text-decoration-container">
                <div className="text-decoration-line-container">
                    <ImUnderline 
                            className="decoration-button decoration-button-line-underline" 
                            onClick={() => {changeHandler("text-decoration-line","underline"); 
                                changeToBlock()}} />
                    <BsTypeStrikethrough
                        className="decoration-button decoration-button-line-through" 
                        onClick={() => {changeHandler("text-decoration-line","line-through"); 
                            changeToBlock()}} />
                    <BsTypeBold
                        className={`decoration-button decoration-button-weight-bold ${object["font-weight"] === "bold" ? "text-decoration-active" : ""}`}
                        onClick={() => {changeHandler("font-weight","bold"); 
                        changeToBlock()}} />
                </div>
                <div className="text-decoration-style-container">
                    <RxBorderSolid 
                        className="decoration-button decoration-style-button decoration-button-style-solid text-decoration-active" 
                        onClick={() => {changeLineStyleHandler("text-decoration-style","solid"); 
                            changeToBlock()}} />
                    <RxBorderDashed
                        className="decoration-button decoration-style-button decoration-button-style-dashed" 
                        onClick={() => {changeLineStyleHandler("text-decoration-style","dashed"); 
                            changeToBlock()}} />
                    <CgBorderStyleDotted
                        className="decoration-button decoration-style-button decoration-button-style-dotted" 
                        onClick={() => {changeLineStyleHandler("text-decoration-style","dotted"); 
                        changeToBlock()}} />
                    <FaGripLines
                        className="decoration-button decoration-style-button decoration-button-style-double" 
                        onClick={() => {changeLineStyleHandler("text-decoration-style","double"); 
                        changeToBlock()}} />
                    <MdOutlineWaves
                        className="decoration-button decoration-style-button decoration-button-style-wavy" 
                        onClick={() => {changeLineStyleHandler("text-decoration-style","wavy"); 
                        changeToBlock()}} />
                </div>
            </div>            
        </div>
    )
}