import React, { Component } from 'react'
import ListQuestions from '../list-questions'
import data from '../quiz/css'

export default class CSSTest extends Component {
    render() {
        return (
            <>
                <ListQuestions textTest={'Тест по основам CSS'} data={data} />
            </>
        )
    }
}