import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
    return(
        <CustomButtonContainer {...props} className="custom-button">
            { children }
        </CustomButtonContainer>
    )
}

export default  CustomButton;