import React, { Component } from 'react'
import logo from '../../../assets/img/logo.png'
import {NavLink} from 'react-router-dom'
import './home-page.css'

export default class HomePage extends Component {
    render() {
        return (
            <>
            <header className="main-header">
                <div className="main-header-container">
                    <div className="main-header-side">
                        <NavLink to="/" className="main-header-logo">
                            <img src={logo} width="130px"/>
                        </NavLink>
                        <nav className="menu">
                            <ul className="menu__list">
                                <li>
                                    <NavLink to="/" className="menu__link menu__link-last">КАТЕГОРИИ</NavLink>
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
                                    <NavLink to="/" className="menu__link">Новости</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/books" className="menu__link">Книги</NavLink>
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
            </>
        )
    }
}