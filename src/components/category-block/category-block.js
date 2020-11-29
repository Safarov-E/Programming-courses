import React, { Component } from 'react'
import IconCss from '../../assets/img/css.png'
import IconHtml from '../../assets/img/html.png'
import IconJava from '../../assets/img/java.png'
import IconJavascript from '../../assets/img/javascript.png'
import IconNodejs from '../../assets/img/nodejs.png'
import IconPython from '../../assets/img/python.png'
import IconReactjs from '../../assets/img/reactjs.jpg'
import IconTest from '../../assets/img/testirovanie-quality-assurance-qa.jpg'
import IconTypescript from '../../assets/img/typescript.jpg'
import IconVue from '../../assets/img/vue.jpg'
import './category-block.css'

const categories = [
    {
        id: 'id1',
        title: 'HTML',
        img: IconHtml
    },
    {
        id: 'id2',
        title: 'CSS',
        img: IconCss
    },
    {
        id: 'id3',
        title: 'JavaScript',
        img: IconJavascript
    },
    {
        id: 'id4',
        title: 'React.js',
        img: IconReactjs
    },
    {
        id: 'id5',
        title: 'Python',
        img: IconPython
    },
    {
        id: 'id6',
        title: 'Java',
        img: IconJava
    },
    {
        id: 'id7',
        title: 'Node.js',
        img: IconNodejs
    },
    {
        id: 'id8',
        title: 'Тестирование / Quality Assurance (QA)',
        img: IconTest
    },
    {
        id: 'id9',
        title: 'TypeScript',
        img: IconTypescript
    },
    {
        id: 'id10',
        title: 'Vue.js',
        img: IconVue
    }
]
export default class CategoryBlock extends Component {
    render() {
        return (
            <section className="block-category">
                <div className="block-category-container">
                    <h2 className="section-block-title">Популярные категории</h2>
                    <div className="popular-categories">
                        {
                            categories.map((item) => {
                                return <a className="popular-categories-item" key={item.id}>
                                    <img src={item.img} className="popular-categories-icon" />
                                    <span className="popular-categories-name">{item.title}</span>
                                </a>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}