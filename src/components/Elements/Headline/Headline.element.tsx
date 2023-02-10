import "./Headline.styles.scss";
import FontWeight from "../../Styles/FontWeight.style.component";
import Color from "../../Styles/Color.style.component";
import FontSize from "../../Styles/FontSize.style.component";
import FontFamily from "../../Styles/FontFamily.style.component";
import TextAlign from "../../Styles/TextAlign.style.component";
import Text from "../../Styles/Text.component";
import Display from "../../Styles/Display.style.component";
import Width from "../../Styles/Width.style.component";
import Height from "../../Styles/Height.style.component";
import BGColor from "../../Styles/BGColor.style.component";
import BorderRadius from "../../Styles/BorderRadius.style.component";
import VerticalAlign from "../../Styles/VerticalAlign.style.component";
import Position from "../../Styles/Absolute.style.component";
import Margin from "../../Styles/Margin.style.component";
import Padding from "../../Styles/Padding.style.component";
import Border from "../../Styles/Border.style.component";
import Opacity from "../../Styles/Opacity.style.component";
import Collapsible from "react-collapsible";
import CustomProperty from "../../Styles/CustomProperty.style.component";
import Filter from "../../Styles/Filter.style.component";
import BGImage from "../../Styles/BGImage.style.component";

export default function Headline({index, object, text = "Default", changeStyle, resetStyle ,changeText, makeBorderBoxInvisible }) {


    
    function resetStyleHandler(css: string, double = false) {
        resetStyle(css, double, index, object);
    }

    function changeStyleHandler( css: string, value: string, unit="", double = false) {
        changeStyle(css, value, unit, double, index, object);
    }

    function changeTextHandler(e: any){
        changeText(e, index, object);
    }

    return (
        <div className="elements-container">
            <Collapsible 
                trigger="Custom" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <CustomProperty 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>
            </Collapsible>
            <Collapsible 
                trigger="Typography" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Text 
                    text={text} 
                    changeText={changeTextHandler}/>
                <TextAlign 
                    object={object} 
                    changeStyle={changeStyleHandler}/>
                <FontFamily 
                    object={object} 
                    changeStyle={changeStyleHandler}/>
                <FontSize 
                    object={object} 
                    changeStyle={changeStyleHandler}/> 
                <FontWeight 
                    object={object} 
                    changeStyle={changeStyleHandler}/>
            </Collapsible>
            <Collapsible 
                trigger="Colors" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Color 
                    object={object} 
                    changeStyle={changeStyleHandler}/>
                <BGColor 
                    object={object} 
                    changeStyle={changeStyleHandler}/>
                <Opacity 
                    object={object} 
                    changeStyle={changeStyleHandler}/>
            </Collapsible>
            <Collapsible 
                trigger="Position" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Position 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>
            </Collapsible>
            <Collapsible 
                trigger="Align" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <VerticalAlign 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>
            </Collapsible>
            <Collapsible 
                trigger="Display" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Display 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>  
            </Collapsible>
            <Collapsible 
                trigger="Size" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Width 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler} 
                    customBorder={makeBorderBoxInvisible}/>  
                <Height 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler} 
                    customBorder={makeBorderBoxInvisible}/>
            </Collapsible>
            <Collapsible 
                trigger="Border" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Border 
                    object={object}       
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>
                <BorderRadius 
                    object={object} 
                    changeStyle={changeStyleHandler}/>
            </Collapsible>
            <Collapsible 
                trigger="Spacing" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Margin 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler} 
                    customBorder={makeBorderBoxInvisible}/>
                <Padding 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler} 
                    customBorder={makeBorderBoxInvisible}/>
            </Collapsible>
            <Collapsible 
                trigger="Filter" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <Filter 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>
            </Collapsible>
            <Collapsible 
                trigger="Background-image" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title">
                <BGImage 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>
            </Collapsible>
        </div>
    )
}