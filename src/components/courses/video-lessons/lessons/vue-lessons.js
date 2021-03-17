import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data10} from '../../categories/video-lessons'

export default class VueLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="Spring Boot Rest + Vue.js"
                subtitles="Vue JS 3: The Composition API"
                duration="03:14:37"
                lessons="22 урока"
                id={10}
                source="leveluptutorials"
                description="Этот видеокурс - это твои первые шаги в изучении Vue фреймворка, который набирает популярности с каждым днем все больше и больше. Посмотри на главные особенности vue.js и подумай, стоит ли его учить глубже."
                data={data10}
                params={this.props.match.params.num}
            />
        )
    }
}