import React, { Component } from 'react' 
import ListOfCourses from '../course-javascript'
import data from '../../categories/course-list'

export default class CourseJavaScript extends Component {
    render() {
        return (
            <ListOfCourses data={data} />
        )
    }
}