
export default function Opacity({object, changeStyle}){
    return(
        <div className="opacity-container">
            <div className="opacity-range-input">
                <label htmlFor="opacity">Opacity: </label>
                <input 
                    id="opacity-range" 
                    name="opacity" 
                    type="range" 
                    className="std-range"
                    min={0} 
                    max={1} 
                    step={0.01} 
                    value={object["opacity"] ? object["opacity"] : "1"} 
                    onChange={(e) => changeStyle("opacity", 
                        e.target.value)} />
            </div>
            <div className="opacity-number-input">
                <input 
                    id="opacity" 
                    name="opacity" 
                    type="number" 
                    className="std-input"
                    step={0.1}
                    min={0}
                    max={1}
                    value={object["opacity"] ? object["opacity"] : "1"} 
                    onChange={(e) => changeStyle("opacity", 
                        e.target.value)} />
            </div>
        </div>
    )
}