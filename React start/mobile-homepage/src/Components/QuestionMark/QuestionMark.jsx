import React from 'react';
import "./QuestionMark.css"
import question from "../../assets/question_marks.png"

const QuestionMark = () => {
    return (
        <div className='question-block'>

            <img src={question}></img>
            <div className='questions'>
                <h1>FAQs</h1>
                <p>Find answers to frequently asked
                    questions</p>
                <button>Learn More</button>
            </div>

        </div>
    );
}

export default QuestionMark;
