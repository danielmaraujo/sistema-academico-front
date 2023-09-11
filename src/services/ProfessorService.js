import axios from "axios";

class ProfessorService {
    async getProfessors() {
        try {
            const response = await axios.get('https://sistema-academico-api-ezbw.onrender.com/professors');
            return response.data;
          } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

const professorService = new ProfessorService();

export default professorService;