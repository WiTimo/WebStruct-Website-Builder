import CustomMargin from "../CustomSelect/CustomMargin.component";
import CustomPadding from "../CustomSelect/CustomPadding.component";
import CustomSize from "../CustomSelect/CustomSize.component";


export default function Border({currentElement, changeStyle}){
    return(
    <div className="custom-border">
        <div className="custom-border-relative">
            <CustomSize 
                currentElement={currentElement} 
                changeStyle={changeStyle} 
            />
            <CustomMargin 
                currentElement={currentElement} 
                changeStyle={changeStyle} 
            />
            <CustomPadding 
                currentElement={currentElement} 
                changeStyle={changeStyle} 
            />
        </div>
    </div>
    )
}