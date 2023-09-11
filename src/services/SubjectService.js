import axios from "axios";

class SubjectService {
    async getSubjects() {
        try {
            const response = await axios.get('https://sistema-academico-api-ezbw.onrender.com/subjects');
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async createSubject(subject) {
        try {
            const response = await axios.post('https://sistema-academico-api-ezbw.onrender.com/subjects', subject);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async associateStudent(subjectId, studentId) {
        try {
            const response = await axios.put(`https://sistema-academico-api-ezbw.onrender.com/subjects/${subjectId}/student/${studentId}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

const subjectService = new SubjectService();

export default subjectService;