import "./ElementSelector.styles.scss";

export default function ElementSelector({setCurrentElement, elements}) {

    function changeSelectedTarget(index: Number){
        setCurrentElement([elements[index][0], elements[index][1]]);
    }

    return(
            elements.map((element: string, index: Number) => {
                return(
                    <p onClick={() => changeSelectedTarget(index)} key={index}>{element[0]}</p>
                )
            })
        )
}