import React, {Component} from 'react'
import HomePage from '../../Home/home-page'
import Footer from '../../Home/footer'
import clock from '../../../assets/img/clock.png'
import playButton from '../../../assets/img/play-button.png'
import lesson from '../../../assets/img/lesson.png'
import {Link} from 'react-router-dom'
import './video-lessons.css'

export default class VideoLessons extends Component {
    render() {
        const {title, subtitles, duration, lessons, source, description, data, params} = this.props;
        return (
            <>
                <HomePage />
                    <div className="container-video">
                        <div className="container-video-page">
                            <div className="video-title">
                                <h2>{title}</h2>
                                <p>{subtitles}</p>
                                <div className="video-description">
                                    <div className="video-info">
                                        <div className="video-course-duration">
                                            <img src={clock} width="20px" />
                                            <div className="video-course-block">
                                                <p>Продолжительность</p>
                                                <span>{duration}</span>
                                            </div>
                                        </div>
                                        <div className="video-course-duration">
                                            <img src={playButton} width="20px" />
                                            <div className="video-course-block">
                                                <p>Количество Уроков</p>
                                                <span>{lessons}</span>
                                            </div>
                                        </div>
                                        <div className="video-course-duration">
                                            <img src={lesson} width="20px" />
                                            <div className="video-course-block">
                                                <p>Источник</p>
                                                <span>{source}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-course-description">
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video-lesson-block">
                            {
                                data.map((item, index) => {
                                    return (
                                        item.id.toString() === params.toString() ? 
                                        <iframe key={index} width="800" height="450" src={item.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        : null
                                    )
                                })
                            }
                            <div className="video-lesson-scroll">
                                {
                                    data.map((item, index) => {
                                        return <div className="video-lesson-info" key={index}>
                                                <div className="video-wrap-info">
                                                    <p>Урок {index + 1}</p>
                                                    <span>{item.time}</span>
                                                </div>
                                                <Link to={'/course/' + '1/' + item.id}>{item.title}</Link>
                                            </div>
                                    }) 
                                }
                            </div>
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}