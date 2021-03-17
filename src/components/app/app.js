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
import Courses from '../courses'
import ListOfCourses from '../courses/list-of-courses'
import JavaScriptLessons from '../courses/video-lessons/lessons/javascript-lessons'
import PHPLessons from '../courses/video-lessons/lessons/php-lessons'
import WordPressLessons from '../courses/video-lessons/lessons/wordpress-lessons'
import TypeScriptLessons from '../courses/video-lessons/lessons/typescript-lessons'

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
                <Route path="/course" exact component={Courses} />
                <Route path="/course/:id" exact component={ListOfCourses} />
                <Route path="/course/1/:num" exact component={JavaScriptLessons} />
                <Route path="/course/2/:num" exact component={PHPLessons} />
                <Route path="/course/3/:num" exact component={WordPressLessons} />
                <Route path="/course/4/:num" exact component={TypeScriptLessons} />
                <Route component={PageNotFound} />
            </Switch>
        )
    }
}