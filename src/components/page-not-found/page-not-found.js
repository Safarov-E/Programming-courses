import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
import images from '../../assets/img/scale_1200.webp'
import './page-not-found.css'

export default class PageNotFound extends Component {
    render() {
        return (
            <>
                <HomePage />
                    <div className="PageNotFound">
                        <div className="PageNotFound-container">
                            <h1>404</h1>
                            <p>Page Not Found</p>
                            <img src={images} />
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}