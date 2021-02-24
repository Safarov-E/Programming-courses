import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import Footer from '../../Home/footer'
import data from '../books/book-info'
import './product-page.css'

export default class ProductPage extends Component {
    render() {
        return (
            <>
                <HomePage />
                    <div className="product_card_detail">
                        {
                            data.map(item => {
                                return (
                                    item.id.toString() === this.props.match.params.id.toString()
                                    ?
                                    <div className="product__main" key={item.id}>
                                        <div className="product__media-block">
                                            <div className="product__image">
                                                <img src={process.env.PUBLIC_URL + item.img} width="400px" height="580px" />
                                            </div>
                                            <div className="product__header">
                                                <h2>{item.title}</h2>
                                                <span>Автар: {item.author}</span>
                                                <ul>
                                                    <li>ID товара: <span>{item.id}</span></li>
                                                    <li>Издательство: <span>Питер</span></li>
                                                    <li>Серия: <span>Бестселлеры O'Reilly</span></li>
                                                    <li>Год издания: <span>2021</span></li>
                                                    <li>ISBN: <span>978-5-4461-0590-8</span></li>
                                                    <li>Переводчик: <span>Синица К.</span></li>
                                                    <li>Кол-во страниц: <span>336</span></li>
                                                    <li>Возрастные ограничения: <span>16+</span></li>
                                                </ul>
                                                <div className="product__header-button">
                                                    <a href={item["more details"]} target="_blank">Читать</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__description">
                                            <div className="product__description-title">
                                                <h3>Аннотация</h3>
                                            </div>
                                            <div className="product__description-description">
                                                <p dangerouslySetInnerHTML={item.description()} />
                                            </div>
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