import React, { Component } from 'react'
import './finished-quiz.css'

export default class FinishedQuiz extends Component {
    render() {
        const {quiz, results, onRetry} = this.props;
        const successCount = Object.keys(results).reduce((total, key) => {
            if(results[key] === 'check-success') {
                total++
            }
            return total
        }, 0)
        return (
            <div className="finished-quiz">
                <ul>
                    {
                        quiz.map((quizItem, index) => {
                            return (
                                <li key={index}>{index + 1}. {quizItem.question} 
                                    <i className={results[quizItem.id] === 'times-error' ? 
                                                    'fa fa-times ' + results[quizItem.id] : 
                                                    'fa fa-check ' + results[quizItem.id]} />
                                </li>
                            )
                        })
                    }
                </ul>
                <p>Правильно {successCount} из {quiz.length}</p>
                <div className="return-quiz">
                    <button onClick={onRetry}>Повторить</button>
                </div>
            </div>
        )
    }
}