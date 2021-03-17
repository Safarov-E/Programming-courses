import React, {Component} from 'react'
import VideoLessons from '../video-lessons'
import {data2} from '../../categories/video-lessons'

export default class PHPLessons extends Component {
    render() {
        return (
            <VideoLessons 
                id={2}
                title="Основы PHP - уроки по PHP для новичков"
                subtitles="PHP – базовый онлайн курс от Дмитрия Лаврика. На курсе разбираются основные темы и приёмы программирования на PHP в процедурном стиле."
                duration="21:29:05"
                lessons="11 уроков"
                source="Дмитрий Лаврик"
                description="PHP — серверный язык программирования, применяется для разработки бэкенда. С помощью наших курсов вы познакомитесь с азами программирования на PHP, научитесь использовать объектно-ориентированное программирование (ООП) и работать с востребованными инструментами разработки, включая Lumen, Laravel, Composer, PHP Unit, Slim."
                data={data2}
                params={this.props.match.params.num}
            />
        )
    }
}