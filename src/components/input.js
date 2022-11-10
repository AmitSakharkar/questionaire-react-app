import React, { useState, useEffect } from "react";

const InputComponent = (props) => {
    const {optionid, inputType, handleChange, optionvalue, questionIndex} = props;
    const [updatedUserProps, setUpdatedUserProps] = useState(props.userInput)
    useEffect(() => {
        setUpdatedUserProps(props.userInput);
    },[props.userInput]);
    console.log(updatedUserProps);
    return(
        <div className="box-content">
            <input 
                key={optionid}
                labelfor={optionid} 
                type={inputType === 'Date' ? 'datetime-local' : inputType} 
                id={questionIndex}
                name={optionid} 
                value={updatedUserProps.solution} 
                onChange={handleChange}
            />
            {inputType !== ('Textarea' || 'Date')  ? <label id={optionid}>{optionvalue}</label> : ''}
        </div>
    );
}
export default InputComponent;