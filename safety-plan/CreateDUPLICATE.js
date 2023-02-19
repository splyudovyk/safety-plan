import React from 'react';

import {useState, useEffect} from 'react';
import QuestionCard from './QuestionCard';

const Create = () => {
    const [title, setTitle] = useState('');
    const [toxic, setToxic] = useState('n');
    const [title2, setTitle2] = useState('');
    const [toxic2, setToxic2] = useState('n');
    const [pageNum, setPageNum] = useState(1);
    const [pageType, setPageType] = useState('form');

    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('default');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('no');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    const [q10, setQ10] = useState('');
    const [q11, setQ11] = useState([]);
    const [q16, setQ16] = useState('');
    const [q12, setQ12] = useState('');
    const [q13, setQ13] = useState('');
    const [q14, setQ14] = useState('');
    const [q15, setQ15] = useState('');
    const [q17, setQ17] = useState([]);
    const [contactcounter, setContactCounter] = useState(1);

    const[responses, setResponses] = useState([]);
    

    const [questions, setQuestions] = useState([
        [
            {id: 1, var: q1, varupdater: setQ1, part: 'n', topic: 'gender', question: 'Do you identify as: ', type: 'radio', options: ['Male', 'Female', 'Other']},
            {id: 2, var: q2, varupdater: setQ2, part: 'n', topic: 'sexuality', question: 'Do you identify as: ', type: 'radio', options: ['Straight', 'Gay/Lesbian', 'Bisexual', 'Asexual', 'Other']},
            {id: 3, var: q3, varupdater: setQ3, part: 'n', topic: 'livewith', question: 'Whom do you live with?', type: 'radio', options: ['Family', 'Roommates', 'Alone', 'My Partner']},
            {id: 4, var: q4, varupdater: setQ4, part: 'n', topic: 'partner', question: 'Do you have a partner you may need to protect yourself from?', type: 'radio', options: ['Yes', 'No']}
        ],
        [
            {id: 5, var: q5, varupdater: setQ5, part: 'n', topic: 'code', question: 'What is a code or phrase you can use to call/text a friend/family member for help? If you don\'t have one already, create one and discuss it with the friend/family member.', type: 'text'},
            {id: 6, var: q6, varupdater: setQ6, part: 'n', topic: 'homealone', question: 'When you are home alone, whom can you call to come stay with you?', type: 'text'},
            {id: 7, var: q7, varupdater: setQ7, part: 'n', topic: 'constantleavework', question: 'If you need to leave school or work, who can you call to pick you up?', type: 'text'},
            {id: 8, var: q8, varupdater: setQ8, part: 'y', topic: 'contactrelationship', question: 'If you decide to end your relationship, whom can you call for support?', type: 'text'},
            {id: 9, var: q9, varupdater: setQ9, part: 'n', topic: 'emergencycontacts', question: 'Do you have any other emergency contacts you haven\'t listed yet? Include phone numbers. List each new contact in a new line.', type: 'textarea',
                    othervar: q17, othervarupdater: setQ17, counter: contactcounter, counterupdater: setContactCounter}
        ],
        [
            {id: 10, var: q10, varupdater: setQ10, part: 'n', topic: 'safeplace', question: 'If you feel unsafe/uncomfortable at home or need to leave in an emergency, where can you go to stay safe? (e.g., public library, a friend\'s house)', type: 'text'},
            {id: 11, var: q11, varupdater: setQ11, part: 'n', topic: 'items', question: 'If you need to leave home in an emergency, what items do you need to take with you?', type: 'checkboxes',
                    options: ['ID (e.g., driver\'s license, school ID', 'Cell phone', 'Cell phone charger', 'Medication', 'Cash', 'ATM card', 'Keys (e.g., house, car)', 'Change of clothes', 'Comfort items (e.g., stuffed animal, photograph)', 'Health insurance card', 'Other'],
                    othervar: q16, othervarupdater: setQ16},
            {id: 12, var: q12, varupdater: setQ12, part: 'y', topic: 'avoid partner', question: 'If you need to avoid seeing your partner on your way to/from class or work, what route can you take to get there safely?', type: 'textarea'},
            {id: 13, var: q13, varupdater: setQ13, part: 'y', topic: 'safeplacerelationship', question: 'If you need to end your relationship, where can you do so safely?', type: 'text'}
        ],
        [
            {id: 14, var: q14, varupdater: setQ14, part: 'n', topic: 'happythings', question: 'What makes you happy?', type: 'text'},
            {id: 15, var: q15, varupdater: setQ15, part: 'n', topic: 'happyperson', question: 'When you are feeling sad, whom can you call to cheer you up?', type: 'text'}
        ]

        /*
            {id: 5, var: q5, varupdater: setQ5, part: 'y', topic: 'protecorder', question: 'Do you have a protection order against your partner?', type: 'radio', options: ['Yes', 'No']},
            {id: 6, var: q6, varupdater: setQ6, part: 'y', topic: 'passwords', question: 'Have you shared your passwords to your online accounts with your partner?', type: 'radio', options: ['Yes', 'No']},
            {id: 7, var: q7, varupdater: setQ7, part: 'y', topic: 'toldabtrelat', questoin: 'Have you told anyone at school or work about your relationship?', type: 'radio', options: ['Yes', 'No']},*/
    ])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, toxic};

        console.log(blog);
    }

    const changePage = () => {

        if (pageNum == 1) {
            //if (q1 == '' | q2 == '' | q3 == '' | q4 == ''){    
            //    alert('Please answer all questions.')
            //} else {
            if (responses.length != 0){
                responses.splice(0, 4);
            }

            responses.splice(0,0,q1);
            responses.splice(1,0,q2);
            responses.splice(2,0,q3);
            responses.splice(3,0,q4);

            setPageNum(pageNum+1);
            //}
        }
        if (pageNum == 2) {
            //if (q5 == '' | q6 == '' | q7 == '' | (q8 == '' & responses[3] == 'Yes') | q9 == ''){    
            //    alert('Please answer all questions.')
            //    console.log(q9.toString());
            //} else {

            if (responses.length != 4){
                responses.splice(4, 5);
            }

            responses.splice(4,0,q5);
            responses.splice(5,0,q6);
            responses.splice(6,0,q7);
            responses.splice(7,0,q8);
            responses.splice(8,0,q9.split('\n'));

            setPageNum(pageNum+1);

            //}
        }
        if (pageNum == 3) {
            //if (q10 == '' | questions[2][1].var.length == 0 | ((q12 == '' | q13 == '') & responses[3] == 'Yes')){    
            //    alert('Please answer all questions.');
            //} else if ((q16 == '' && (questions[2][1].var).includes('Other'))){
            //    alert('Please enter an item in the "Other" field.');
            //} else {
            //    if (responses.length != 9){
            //        responses.splice(9, 5);
            //    }

            responses.splice(9,0,q10);
            responses.splice(10,0,questions[2][1].var);

            responses.splice(11,0,q12);
            responses.splice(12,0,q13);
            responses.splice(13,0,q16);

            setPageNum(pageNum+1);
            //}
        }

        


        

        /*setResponses([]);
        setResponses(responses.push(q1));
        setResponses(responses.push(q2));
        setResponses(responses.push(q3));
        setResponses(responses.push(q4));
        setResponses(responses.push(q5));
        setResponses(responses.push(q6));
        setResponses(responses.push(q7));
        setResponses(responses.push(q8));
        setResponses(responses.push(q9));
        setResponses(responses.push(q10));
        setResponses(responses.push(q11));
        setResponses(responses.push(q12));
        setResponses(responses.push(q13));
        setResponses(responses.push(q14));
        setResponses(responses.push(q15));
        setResponses(responses.push(q16));
        setResponses(responses.push(q17));*/


        console.log(responses);
    }

    const changePageBack = () => {
        setPageNum(pageNum-1);
        /*setResponses([q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17]);*/
    }

    const submitForm = () => {
        //if (q14 == '' | q15 == ''){    
        //    alert('Please answer all questions.')
        //} else {
        responses.splice(14,0,q14);
        responses.splice(15,0,q15);
        
        setPageType('results');
        //}

        /*setResponses([q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17]);*/

        /*setResponses(responses.push(q1));
        setResponses(responses.push(q2));
        setResponses(responses.push(q3));
        setResponses(responses.push(q4));
        setResponses(responses.push(q5));
        setResponses(responses.push(q6));
        setResponses(responses.push(q7));
        setResponses(responses.push(q8));
        setResponses(responses.push(q9));
        setResponses(responses.push(q10));
        setResponses(responses.push(q11));
        setResponses(responses.push(q12));
        setResponses(responses.push(q13));
        setResponses(responses.push(q14));
        setResponses(responses.push(q15));
        setResponses(responses.push(q16));
        setResponses(responses.push(q17));
        console.log(responses[10]);
        console.log(questions[2].var);
        console.log(questions);*/
    }

    return ( 
        <div className="create">
            {pageType == 'form' && (
                <div>
                    <h2>Create Your Safety Plan</h2>
                    <hr className='under-title'></hr>
                    {pageNum ==1 && 
                        <div>
                            <p className='instructions'>Welcome to your interactive safety plan! Answer the questions to receive a customised safety plan. Make sure to save or print it when you're done for future reference.</p>
                            <hr />
                        </div>
                    }

                    {(questions[pageNum-1]).map((question) => (
                        <div>
                            <div className='question-container'>
                                {!(q4.toLowerCase() == 'no' && question.part == 'y') && (
                                    <div>
                                        <div className='actual-question'>
                                            <h4 className='question'>{question.question}</h4>
                                            {question.type == 'radio' &&
                                                <div>
                                                    {question.options.map((option) => (
                                                        <div>
                                                            <input
                                                                type='radio'
                                                                id={(question.topic+option).toLowerCase()}
                                                                name={question.topic}
                                                                value={option}
                                                                checked={question.var === option}
                                                                onChange={(e) => {
                                                                    question.var = option;
                                                                    question.varupdater(option);
                                                                }}
                                                            />
                                                            
                                                            <label
                                                                for={(question.topic+option).toLowerCase()}
                                                                className='radio-label'
                                                            >{option}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            }

                                            {question.type == 'checkboxes' &&
                                                <div>
                                                    {question.options.map((option) => (
                                                        <div>
                                                            <input
                                                                type='checkbox'
                                                                id={(question.topic+option).toLowerCase()}
                                                                name={question.topic}
                                                                value={option}
                                                                checked={question.var.includes(option)}
                                                                onChange={(e) => {
                                                                    if (!question.var.includes(option)) {
                                                                        question.varupdater(question.var.push(option));
                                                                    } else {
                                                                        question.varupdater(question.var.splice(question.var.indexOf(option), 1));
                                                                    }
                                                                }}
                                                            />
                                                            
                                                            <label
                                                                for={(question.topic+option).toLowerCase()}
                                                                className='radio-label'
                                                            >{option}</label>

                                                            {(question.var.includes("Other") && option=='Other') && 
                                                                <div>
                                                                    <input
                                                                        className='othertext'
                                                                        type='text'
                                                                        value={question.othervar}
                                                                        onChange={(e) => {
                                                                            question.othervar = e.target.value;
                                                                            question.othervarupdater(e.target.value);
                                                                        }}
                                                                    />
                                                                </div>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                            }

                                            {question.type == 'textarea' &&
                                                <div>
                                                    <textarea
                                                        value={question.var}
                                                        onChange={(e) => {
                                                            question.var = e.target.value;
                                                            question.varupdater(e.target.value);
                                                        }}
                                                    >
                                                    </textarea>
                                                </div>
                                            }

                                            

                                            {question.type == 'text' && 
                                                <div>
                                                    <input
                                                        type='text'
                                                        value={question.var}
                                                        onChange={(e) => {
                                                            question.var = e.target.value;
                                                            question.varupdater(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                            }
                                        </div>

                                        <hr></hr>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className='buttons'>
                        {pageNum > 1 && <button className="prev-button" onClick={changePageBack}><span>&#171;</span> PREVIOUS</button>}
                        {pageNum < questions.length && <button className="next-button" onClick={changePage}>NEXT <span>&#187;</span></button>}
                        {pageNum == questions.length && <button className='submit-button' onClick={submitForm}>SUBMIT</button>}
                    </div>
                </div>
            )}

            {pageType == 'results' && (
                <div>
                    <h2>Your Safety Plan</h2>
                    <hr className='under-title'></hr>

                    
                    {responses[0] == 'Female' && 
                        <div>
                            <div className='group'>
                                <h4>Women's Resources</h4>
                                <p>Healthcare resources: <a href='https://nwhn.org/other-resources/'>https://nwhn.org/other-resources/</a></p>
                                <p>Women's centers & domestic violence resources: <a href='https://www.nj.gov/dcf/women/domestic/'>https://www.nj.gov/dcf/women/domestic/</a></p>
                            </div>
                            <hr/>
                        </div>
                    }

                    {(responses[1] != 'Straight' & responses[1] != 'default') && 
                        <div>
                            <div className='group'>
                                <h4>LGBT Resources</h4>
                                <p>Healthcare resources: <a href='https://www.affirmingpathways.com/new-jersey-lgbtq-resources'>https://www.affirmingpathways.com/new-jersey-lgbtq-resources</a></p>
                                <p>LGBT centers & resources: <a href='https://www.nj.gov/dcf/adolescent/lgbtqi/'>https://www.nj.gov/dcf/adolescent/lgbtqi/</a></p>
                            </div>
                            <hr/>
                        </div>
                    }

                    {responses[4] != '' && 
                        <div>
                            <div className='group'>
                                <h4>When I need to call someone for help, I can use my code word...</h4>
                                <p>{(responses[4])}</p>
                            </div>
                            <hr/>
                        </div>
                    } 

                    {(responses[5] != '' | responses[6] != '' | (responses[3] == 'Yes' && responses[7] != '') | (responses[8].length != 0 && responses[8][0] != '')) &&
                    <div>
                        <div className='group'>
                            <h4>When I need support, I can turn to these people...</h4>
                            {responses[5] != '' && <p>When I am home alone: {(responses[5])}</p>}
                            {responses[6] != '' && <p>When I need someone to pick me up: {(responses[6])}</p>}
                            {(responses[3] == 'Yes' && responses[7] != '') && <p>If I end my relationship: {(responses[7])}</p>}
                            
                            {(responses[8].length != 0 && responses[8][0] != '') && <div>
                                <p>If I need additional support:</p>
                                <ul>
                                    {(responses[8]).map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>}
                        </div>
                        <hr/>
                    </div>}

                    {(responses[9] != '' | (responses[3] == 'Yes' && responses[12] != '')) && <div>
                        <div className='group'>
                            <h4>When I need a safe place to go, I can go to these places...</h4>
                            <p>If I need to leave home in an emergency: {(responses[9])}</p>
                            {(responses[3] == 'Yes' && responses[12] != '') && <p>If I end my relationship: {(responses[12])}</p>}
                        </div>
                        <hr/>
                    </div>}

                    {responses[10].length != 0 && <div>
                        <div className='group'>
                            <h4>If I need to leave home in a rush, I need these items...</h4>
                            <ul>
                                {(responses[10]).map((item) => (
                                    <div>
                                        {item != 'Other' && <li>{item}</li>}
                                    </div>
                                ))}
                                {responses[13] != '' && <li>{responses[13]}</li>}
                            </ul>
                        </div>
                        <hr/>
                    </div>}

                    {(responses[3] == 'Yes' && responses[11] != '') && <div>
                        <div className='group'>
                            <h4>If I need to avoid my partner on the way to/from work, I can use this route...</h4>
                            <p>{(responses[11])}</p>
                        </div>
                        <hr/>
                    </div>
                    }


                    <div className='printbtndiv'>
                        <button
                            onClick={() => {
                                window.print();
                            }}
                            className='print-button'
                        >PRINT</button>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Create;