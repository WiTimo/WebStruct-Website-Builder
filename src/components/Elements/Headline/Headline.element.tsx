import "./Headline.styles.scss";
import "../Elements.style.scss"
import Color from "../../Styles/Color.style.component";
import FontSize from "../../Styles/FontSize.style.component";
import FontFamily from "../../Styles/FontFamily.style.component";
import TextStyle from "../../Styles/Text.style.component";
import TextContent from "../../Styles/Text.component";
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
            <div className="content-container">
                <TextContent 
                    text={text} 
                    changeText={changeTextHandler}/>
                </div>
            <Collapsible 
                trigger="Custom" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                <div className="style-container">
                    <CustomProperty 
                    object={object} 
                    changeStyle={changeStyleHandler} 
                    resetStyle={resetStyleHandler}/>
                </div>
                
            </Collapsible>
            <Collapsible 
                trigger="Typography" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                <div className="style-container">
                    <TextStyle 
                        object={object} 
                        changeStyle={changeStyleHandler}/>
                    <FontFamily 
                        object={object} 
                        changeStyle={changeStyleHandler}/>
                    <FontSize 
                        object={object} 
                        changeStyle={changeStyleHandler}/> 
                </div>
                
            </Collapsible>
            <Collapsible 
                trigger="Colors" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                <div className="style-container">
                    <Color 
                        object={object} 
                        changeStyle={changeStyleHandler}/>
                    <BGColor 
                        object={object} 
                        changeStyle={changeStyleHandler}/>
                    <Opacity 
                        object={object} 
                        changeStyle={changeStyleHandler}/>
                </div>
                
            </Collapsible>
            <Collapsible 
                trigger="Position" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <Position 
                            object={object} 
                            changeStyle={changeStyleHandler} 
                            resetStyle={resetStyleHandler}/>
                    </div>
                
            </Collapsible>
            <Collapsible 
                trigger="Align" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <VerticalAlign 
                            object={object} 
                            changeStyle={changeStyleHandler} 
                            resetStyle={resetStyleHandler}/>
                    </div>
                
            </Collapsible>
            <Collapsible 
                trigger="Display" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <Display 
                            changeStyle={changeStyleHandler} 
                            resetStyle={resetStyleHandler}/> 
                    </div>
            </Collapsible>
            <Collapsible 
                trigger="Size" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
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
                    </div>
                
            </Collapsible>
            <Collapsible 
                trigger="Border" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <Border 
                            object={object}       
                            changeStyle={changeStyleHandler} 
                            resetStyle={resetStyleHandler}/>
                        <BorderRadius 
                            object={object} 
                            changeStyle={changeStyleHandler}/>
                    </div>
                
            </Collapsible>
            <Collapsible 
                trigger="Spacing" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                <div className="style-container">
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
                </div>
               
            </Collapsible>
            <Collapsible 
                trigger="Filter" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <Filter 
                            object={object} 
                            changeStyle={changeStyleHandler} 
                            resetStyle={resetStyleHandler}/>
                    </div>
               
            </Collapsible>
            <Collapsible 
                trigger="Background-image" 
                transitionTime={200} 
                triggerTagName="div" 
                triggerClassName="elements-title"
                triggerOpenedClassName="elements-title elements-title-opened">
                    <div className="style-container">
                        <BGImage 
                            object={object} 
                            changeStyle={changeStyleHandler} 
                            resetStyle={resetStyleHandler}/>
                    </div>
            </Collapsible>
            <div className="last-section-extender"></div>
        </div>
    )
}