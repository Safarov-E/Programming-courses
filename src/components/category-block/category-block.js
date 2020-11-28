import React, { Component } from 'react'
import IconCss from '../../assets/img/css.png'
import './category-block.css'

export default class CategoryBlock extends Component {
    render() {
        return (
            <section className="block-category">
                <div className="block-category-container">
                    <h2 className="section-block-title">Популярные категории</h2>
                    <div className="popular-categories">
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                        <a className="popular-categories-item">
                            <img src={IconCss} className="popular-categories-icon" />
                            <span className="popular-categories-name">CSS</span>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}