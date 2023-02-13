import TextContent from "../Styles/Text.component";
import CustomProperty from "./Custom.generalStyle.component";
import Typography from "./Typography.generalStyle.component";
import Colors from "./Colors.generalStyle.component";
import Position from "./Position.generalStyle.component";
import Align from "./Align.generalStyle.component";
import Display from "./Display.generalStyle.component";
import Size from "./Size.generalStyle.component";
import Border from "./Border.generalStyle.component";
import Spacing from "./Spacing.generalStyle.component";
import Filter from "./Filter.generalStyle.component";
import BackgroundImage from "./Background-image.generalStyle.component";

export default function GeneralStylesHub({object, changeStyle, resetStyle, text, changeText, makeBorderBoxInvisible}){
    return(
        <>
        <div className="content-container">
            <TextContent text={text} changeText={changeText}/>
        </div>
        <CustomProperty object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
        <Typography object={object} changeStyle={changeStyle}/>
        <Colors object={object} changeStyle={changeStyle}/>
        <Position object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
        <Align object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
        <Display changeStyle={changeStyle} resetStyle={resetStyle}/>
        <Size object={object} changeStyle={changeStyle} resetStyle={resetStyle} makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        <Border object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
        <Spacing object={object} changeStyle={changeStyle} resetStyle={resetStyle} makeBorderBoxInvisible={makeBorderBoxInvisible}/>
        <Filter object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
        <BackgroundImage object={object} changeStyle={changeStyle} resetStyle={resetStyle}/>
        </>
    )
}