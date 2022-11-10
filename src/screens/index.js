import React from "react";
import InputComponent from "../components/input";

import { useState } from "react";

const Questioner = (props) => {
    const { questions } = props;
    let [questionIndex, setQuestionIndex] = useState(0);
    let [userInput, setUserInput] = useState([
        {	
            questionid: 1,
		    question: 'Select your data',
            solution:  '',
	    },
        {	
            questionid: 2,
		    question: 'Do you want a bike',
            solution:  '',
	    },
        {	
            questionid: 3,
		    question: 'Date & Time Slot',
            solution:  '',
	    },
        {	
            questionid: 4,
		    question: 'package selection test',
            solution:  '',
	    },
        {	
            questionid: 6,
		    question: 'Enter Your exprience details',
            solution:  '',
	    },
        {	
            questionid: 7,
		    question: 'testing check box',
            solution:  '',
	    }
    ]);     
    const handleNextQuestion = () => {
        if(Number(questionIndex) < Number(props.questions.length) - 1){
            setQuestionIndex(Number(questionIndex) + 1);
        }
    };
    const handlePreviousQuestion = () => {
        if(Number(questionIndex) > 0){
            setQuestionIndex(Number(questionIndex) - 1);
        }
    };
    const handleChange = (evt) => {
        const {id, name, type, value} = evt.target;
        let newValue = type === 'radio' || type === 'checkbox' ? Number(name) : value;
        const newState = userInput;
        newState[id].solution = newValue;
        setUserInput(newState);
    }

    return(
        <div className="questionBox">
            <div className="header">
                <img src="arrow_back.svg" alt="back" className="backIcon" onClick={handlePreviousQuestion} />
            </div>
            <div className="content">
                <h2 className="contentTitle">{questions[questionIndex]?.question || ''}</h2>
                <div className="contentData">
                { questions[questionIndex]?.questionoption.map((quesOptions) => 
                    <>
                    <hr style={{ border: '0.5px solid lightgray' }}/>
                    <InputComponent 
                        questionIndex={questionIndex}
                        handleChange={handleChange} 
                        userInput={userInput[questionIndex]} 
                        questionId={questions[questionIndex].questionid} 
                        inputType={questions[questionIndex].questiontype} 
                        {...quesOptions} 
                    />
                    </>
                )}
                <hr style={{ border: '0.5px solid lightgray' }}/>
                </div>
            </div>
            <div className="footer">
                <button className="nextButton" onClick={handleNextQuestion}>NEXT</button>
            </div>
        </div>
    );
}
export default Questioner;