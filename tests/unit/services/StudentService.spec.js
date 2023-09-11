import axios from 'axios';
import StudentService from '@/services/StudentService';

jest.mock('axios');

describe('StudentService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch students successfully', async () => {
    // Arrange
    const expectedData = [{ id: 1, name: 'Student 1' }];
    axios.get.mockResolvedValue({ data: expectedData });

    // Act
    const students = await StudentService.getStudents();

    // Assert
    expect(students).toEqual(expectedData);
    expect(axios.get).toHaveBeenCalledWith('https://sistema-academico-api-ezbw.onrender.com/students');
  });

  it('should handle errors when fetching students', async () => {
    // Arrange
    axios.get.mockRejectedValue('Internal Server Error');
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    try {
      await StudentService.getStudents();
    } catch (error) {
      // Assert
      expect(error).toEqual('Internal Server Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', 'Internal Server Error');
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });
});
