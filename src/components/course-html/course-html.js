import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
import search from '../../assets/img/loupe.png'
import clock from '../../assets/img/clock.png'
import playButton from '../../assets/img/play-button.png'
import lesson from '../../assets/img/lesson.png'
import './course-html.css'

export default class CourseHtml extends Component {
    render() {
        return (
            <>
                <HomePage />
                <div className="course-block">
                    <div className="course-block__container">
                        <div className="course-block__search">
                            <h1 class="course-block__title">Все курсы GOJS.RU</h1>
                            <p class="course-block__description">Единая платформа для эффективного поиска онлайн-курсов</p>
                            <div class="course-block__source-search">
                                <img src={search} />
                                <input type="text" placeholder="Поиск" />
                            </div>
                        </div>
                        <div className="product-list">
                            <h2 class="product-list__title">Все курсы</h2>
                            <div className="product-item">
                                <img src="https://i.ytimg.com/vi/aQkgUUmUJy4/maxresdefault.jpg" width="360" height="220" />
                                <div className="course-description">
                                    <h3>Сложный JavaScript простым языком</h3>
                                    <p>JavaScript. Стань Senior Frontend Разработчиком</p>
                                    <p>На самом деле, это курс не только по JavaScript. Также это инструмент мышления, после которого ты будешь успешен в любой технологии.</p>
                                    <div className="course-info-container">
                                        <div className="course-info">
                                            <div className="course-duration">
                                                <img src={clock} width="20px" />
                                                <span>18:28:16</span>
                                            </div>
                                            <div className="course-duration">
                                                <img src={playButton} width="20px" />
                                                <span>17 уроков</span>
                                            </div>
                                            <div className="course-duration">
                                                <img src={lesson} width="20px" />
                                                <span>Владилен Минин (vladilen.dev)</span>
                                            </div>
                                        </div>
                                        <a href="#">Посмотреть</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}