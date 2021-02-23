import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
import loupe from '../../assets/img/loupe.png'
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
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}