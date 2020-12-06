import React, { Component } from 'react'
import HomePage from '../Home/home-page'
import Footer from '../Home/footer'
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
import IconProgrammingTitle from '../../assets/img/1ca54a931e939a92042749dc8e8036d7.webp'
import IconProgrammingTitle1 from '../../assets/img/0f483471fc5de0fc55d12a9cc626c020.webp'
import IconProgrammingTitle2 from '../../assets/img/82298a46582c30688e1100c115c872e2.webp'
import IconProgrammingTitle3 from '../../assets/img/75f7f135f11eb64f3f410110fd920b4a.webp'
import IconProgrammingTitle4 from '../../assets/img/7a8e6dff611cd922d8e8c596115de97e.webp'
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
            <>
            <HomePage />
            <hr className="main-footer--hr"/>
            <div className="notification">
                <p>Станьте программистом <br />
                и откройте для себя более 20 000<br /> вакансий по всей России</p>
            </div>
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
                <hr className="main-footer--hr"/>
                <div className="standard-block">
                    <h2>Научитесь создавать и программировать современные веб-интерфейсы, начните карьеру в IT, оттачивайте своё мастерство.</h2>
                    <ul className="standard-title">
                        <li className="standard-stepItem">
                            <div className="standard-stepItem-img">
                                <img src={IconProgrammingTitle} />
                            </div>
                            <div className="standard-stepItem-content">
                                <h3>Выберите, чему учиться</h3>
                                <p>От создания веб-сайтов до анализа данных - выбор за вами. Не уверен, где начать? Мы укажем вам верное направление.</p>
                            </div>
                        </li>
                        <li className="standard-stepItem">
                            <div className="standard-stepItem-img">
                                <img src={IconProgrammingTitle1} />
                            </div>
                            <div className="standard-stepItem-content">
                                <h3>Учись на практике</h3>
                                <p>Независимо от вашего уровня опыта, вы напишете настоящий рабочий код за считанные минуты.</p>
                            </div>
                        </li>
                        <li className="standard-stepItem">
                            <div className="standard-stepItem-img">
                                <img src={IconProgrammingTitle2} />
                            </div>
                            <div className="standard-stepItem-content">
                                <h3>Получите мгновенную обратную связь</h3>
                                <p>Ваш код проверяется, как только вы его отправляете, поэтому вы всегда знаете, на правильном ли вы пути.</p>
                            </div>
                        </li>
                        <li className="standard-stepItem">
                            <div className="standard-stepItem-img">
                                <img src={IconProgrammingTitle3} />
                            </div>
                            <div className="standard-stepItem-content">
                                <h3>Применяйте полученные знания на практике</h3>
                                <p>Применяйте полученные знания в реальных проектах и проверяйте свои знания с помощью индивидуальных викторин.</p>
                            </div>
                        </li>
                        <li className="standard-stepItem">
                            <div className="standard-stepItem-img">
                                <img src={IconProgrammingTitle4} />
                            </div>
                            <div className="standard-stepItem-content">
                                <h3>Найдите работу своей мечты</h3>
                                <p>Навыки программирования никогда не были так востребованы. Узнайте все, что вам нужно, чтобы вывести свою карьеру на новый уровень.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
            </>
        )
    }
}