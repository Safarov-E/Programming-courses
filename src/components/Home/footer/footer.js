import React, { Component } from 'react'
import vkIcons from '../../../assets/img/vk_icon-icons.com_66681.png'
import twitterIcons from '../../../assets/img/1491579542-yumminkysocialmedia22_83078.png'
import whatsappIcons from '../../../assets/img/Whatsapp_37229.png'
import YouTubeIcons from '../../../assets/img/YouTube_23392.png'
import FacebookIcons from '../../../assets/img/facebook_icon-icons.com_53612.png'
import telegramIcons from '../../../assets/img/telegram_icon-icons.com_72055.png'
import instagramIcons from '../../../assets/img/1491580635-yumminkysocialmedia26_83102.png' 
import githubIcons from '../../../assets/img/github-logo_icon-icons.com_73546.png'
import './footer.css'

export default class Footer extends Component {
    backToTop = () => {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer-row">
                        <div className="footer-icons">
                            <ul className="footer-icons-ul">
                                <li>
                                    <a href="#">
                                        <img src={vkIcons} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={twitterIcons} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={whatsappIcons} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={YouTubeIcons} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={FacebookIcons} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={telegramIcons} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={instagramIcons} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={githubIcons} />
                                    </a>
                                </li>
                            </ul>
                            <button 
                                class="btn-outline" 
                                onClick={this.backToTop}>Вверх</button>
                        </div>
                        <hr className="main-footer--hr" />
                    </div>
                    <div className="footer-main-wrapper">
                        <div className="footer-main-column">
                            <a className="footer-main-link" href="#">Материалы</a>
                            <ul className="footer-list">
                                <li><a class="footer-item" href="#">Лекции</a></li>
                                <li><a class="footer-item" href="#">Карта лекций</a></li>
                                <li><a class="footer-item" href="#">Тестирование</a></li>
                                <li><a class="footer-item" href="#">Начать обучение</a></li>
                            </ul>
                        </div>
                        <div className="footer-main-column">
                            <a className="footer-main-link" href="#">ИНФОРМАЦИЯ</a>
                            <ul className="footer-list">
                                <li><a class="footer-item" href="#">О нас</a></li>
                                <li><a class="footer-item" href="#">Для наставников</a></li>
                                <li><a class="footer-item" href="#">Для учителей</a></li>
                                <li><a class="footer-item" href="#">Для учащихся</a></li>
                            </ul>
                        </div>
                        <div className="footer-main-column">
                            <a className="footer-main-link" href="#">ПОДДЕРЖКА</a>
                            <ul className="footer-list">
                                <li><a class="footer-item" href="#">F.A.Q.</a></li>
                                <li><a class="footer-item" href="#">Карат сайта</a></li>
                                <li><a class="footer-item" href="#">О проекте</a></li>
                                <li><a class="footer-item" href="#">Отзывы</a></li>
                            </ul>
                        </div>
                        <div className="footer-main-column">
                            <a className="footer-main-link" href="#">ИНТЕНСИВЫ</a>
                            <ul className="footer-list">
                                <li><a class="footer-item" href="#">Все интенсивы</a></li>
                                <li><a class="footer-item" href="#">Получить профессию</a></li>
                                <li><a class="footer-item" href="#">База выпускников</a></li>
                                <li><a class="footer-item" href="#">Рекрутинг</a></li>
                            </ul>
                        </div>
                        <div className="footer-main-column">
                            <a className="footer-main-link" href="#">ОСТАЛЬНОЕ</a>
                            <ul className="footer-list">
                                <li><a class="footer-item" href="#">Написать нам</a></li>
                                <li><a class="footer-item" href="#">Блог</a></li>
                                <li><a class="footer-item" href="#">Форум</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-footer--dark-footer">

                    </div>
                </div>
            </footer>
        )
    }
}