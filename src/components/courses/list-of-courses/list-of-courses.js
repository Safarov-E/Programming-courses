import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import Footer from '../../Home/footer'
import data from '../../courses/categories/course-list'
import {Link} from 'react-router-dom'
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
                                                item.list.map((card) => {
                                                    return (
                                                        <div className="content-cards__item" key={card.id}>
                                                            <img src={card.img} />
                                                            <p className="cards-item__title">{card.title}</p>
                                                            <div className="cards-item__description">
                                                                <p>{card.time}</p>
                                                                <Link to={'/course/' + item.id + '/' + card.id}>Посмотреть</Link>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    : index === 1 ? 
                                        <div className="content-block__description" key={index}>
                                            <div className="content-block-nothing-found">Ничего не найдено</div>
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