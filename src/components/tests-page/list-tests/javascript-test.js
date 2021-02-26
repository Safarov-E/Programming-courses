import React, { Component } from 'react'
import ListQuestions from '../list-questions'
import data from '../quiz/javascript'

export default class JSTest extends Component {
    render() {
        return (
            <>
                <ListQuestions textTest={'Тест по основам JavaScript'} data={data} />
            </>
        )
    }
}