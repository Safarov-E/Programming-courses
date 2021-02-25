import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import Questions from './questions'
import AnswersList from './answers-list'
import data from '../quiz/quiz'
import './list-questions.css'

export default class ListQuestions extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,
    }
    onAnswerClickHandler = (answeId) => {
        const question = data[this.state.activeQuestion]
        if(question.rightAnswerId === answeId) {
            this.setState({
                answerState: {[answeId]: 'success'}
            })
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: {[answeId]: 'error'}
            })
        }
    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === data.length
    }
    render() {
        const {activeQuestion, answerState} = this.state
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
                            <AnswersList 
                                answers={data[activeQuestion].answers} 
                                onAnswerClick={this.onAnswerClickHandler}
                                state={answerState}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}