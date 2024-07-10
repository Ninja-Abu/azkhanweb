import React, { useState, useEffect } from 'react'
import './QueryBox.css'

import { fetchMessage } from '../openaiService';
import knowledgeBase from '../knowledgeBase';


function QueryBox({ searchQuery }) {
    const [queryBoxShow, setQueryBoxShow] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchQuery) return;

        setQueryBoxShow(true);
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetchMessage(searchQuery, knowledgeBase);
                console.log('response:', response);
                setAnswers( prev => [...prev, {question: searchQuery, answer: response}]);
            } catch (error) {
                setAnswers( prev => [...prev, {question: searchQuery, answer: 'Sorry I am unable to fetch the answer at the moment.'}]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchQuery]);


    const toggleQueryBox = () => {
        setQueryBoxShow(!queryBoxShow);
    }

  return (
    <div className='query-box-container'>
        <div className="query-box-header">
            <div className="query-head">
                QUERY
            </div>
            <div className="close-btn-x" onClick={toggleQueryBox}>
                {queryBoxShow ? 'X' : '^'}
            </div>
        </div>
        {queryBoxShow && (
            <div className="query-box-content">
                {answers.map((answer, index) => (
                    <div key={index} className="query-box-text">
                        <p className="query-box-question">
                            <p>Q----</p>
                            <p> {answer.question}</p>
                        </p>
                        {loading ? (
                            <p className='loaging-text'>Loading...</p>
                        ): (
                            <p className="query-box-answer">
                                <p>A----</p> 
                                <p> {answer.answer}</p> 
                            </p>
                        )}
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default QueryBox