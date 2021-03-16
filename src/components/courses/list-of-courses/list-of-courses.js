import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import Footer from '../../Home/footer'
import data from '../../courses/categories/course-list'
import './list-of-courses.css'

export default class ListOfCourses extends Component {
    render() {
        return (
            <>
                <HomePage />
                    <div className="content-block">
                        {
                            data.map((item, index) => {
                                return (
                                    item.id.toString() === this.props.match.params.id.toString() ?
                                    <div className="content-block__description" key={index}>
                                        <div className="description-block__title">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="description-cards__content">
                                            {
                                                item.list.map((card, index) => {
                                                    return (
                                                        <div className="content-cards__item">
                                                            <img src={card.img} />
                                                            <p className="cards-item__title">Урок 15. JavaScript. Все о Spread и Rest</p>
                                                            <div className="cards-item__description">
                                                                <p>24:08</p>
                                                                <a>Посмотреть</a>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                        </div>
                                    </div>
                                    : null
                                )
                            })
                        }
                    </div>
                <Footer />
            </>
        )
    }
}