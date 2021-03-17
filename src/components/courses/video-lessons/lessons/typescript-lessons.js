import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data4} from '../../categories/video-lessons'

export default class TypeScriptLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="TypeScript"
                subtitles="TypeScript"
                duration="05:17:16"
                lessons="20 уроков"
                id={4}
                source="codeBurger"
                description="TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript"
                data={data4}
                params={this.props.match.params.num}
            />
        )
    }
}