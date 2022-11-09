import React from "react";
import QuestionOptions from "../components/questionOptions";
import { useState } from "react";

const Questioner = (props) => {
    let [questionIndex, setQuestionIndex] = useState(0);     
    console.log(questionIndex)
    console.log(props.questions);
    const handleNextQuestion = () => {
        console.log('handleNextQuestion')
        if(Number(questionIndex) < Number(props.questions.length) - 1){
            setQuestionIndex(Number(questionIndex) + 1);
        }
    };
    const handlePreviousQuestion = () => {
        console.log('handlePreviousQuestion')
        if(Number(questionIndex) > 0){
            setQuestionIndex(Number(questionIndex) - 1);
        }
    };

    return(
        <div className="questionBox">
            <div className="header">
                <img src="back-icon.png" alt="back" className="backIcon" onClick={handlePreviousQuestion} />
            </div>
            <div className="content">
                <h2>{props?.questions[questionIndex]?.question || ''}</h2>
                <QuestionOptions options={props?.questions[questionIndex]?.questionoption} questionData={props?.questions[questionIndex]}/>
            </div>
            <div className="footer">
                <button className="nextButton" onClick={handleNextQuestion}>NEXT</button>
            </div>
        </div>
    );
}
export default Questioner;