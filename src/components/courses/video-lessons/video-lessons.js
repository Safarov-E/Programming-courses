import React, {Component} from 'react'
import HomePage from '../../Home/home-page'
import Footer from '../../Home/footer'
import clock from '../../../assets/img/clock.png'
import playButton from '../../../assets/img/play-button.png'
import lesson from '../../../assets/img/lesson.png'
import './video-lessons.css'

export default class VideoLessons extends Component {
    render() {
        return (
            <>
                <HomePage />
                    <div className="container-video">
                        <div className="container-video-page">
                            <div className="video-title">
                                <h2>Spring Boot Rest + Vue.js</h2>
                                <p>Vue JS 3: The Composition API</p>
                                <div className="video-description">
                                    <div className="video-info">
                                        <div className="video-course-duration">
                                            <img src={clock} width="20px" />
                                            <div className="video-course-block">
                                                <p>Продолжительность</p>
                                                <span>04:17:41</span>
                                            </div>
                                        </div>
                                        <div className="video-course-duration">
                                            <img src={playButton} width="20px" />
                                            <div className="video-course-block">
                                                <p>Количество Уроков</p>
                                                <span>31 Видео</span>
                                            </div>
                                        </div>
                                        <div className="video-course-duration">
                                            <img src={lesson} width="20px" />
                                            <div className="video-course-block">
                                                <p>Источник</p>
                                                <span>Автор</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-course-description">
                                        <p>Этот видеокурс - это твои первые шаги в изучении Vue фреймворка, который набирает популярности с каждым днем все больше и больше. Посмотри на главные особенности vue.js и подумай, стоит ли его учить глубже.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video-lesson-block">
                            <iframe width="740" height="425" src="https://www.youtube.com/embed/eKCD9djJQKc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="video-lesson-scroll">
                                <div className="video-lesson-info">
                                    <div className="video-lesson-info">
                                        <p>Урок 1</p>
                                        <span>08:15</span>
                                    </div>
                                    <h3>Установка редактора кода Sublime Text 3, Emmet в Windows</h3>
                                </div>
                                <div className="video-lesson-info">
                                    <div className="video-lesson-info">
                                        <p>Урок 1</p>
                                        <span>08:15</span>
                                    </div>
                                    <h3>Установка редактора кода Sublime Text 3, Emmet в Windows</h3>
                                </div>
                                <div className="video-lesson-info">
                                    <div className="video-lesson-info">
                                        <p>Урок 1</p>
                                        <span>08:15</span>
                                    </div>
                                    <h3>Установка редактора кода Sublime Text 3, Emmet в Windows</h3>
                                </div>
                                <div className="video-lesson-info">
                                    <div className="video-lesson-info">
                                        <p>Урок 1</p>
                                        <span>08:15</span>
                                    </div>
                                    <h3>Установка редактора кода Sublime Text 3, Emmet в Windows</h3>
                                </div>
                                <div className="video-lesson-info">
                                    <div className="video-lesson-info">
                                        <p>Урок 1</p>
                                        <span>08:15</span>
                                    </div>
                                    <h3>Установка редактора кода Sublime Text 3, Emmet в Windows</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}