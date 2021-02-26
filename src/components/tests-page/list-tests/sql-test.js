import React, { Component } from 'react'
import ListQuestions from '../list-questions'
import data from '../quiz/sql'

export default class SQLTest extends Component {
    render() {
        return (
            <>
                <ListQuestions textTest={'Тест по основам SQL'} data={data} />
            </>
        )
    }
}