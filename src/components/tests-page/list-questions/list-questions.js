import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import Questions from './questions'
import AnswersList from './answers-list'
import data from '../quiz/quiz'
import './list-questions.css'

export default class ListQuestions extends Component {
    state = {
        activeQuestion: 0
    }
    onAnswerClickHandler = (answeId) => {
        console.log(answeId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }
    render() {
        const {activeQuestion} = this.state
        return (
            <>
                <HomePage />
                <div className="content__block-test">
                    <div className="content__test-list">
                        <div className="content__test-title">
                            <h2>Тест по основам HTML</h2>
                        </div>
                        <div className="content__test__form">
                            <Questions 
                                question={data[activeQuestion].question} 
                                quizLength={data.length} 
                                answerNumber={activeQuestion + 1}
                            />
                            <AnswersList answers={data[activeQuestion].answers} onAnswerClick={this.onAnswerClickHandler} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}