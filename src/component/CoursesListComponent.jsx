import React, { Component } from 'react';
import CoursesDataService from '../service/CoursesDataService';

class CoursesListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CoursesDataService.retrieveAllCourses()
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                })
    }

    render() {
        return (
            <div className="container">
                <h3>Courses List</h3>
                <div className="contauner">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Instructor</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.instructor}</td>
                                            <td>{course.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CoursesListComponent