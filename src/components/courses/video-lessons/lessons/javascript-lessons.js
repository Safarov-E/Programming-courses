import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data1} from '../../categories/video-lessons'

export default class JavaScriptLessons extends Component {
    render() {
        return (
            <VideoLessons 
                id={1}
                title="Сложный JavaScript простым языком"
                subtitles="JavaScript. Стань Senior Frontend Разработчиком"
                duration="18:28:16"
                lessons="17 уроков"
                source="Владилен Минин (vladilen.dev)"
                description="JavaScript — один из самых популярных языков программирования. Его используют в веб-разработке для работы с фронтендом и бэкендом. Изучайте JavaScript быстрее и эффективнее с помощью опытного наставника — это путь от основ программирования на JavaScript до работы с популярными и востребованными инструментами, включая React, Redux, Webpack, Express."
                data={data1}
                params={this.props.match.params.num}
            />
        )
    }
}