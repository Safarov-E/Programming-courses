import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data8} from '../../categories/video-lessons'

export default class JavaLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="Python Starter"
                subtitles="Python. Полное руководство"
                duration="02:45:33"
                lessons="7 уроков"
                id={8}
                source="ITVDN"
                description="Python Flask Веб-разработка: работа с JavaScript, SoapUI, JSON, XML, MySQL, CSS REST API и Postman для веб-разработчиков."
                data={data8}
                params={this.props.match.params.num}
            />
        )
    }
}