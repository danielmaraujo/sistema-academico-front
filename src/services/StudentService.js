import axios from "axios";

class StudentService {
  async getStudents() {
    try {
      const response = await axios.get('https://sistema-academico-api-ezbw.onrender.com/students');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

const studentService = new StudentService();

export default studentService;