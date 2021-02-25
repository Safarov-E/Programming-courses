import React, { Component } from 'react'
import './finished-quiz.css'

export default class FinishedQuiz extends Component {
    render() {
        return (
            <div className="content__block-test">
                <div className="content__test-list">
                    <div className="finished-quiz">
                        <ul>
                            <li>1. Тест <i className="fa fa-times times-error" /></li>
                            <li>2. Тест <i className="fa fa-check check-success" /></li>
                        </ul>
                        <p>Правильно 4 из 10</p>
                        <div className="return-quiz">
                            <a href="#">Повторить</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}