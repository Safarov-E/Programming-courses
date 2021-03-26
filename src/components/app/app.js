import React, { lazy, Suspense, Component } from 'react';
import {Route, Switch} from 'react-router-dom';

const CategoryBlock = lazy(() => import('../category-block'));
const BookPage = lazy(() => import('../book-page/book-page'));
const TestsPage = lazy(() => import('../tests-page/tests-page'));
const ProductPage = lazy(() => import('../book-page/product-page'));
const HtmlTest = lazy(() => import('../tests-page/list-tests/html-test'));
const PHPTest = lazy(() => import('../tests-page/list-tests/php-test'));
const CSSTest = lazy(() => import('../tests-page/list-tests/css-test'));
const JSTest = lazy(() => import('../tests-page/list-tests/javascript-test'));
const SQLTest = lazy(() => import('../tests-page/list-tests/sql-test'));
const PageNotFound = lazy(() => import('../page-not-found'));
const Courses = lazy(() => import('../courses'));
const ListOfCourses = lazy(() => import('../courses/list-of-courses'));
const JavaScriptLessons = lazy(() => import('../courses/video-lessons/lessons/javascript-lessons'));
const PHPLessons = lazy(() => import('../courses/video-lessons/lessons/php-lessons'));
const WordPressLessons = lazy(() => import('../courses/video-lessons/lessons/wordpress-lessons'));
const TypeScriptLessons = lazy(() => import('../courses/video-lessons/lessons/typescript-lessons'));
const NodeLessons = lazy(() => import('../courses/video-lessons/lessons/node-lessons'));
const HtmlLessons = lazy(() => import('../courses/video-lessons/lessons/html-lessons'));
const CsslLessons = lazy(() => import('../courses/video-lessons/lessons/css-lessons'));
const PythonLessons = lazy(() => import('../courses/video-lessons/lessons/python-lessons'));
const JavaLessons = lazy(() => import('../courses/video-lessons/lessons/java-lessons'));
const VueLessons = lazy(() => import('../courses/video-lessons/lessons/vue-lessons'));

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
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
                    <Route path="/course/5/:num" exact component={NodeLessons} />
                    <Route path="/course/6/:num" exact component={HtmlLessons} />
                    <Route path="/course/7/:num" exact component={CsslLessons} />
                    <Route path="/course/8/:num" exact component={PythonLessons} />
                    <Route path="/course/9/:num" exact component={JavaLessons} />
                    <Route path="/course/10/:num" exact component={VueLessons} />
                </Suspense>
                <Route component={PageNotFound} />
            </Switch>
        )
    }
}