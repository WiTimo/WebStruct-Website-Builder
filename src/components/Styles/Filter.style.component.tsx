import {useState} from "react";
    

export default function Filter({object, changeStyle, resetStyle}){
    const [filter, setFilter] = useState("none");
    const [filterValue, setFilterValue] = useState("0");

    const changeFilter = (value: string) => {
        setFilter(value);
        changeStyle("filter", `${value}(${filterValue}${value === "blur" ? "px" : "%"})`);
    }

    const changeFilterValue = (value: string) => {
        setFilterValue(value);
        changeStyle("filter", `${filter}(${value}${filter === "blur" ? "px" : "%"})`);
    }

    const resetFilter = () => {
        setFilter("none");
        setFilterValue("0");
        resetStyle("filter");
    }

    return(
        <div className="filter-container">
            <div className="filter">
                <label className="filter-label" htmlFor="filter">Filter: </label>
                <select className="filter-select" 
                    id="filter" 
                    onChange={(e) => changeFilter(e.target.value)}>
                    <option value="none">None</option>
                    <option value="blur">Blur</option>
                    <option value="brightness">Brightness</option>
                    <option value="contrast">Contrast</option>
                    <option value="grayscale">Grayscale</option>
                    <option value="hue-rotate">Hue-rotate</option>
                    <option value="invert">Invert</option>
                    <option value="opacity">Opacity</option>
                    <option value="saturate">Saturate</option>
                    <option value="sepia">Sepia</option>
                </select>
                <label className="filter-value-label" htmlFor="filter-value">Value: </label>
                <input className="filter-value-input" 
                    id="filter-value" 
                    type="number" 
                    onChange={(e) => changeFilterValue(e.target.value)} />
            </div>
            <button className="filter-reset" onClick={resetFilter}>Reset</button>
        </div>
    )
}