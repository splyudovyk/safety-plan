import { useState } from "react";

const QuestionCard = ({question, type, param, paramupdater}) => {
    
    return (
        <div className="question">
            {type === 'radio' &&
                <p>{question}</p>
            }
            <h2>{question}</h2>
            <input
                type="text"
                value={param}
                onChange={(e) => paramupdater(e.target.value)}
            />
        </div>
     );
}
 
export default QuestionCard;