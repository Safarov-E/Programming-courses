import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
import loupe from '../../assets/img/loupe.png'
import detail from '../../assets/img/2837160_detail.jpg'
import './book-page.css'

export default class BookPage extends Component {
    render() {
        return (
            <>
                <HomePage />
                <div className="container_books">
                    <div className="container_books-product">
                        <div className="container_books-title">
                            <h2>Библиотека программиста</h2>
                            <p>Список наиболее часто рекомендуемых книг о программировании</p>
                            <div className="source-search">
                                <img src={loupe} />
                                <input type="text" className="search-input" placeholder="Поиск по источниках" />
                            </div>
                        </div>
                        <div className="container_cards">
                            <div className="product-card">
                                <img src={detail} width="138px" height="199px" />
                                <p>Веб-разработка с применением Node и Express.</p>
                                <div className="product_card_button">
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_one" target="_blank">Подробнее</a>
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_two" target="_blank">Читать</a>
                                </div>
                            </div>
                            <div className="product-card">
                                <img src={detail} width="138px" height="199px" />
                                <p>Веб-разработка с применением Node и Express.</p>
                                <div className="product_card_button">
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_one" target="_blank">Подробнее</a>
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_two" target="_blank">Читать</a>
                                </div>
                            </div>
                            <div className="product-card">
                                <img src={detail} width="138px" height="199px" />
                                <p>Веб-разработка с применением Node и Express.</p>
                                <div className="product_card_button">
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_one" target="_blank">Подробнее</a>
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_two" target="_blank">Читать</a>
                                </div>
                            </div>
                            <div className="product-card">
                                <img src={detail} width="138px" height="199px" />
                                <p>Веб-разработка с применением Node и Express.</p>
                                <div className="product_card_button">
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_one" target="_blank">Подробнее</a>
                                    <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" className="card_button_two" target="_blank">Читать</a>
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