

export default function Text({text, changeText }){
    return(
        <div className="text-container">
            <textarea 
                rows={4}
                cols={25}
                className="style-input" 
                id="id-input" 
                name="id-input" 
                value={text} 
                onChange={(e) => changeText(e)} />
        </div>
    )
}