import GeneralStylesHub from "../GeneralStyles/GeneralStylesHub.component";

export default function Header({object, text = "Default", changeStyle, resetStyle ,changeText, makeBorderBoxInvisible }) {

    return (
        <div className="elements-container">
            <GeneralStylesHub 
                object={object} 
                changeStyle={changeStyle} 
                resetStyle={resetStyle} 
                text={text} 
                changeText={changeText} 
                makeBorderBoxInvisible={makeBorderBoxInvisible}/>
            <div className="last-section-extender"></div>
        </div>
    )
}