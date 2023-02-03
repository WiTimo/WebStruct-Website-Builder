
export default function Opacity({object, changeStyle}){
    return(
        <div className="opacity-container">
            <label htmlFor="opacity">Opacity: </label>
            <input id="opacity-range" name="opacity" type="range" min={0} max={1} step={0.01} value={object["opacity"] ? object["opacity"] : "1"} onChange={(e) => changeStyle("opacity", e.target.value)} />
            <input id="opacity" name="opacity" value={object["opacity"] ? object["opacity"] : "1"} onChange={(e) => changeStyle("opacity", e.target.value)} />
        </div>
    )
}