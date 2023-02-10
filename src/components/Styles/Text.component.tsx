

export default function Text({text, changeText }){
    return(
        <div className="text-container">
            <label htmlFor="id-input">Text: </label>
            <input 
                className="style-input" 
                id="id-input" 
                name="id-input" 
                value={text} 
                onChange={(e) => changeText(e)} />
        </div>
    )
}