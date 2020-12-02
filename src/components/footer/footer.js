import React, { Component } from 'react'
import vkIcons from '../../assets/img/vk_icon-icons.com_66681.png'
import twitterIcons from '../../assets/img/1491579542-yumminkysocialmedia22_83078.png'
import whatsappIcons from '../../assets/img/Whatsapp_37229.png'
import YouTubeIcons from '../../assets/img/YouTube_23392.png'
import FacebookIcons from '../../assets/img/facebook_icon-icons.com_53612.png'
import telegramIcons from '../../assets/img/telegram_icon-icons.com_72055.png'
import instagramIcons from '../../assets/img/1491580635-yumminkysocialmedia26_83102.png' 
import githubIcons from '../../assets/img/github-logo_icon-icons.com_73546.png' 
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
                </div>
            </footer>
        )
    }
}