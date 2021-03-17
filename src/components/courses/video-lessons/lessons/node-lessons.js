import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data5} from '../../categories/video-lessons'

export default class NodePressLessons extends Component {
    render() {
        return (
            <VideoLessons 
                title="NODE JS"
                subtitles="NodeJS. Полное руководство"
                duration="03:17:47"
                lessons="20 уроков"
                id={5}
                source="WebDev с нуля. Канал Алекса Лущенко"
                description="Node JS - серверный javascript, был создан в 2009 году как мощный инструмент управления веб-серверами. В этом видеокурсе автор затронет общие темы node js, расскажет о его установке, настройке, а также о его модулях и Express framework - среде для разработки приложений."
                data={data5}
                params={this.props.match.params.num}
            />
        )
    }
}