import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import CategoryBlock from '../category-block'
import BookPage from '../book-page/book-page'
import ProductPage from '../book-page/product-page'

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={CategoryBlock} />
                <Route path="/books" exact component={BookPage} />
                <Route path="/books/:id" exact component={ProductPage} />
            </Switch>
        )
    }
}