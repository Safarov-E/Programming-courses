import React, { Component } from 'react'
import CategoryBlock from '../category-block'
import logo from '../../assets/img/logo_5e051af088646.png'
import Footer from '../footer'
import './home-page.css'

export default class HomePage extends Component {
    render() {
        return (
            <>
            <header className="main-header">
                <div className="main-header-container">
                    <div className="main-header-side">
                        <span className="main-header-logo">
                            <img src={logo} width="100px"/>
                        </span>
                        <nav className="menu">
                            <ul className="menu__list">
                                <li>
                                    <a href="#" className="menu__link menu__link-last">КАТЕГОРИИ</a>
                                    <ul className="sub-menu__list">
                                        <li>
                                            <a href="#" className="sub-menu__link">Новости 1</a>
                                        </li>
                                        <li>
                                            <a href="#" className="sub-menu__link">Новости 1</a>
                                        </li>
                                        <li>
                                            <a href="#" className="sub-menu__link">Новости 1</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="menu__link">Новости</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="main-header-side-right">
                        <a href="#" className="main-header-donate">Sign UP</a>
                        <a href="#" className="main-header-link">Sign in</a>
                    </div>
                </div>
            </header>
            <div className="notification">
                <p>Станьте программистом <br />
                и откройте для себя более 20 000<br /> вакансий по всей России</p>
            </div>
            <CategoryBlock />
            <Footer />
            </>
        )
    }
}