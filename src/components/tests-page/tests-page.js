import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
import images from '../../assets/img/2020.05.27_0.png'
import htmlIcons from '../../assets/img/FjNi0U.jpg'
import phpIcons from '../../assets/img/DKAylXxXoAAuloD.jpg'
import cssIcons from '../../assets/img/maxresdefault.jpg'
import javaScriptIcons from '../../assets/img/javscript.png'
import SQLIcons from '../../assets/img/337413976ba30eaf07f4b138cf350c0e.png'
import './tests-page.css'

export default class TestsPage extends Component {
    render() {
        return (
            <>
                <HomePage />
                    <div className="test__container">
                        <div className="test-list__page">
                            <div className="test-list__page-images">
                                <img src={images} width="700px" />
                            </div>
                            <div className="test-list__page-description">
                                <h2>Тесты на знание Web-технологий</h2>
                                <p>Каждый тест состоит из 10-ти вопросов по определённой теме. В каждом вопросе затрагивается самые разнообразные области применения конкретного языка, чтобы максимально тщательно проверить ваш уровень знаний.</p>
                                <span>Порядок прохождения теста:</span>
                                <ul>
                                    <li>1. Жмите на кнопку "Перейти к тесту" у соответствующего теста.</li>
                                    <li>2. Отвечаете на поставленные вопросы, выбрав единственный правильный вариант.</li>
                                    <li>3. По завершению тестирования вы увидите свой балл и количество ошибок.</li>
                                </ul>
                            </div>
                            <hr style={{width: '850px', background: '#fff', marginTop: '50px'}} />
                            <div className="ts-category__container">
                                <div className="test-list__wrap">
                                    <div className="test-list-image">
                                        <img src={htmlIcons} width="250px" height="140px" />
                                    </div>
                                    <div className="test-list-description">
                                        <h2>Тест по основам HTML</h2>
                                        <p>Тест на знание основ HTML. От Вас потребуется знание основных HTML-тегов, а также грамотное их использование. Так же необходимо понимание особенностей стандарта XHTML 1.1.</p>
                                        <button>Перейти к тесту</button>
                                    </div>
                                </div>
                            </div>
                            <hr style={{width: '850px', background: '#fff', marginTop: '50px'}} />
                            <div className="ts-category__container">
                                <div className="test-list__wrap">
                                    <div className="test-list-image">
                                        <img src={phpIcons} width="250px" height="140px" />
                                    </div>
                                    <div className="test-list-description">
                                        <h2>Тест по основам PHP</h2>
                                        <p>Данный тест проверяет Ваши знания по языку PHP. От Вас требуется знание основных конструкций PHP, работы с переменными, сессий, реализации редиректа и прочих стандартных вещей.</p>
                                        <button>Перейти к тесту</button>
                                    </div>
                                </div>
                            </div>
                            <hr style={{width: '850px', background: '#fff', marginTop: '50px'}} />
                            <div className="ts-category__container">
                                <div className="test-list__wrap">
                                    <div className="test-list-image">
                                        <img src={cssIcons} width="250px" height="140px" />
                                    </div>
                                    <div className="test-list-description">
                                        <h2>Тест по основам CSS</h2>
                                        <p>Тест проверяет знания по основам CSS. Для успешного прохождения теста вы должны знать основные виды селекторов (их синтаксис), знать основные свойства и их возможные значения, а также знать назначение самых популярных псевдоэлементов.</p>
                                        <button>Перейти к тесту</button>
                                    </div>
                                </div>
                            </div>
                            <hr style={{width: '850px', background: '#fff', marginTop: '50px'}} />
                            <div className="ts-category__container">
                                <div className="test-list__wrap">
                                    <div className="test-list-image">
                                        <img src={javaScriptIcons} width="250px" height="140px" />
                                    </div>
                                    <div className="test-list-description">
                                        <h2>Тест по основам JavaScript</h2>
                                        <p>Данный тест проверяет Ваши знания по языку JavaScript. Вопросы из теста затрагивают разные области применения данного языка. Очень много вопросов имеется на понимание "мелких" нюансов. В остальном же от Вас требуется знание базовых вещей: работа с переменными, основные функции JavaScript, приоритеты операций и прочее.</p>
                                        <button>Перейти к тесту</button>
                                    </div>
                                </div>
                            </div>
                            <hr style={{width: '850px', background: '#fff', marginTop: '50px'}} />
                            <div className="ts-category__container">
                                <div className="test-list__wrap">
                                    <div className="test-list-image">
                                        <img src={SQLIcons} width="250px" height="140px" />
                                    </div>
                                    <div className="test-list-description">
                                        <h2>Тест по основам SQL</h2>
                                        <p>Данный тест проверяет Ваши знания по языку запросов SQL. Вопросы затрагивают только самые базовые знания этого языка, без какого-либо углубления. От Вас потребуется знание самых основных SQL-запросов, а также грамотное их использование.</p>
                                        <button>Перейти к тесту</button>
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