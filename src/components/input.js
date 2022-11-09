import React from "react";

const InputComponent = (props) => {
    return(
        <input type={props.inputType} id="fname" name="fname" value=''/>
    );
}
export default InputComponent;