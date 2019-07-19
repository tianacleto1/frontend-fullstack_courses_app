import axios from 'axios';

const COURSE_API_URL = 'http://localhost:8080'

class CoursesDataService {
    retrieveAllCourses() {
        return axios.get(`${COURSE_API_URL}/courses`)
    }
}

export default new CoursesDataService()