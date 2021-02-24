import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import CategoryBlock from '../category-block'
import BookPage from '../book-page/book-page'
import ProductPage from '../book-page/product-page'

export default class App extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={CategoryBlock} />
                <Route path="/news" exact component={ProductPage} />
                <Route path="/books" component={BookPage} />
            </>
        )
    }
}