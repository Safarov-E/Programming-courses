import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data7} from '../../categories/video-lessons'

export default class CsslLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="Основы CSS/CSS3"
                subtitles="CSS3 In-Depth"
                duration="01:59:47"
                lessons="23 уроков"
                id={7}
                source="Sorax"
                description="Узнайте наскольоко глубока кроличья нора CSS3. Автор курса глубоко погружается в различные компоненты CSS3, в том числе: селекторы, спецификации, media queries, отладку, цвета, шрифты, тени, текстовые эффекты, границы, фоны, градиенты, преобразования, переходы, анимации ... и многое многое другое! Приятного просмотра."
                data={data7}
                params={this.props.match.params.num}
            />
        )
    }
}