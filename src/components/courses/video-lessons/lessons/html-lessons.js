import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data6} from '../../categories/video-lessons'

export default class HtmlLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="HTML для начинающих"
                subtitles="HTML/CSS Bootcamp - Learn HTML, CSS, Flexbox, and CSS Grid"
                duration="18:45:35"
                lessons="11 уроков"
                id={6}
                source="loftblog"
                description="Изучите HTML, CSS, Flexbox и CSS Grid, создав профессиональный веб-сайт с современными методами разработки."
                data={data6}
                params={this.props.match.params.num}
            />
        )
    }
}