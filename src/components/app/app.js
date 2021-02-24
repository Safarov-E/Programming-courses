import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import CategoryBlock from '../category-block'
import BookPage from '../book-page'

export default class App extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={CategoryBlock} />
                <Route path="/book" component={BookPage} />
            </>
        )
    }
}