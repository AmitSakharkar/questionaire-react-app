import React from "react";
import RadioComponent from "../components/radio";
import CheckboxComponent from "../components/checkbox";
import InputComponent from "../components/input";

const QuestionOptions = (props) => {
    const {questionData, options} = props;
    return(
        options.map((quesOptions) => 
            // questionData?.questiontype === 'Radio' ? 
            // <RadioComponent {...quesOptions}/>
            // : questionData?.questiontype === 'Checkbox' ? 
            // <CheckboxComponent {...quesOptions}/>
            // : 
            <InputComponent inputType={questionData.questiontype} {...quesOptions}/>
        )
    );
}
export default QuestionOptions;