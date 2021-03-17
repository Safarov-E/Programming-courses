import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data3} from '../../categories/video-lessons'

export default class WordPressLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="Курс по Wordpress"
                subtitles="Интенсив по WordPress | Пишем свой Netclicks"
                duration="15:41:05"
                lessons="15 уроков"
                id={3}
                source="Артем Исламов (Академия Верстки Glo-Academy)"
                description="Овладейте с нуля доходной профессией разработчика тем для WordPress. При добросовестном подходе к изучению куса, менее чем за 2 месяца вы научитесь создавать сайты на WordPress практически любой сложности и под любые задачи."
                data={data3}
                params={this.props.match.params.num}
            />
        )
    }
}