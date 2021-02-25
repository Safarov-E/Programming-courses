import React, { Component } from 'react'

export default class Questions extends Component {
    render() {
        return (
            <div className="content__test__header">
                <p>{this.props.answerNumber}. {this.props.question}</p>
                <span>{this.props.answerNumber} из {this.props.quizLength}</span>
            </div>
        )
    }
}