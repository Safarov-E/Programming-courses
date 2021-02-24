import React, { Component } from 'react'
import HomePage from '../../Home/home-page'
import Footer from '../../Home/footer'
import './product-page.css'

export default class ProductPage extends Component {
    render() {
        return (
            <>
                <HomePage />
                    <div className="product_card_detail">
                        <div className="product__main">
                            <div className="product__media-block">
                                <div className="product__image">
                                    <img src={process.env.PUBLIC_URL + '/img/2837160_detail.jpg'} width="400px" height="580px" />
                                </div>
                                <div className="product__header">
                                    <h2>Веб-разработка с применением Node и Express. Полноценное использование стека JavaScript</h2>
                                    <span>Автар: Браун И.</span>
                                    <ul>
                                        <li>ID товара: <span>1</span></li>
                                        <li>Издательство: <span>Питер</span></li>
                                        <li>Серия: <span>Бестселлеры O'Reilly</span></li>
                                        <li>Год издания: <span>2021</span></li>
                                        <li>ISBN: <span>978-5-4461-0590-8</span></li>
                                        <li>Переводчик: <span>Синица К.</span></li>
                                        <li>Кол-во страниц: <span>336</span></li>
                                        <li>Возрастные ограничения: <span>16+</span></li>
                                    </ul>
                                    <div className="product__header-button">
                                        <a href="https://vk.com/doc7608079_519481650?hash=0ba91e442df0609476&dl=08cb6c4f7f3fb29cbd" target="_blank">Читать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product__description">
                                <div className="product__description-title">
                                    <h3>Аннотация</h3>
                                </div>
                                <div className="product__description-description">
                                    <p>
                                    Создавайте динамические веб-приложения с применением Express — ключевого компонента из стека разработки Node/JavaScript. Итан Браун описывает работу с Express 5 на примере создания полноценного приложения. В книге рассматриваются все этапы и компоненты — от серверного рендеринга до разработки API для работы с одностраничными приложениями (SPA).<br />
                                    Express является золотой серединой между устоявшимся фреймворком и отсутствием фреймворка вообще, поэтому он оставляет вам определенную свободу при архитектурном выборе. Эта книга предоставит лучшие решения для фронтенд- и бэкенд-разработчиков, использующих Express. Научитесь смотреть на веб-разработку под новым углом!<br />
                                    - Создайте систему шаблонизации для отображения динамических данных.<br />
                                    - Подробно изучите объекты запроса и отклика, промежуточное ПО и маршрутизацию URL-адресов.<br />
                                    - Создайте симуляцию продакшен-среды и выполняйте в ней тестирование.<br />
                                    - Научитесь долговременному хранению информации в документных базах данных с помощью MongoDB и в реляционных базах данных — с помощью PostgreSQL.<br />
                                    - Открывайте другим программам доступ к вашим ресурсам благодаря API.<br />
                                    - Создавайте защищенные приложения с применением аутентификации, авторизации и HTTPS.<br />
                                    - Интегрируйтесь с социальными сетями, включайте геолокацию и многое другое.<br />
                                    - Внедрите план по запуску и сопровождению вашего приложения.<br />
                                    - Освойте критически важные навыки отладки.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}