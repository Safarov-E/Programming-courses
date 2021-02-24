import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
import loupe from '../../assets/img/loupe.png'
import data from './books/books';
import './book-page.css'

export default class BookPage extends Component {
    state = {
        query: ''
    }
    searchText = (event) => {
        this.setState({query: event.target.value})
    }
    render() {
        let serachBook = data.filter((book) => {
            return book.title.toLowerCase().indexOf(this.state.query) !== -1
        })
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
                                <input type="text" className="search-input" 
                                        placeholder="Поиск по источниках"
                                        onKeyUp={this.searchText} />
                            </div>
                        </div>
                        <div className="container_cards">
                            {
                                serachBook.map((item) => {
                                    return (
                                        <div className="product-card" key={item.id}>
                                            <img src={process.env.PUBLIC_URL + item.img} width="138px" height="199px" />
                                            <p>{item['title'].length > 58 ? item['title'].slice( 0, 58 - 3 ) + '...' : item['title']}</p>
                                            <div className="product_card_button">
                                                <a className="card_button_one" target="_blank">Подробнее</a>
                                                <a href={item["more details"]} className="card_button_two" target="_blank">Читать</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}