import React, { Component } from 'react'

export default class AnswersList extends Component {
    render() {
        return (
            <>
            {
                this.props.answers.map((item, i) => {
                    return <ul className="test__form-list" key={i}>
                                <li onClick={() => this.props.onAnswerClick(item.id)}>{item.text}</li>
                            </ul>
                })
            }
            </>
        )
    }
}