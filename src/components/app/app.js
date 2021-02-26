import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import CategoryBlock from '../category-block'
import BookPage from '../book-page/book-page'
import TestsPage from '../tests-page/tests-page'
import ProductPage from '../book-page/product-page'
import HtmlTest from '../tests-page/list-tests/html-test'
import PHPTest from '../tests-page/list-tests/php-test'
import CSSTest from '../tests-page/list-tests/css-test'
import JSTest from '../tests-page/list-tests/javascript-test'
import SQLTest from '../tests-page/list-tests/sql-test'
import PageNotFound from '../page-not-found'

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={CategoryBlock} />
                <Route path="/books" exact component={BookPage} />
                <Route path="/tests" exact component={TestsPage} />
                <Route path="/tests/html-test" exact component={HtmlTest} />
                <Route path="/tests/php-test" exact component={PHPTest} />
                <Route path="/tests/css-test" exact component={CSSTest} />
                <Route path="/tests/javascript-test" exact component={JSTest} />
                <Route path="/tests/sql-test" exact component={SQLTest} />
                <Route path="/books/:id" exact component={ProductPage} />
                <Route component={PageNotFound} />
            </Switch>
        )
    }
}