import "./H1.styles.scss";
import {useEffect,useState} from "react";

export default function H1({html, style, setHTML, setStyle, content="Heading", position=[1,1,1]}) {

    function addH1(content, position){
        const newHTML = [...html]

        newHTML[position[0]][position[1]][position[2]] = ["<h1>", content, "</h1>"]
        setHTML(newHTML);
    }

    useEffect(() => {
        document.querySelector(".H1-button")?.addEventListener("click", () => {
            addH1(content, position);
        })
    },[])

    return <button className="H1-button">AddH1</button>;
}