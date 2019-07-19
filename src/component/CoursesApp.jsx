import React, { Component } from 'react';
import CoursesListComponent from './CoursesListComponent';

class CoursesApp extends Component {
    render() {
        return (<>
            <h1>Courses Application</h1>
            <br />
            <CoursesListComponent />
          </>
        )
    }
}

export default CoursesApp