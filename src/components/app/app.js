import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import CategoryBlock from '../category-block'
import BookPage from '../book-page/book-page'
import TestsPage from '../tests-page/tests-page'
import ProductPage from '../book-page/product-page'
import ListQuestions from '../tests-page/list-questions'

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={CategoryBlock} />
                <Route path="/books" exact component={BookPage} />
                <Route path="/tests" exact component={TestsPage} />
                <Route path="/test" exact component={ListQuestions} />
                <Route path="/books/:id" exact component={ProductPage} />
            </Switch>
        )
    }
}