import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import Questions from './questions'
import AnswersList from './answers-list'
import FinishedQuiz from '../finished-quiz'
import data from '../quiz/quiz'
import './list-questions.css'

export default class ListQuestions extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
    }
    onAnswerClickHandler = (answeId) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success') return
        }
        const question = data[this.state.activeQuestion]
        const results = this.state.results
        if(question.rightAnswerId === answeId) {
            if(!results[question.id]) {
                results[question.id] = 'check-success'
            }
            this.setState({
                answerState: {[answeId]: 'success'},
                results
            })
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'times-error'
            this.setState({
                answerState: {[answeId]: 'error'},
                results
            })
        }
    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === data.length
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }
    render() {
        const {activeQuestion, answerState, isFinished, results} = this.state
        console.log(results)
        return (
            <>
                <HomePage />
                <div className="content__block-test">
                    <div className="content__test-list">
                        {
                            isFinished
                            ?   <FinishedQuiz 
                                    results={results}
                                    quiz={data}
                                    onRetry={this.retryHandler}
                                />
                            : <>
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
                            </>
                        }
                    </div>
                </div>
            </>
        )
    }
}