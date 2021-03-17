import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data1} from '../../categories/video-lessons'

export default class JavaScriptLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="Сложный JavaScript простым языком"
                subtitles="JavaScript. Стань Senior Frontend Разработчиком"
                duration="18:28:16"
                lessons="17 уроков"
                source="Владилен Минин (vladilen.dev)"
                description="На самом деле, это курс не только по JavaScript. Также это инструмент мышления, после которого ты будешь успешен в любой технологии."
                data={data1}
                params={this.props.match.params.num}
            />
        )
    }
}