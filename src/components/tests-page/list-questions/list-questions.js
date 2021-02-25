import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import './list-questions.css'

export default class ListQuestions extends Component {
    render() {
        return (
            <>
                <HomePage />
                <div className="content__block-test">
                    <div className="content__test-list">
                        <div className="content__test-title">
                            <h2>Тест по основам HTML</h2>
                        </div>
                        <div className="content__test__form">
                            <div className="content__test__header">
                                <p>1. Какого цвета небо ?</p>
                                <span>1 из 12</span>
                            </div>
                            <ul className="test__form-list">
                                <li>rowspan</li>
                                <li>colspan</li>
                                <li>unity</li>
                                <li>union</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}