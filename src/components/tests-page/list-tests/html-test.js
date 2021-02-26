import React, { Component } from 'react'
import ListQuestions from '../list-questions'
import data from '../quiz/html'

export default class HtmlTest extends Component {
    render() {
        return (
            <>
                <ListQuestions textTest={'Тест по основам HTML'} data={data} />
            </>
        )
    }
}