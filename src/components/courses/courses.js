import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
import search from '../../assets/img/loupe.png'
import clock from '../../assets/img/clock.png'
import playButton from '../../assets/img/play-button.png'
import lesson from '../../assets/img/lesson.png'
import data from './categories/categories'
import {Link} from 'react-router-dom'
import './courses.css'

export default class CourseHtml extends Component {
    state = {
        query: ''
    }
    searchText = (event) => {
        this.setState({query: event.target.value})
    }
    render() {
        let serachBook = data.filter((book) => {
            return book.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
        })
        return (
            <>
                <HomePage />
                <div className="course-block">
                    <div className="course-block__container">
                        <div className="course-block__search">
                            <h1 className="course-block__title">Все курсы GOJS.RU</h1>
                            <p className="course-block__description">Единая платформа для эффективного поиска онлайн-курсов</p>
                            <div className="course-block__source-search">
                                <img src={search} />
                                <input type="text" placeholder="Поиск" onKeyUp={this.searchText}  />
                            </div>
                        </div>
                        <div className="product-list">
                            <h2 className="product-list__title">Все курсы</h2>
                            {   
                                serachBook.length > 0 ?
                                serachBook.map((item, index) => {
                                return <div className="product-item" key={index}>
                                    <img src={item.img} width="360" height="220" />
                                    <div className="course-description">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <p className="course-title">{item.description_two}</p>
                                        <div className="course-info-container">
                                            <div className="course-info">
                                                <div className="course-duration">
                                                    <img src={clock} width="20px" />
                                                    <span>{item.time}</span>
                                                </div>
                                                <div className="course-duration">
                                                    <img src={playButton} width="20px" />
                                                    <span>{item.duration}</span>
                                                </div>
                                                <div className="course-duration">
                                                    <img src={lesson} width="20px" />
                                                    <span>{item.duration_two}</span>
                                                </div>
                                            </div>
                                            <Link to={'/course/' + item.id}>Посмотреть</Link>
                                        </div>
                                    </div>
                                </div>
                                })
                                : <div className="nothing-found">Ничего не найдено</div>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}