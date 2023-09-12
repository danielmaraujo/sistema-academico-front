import axios from "axios";

class CourseService {
    async getCourses() {
        try {
            const response = await axios.get('https://sistema-academico-api-ezbw.onrender.com/courses');
            return response.data;
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

const courseService = new CourseService();

export default courseService;