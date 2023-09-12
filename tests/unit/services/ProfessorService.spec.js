import axios from 'axios';
import ProfessorService from '@/services/ProfessorService';

jest.mock('axios');

describe('ProfessorService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch professors successfully', async () => {
    // Arrange
    const expectedData = [{ id: 1, name: 'Professor 1' }];
    axios.get.mockResolvedValue({ data: expectedData });

    // Act
    const professors = await ProfessorService.getProfessors();

    // Assert
    expect(professors).toEqual(expectedData);
    expect(axios.get).toHaveBeenCalledWith('https://sistema-academico-api-ezbw.onrender.com/professors');
  });

  it('should handle errors when fetching professors', async () => {
    // Arrange
    axios.get.mockRejectedValue('Internal Server Error');
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    try {
      await ProfessorService.getProfessors();
    } catch (error) {
      // Assert
      expect(error).toEqual('Internal Server Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', 'Internal Server Error');
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });
});
