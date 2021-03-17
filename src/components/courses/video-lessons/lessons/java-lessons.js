import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data9} from '../../categories/video-lessons'

export default class JavaLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="Введение в Java"
                subtitles="Java-разработчик"
                duration="22:32:57"
                lessons="7 уроков"
                id={9}
                source="Технострим Mail.Ru Group"
                description="Java (объектно-ориентированный язык программирования - это не javascript блеать - ) являеться сейчас одним из самых востребованных языком програмированния. Его фишка - работа на миллионах девайсов, даже на твоей старой микроволновке или пральной машинке."
                data={data9}
                params={this.props.match.params.num}
            />
        )
    }
}