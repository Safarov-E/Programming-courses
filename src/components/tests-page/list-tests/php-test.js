import React, { Component } from 'react'
import ListQuestions from '../list-questions'
import data from '../quiz/php'

export default class PHPTest extends Component {
    render() {
        return (
            <>
                <ListQuestions textTest={'Тест по основам PHP'} data={data} />
            </>
        )
    }
}