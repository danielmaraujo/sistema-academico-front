import axios from 'axios';
import SubjectService from '@/services/SubjectService';

jest.mock('axios');

describe('SubjectService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch subjects successfully', async () => {
    // Arrange
    const expectedData = [{ id: 1, name: 'Subject 1' }];
    axios.get.mockResolvedValue({ data: expectedData });

    // Act
    const subjects = await SubjectService.getSubjects();

    // Assert
    expect(subjects).toEqual(expectedData);
    expect(axios.get).toHaveBeenCalledWith('https://sistema-academico-api-ezbw.onrender.com/subjects');
  });

  it('should create a subject successfully', async () => {
    // Arrange
    const subjectToCreate = { name: 'New Subject' };
    const createdSubject = { id: 2, name: 'New Subject' };
    axios.post.mockResolvedValue({ data: createdSubject });

    // Act
    const result = await SubjectService.createSubject(subjectToCreate);

    // Assert
    expect(result).toEqual(createdSubject);
    expect(axios.post).toHaveBeenCalledWith('https://sistema-academico-api-ezbw.onrender.com/subjects', subjectToCreate);
  });

  it('should associate a student with a subject successfully', async () => {
    // Arrange
    const subjectId = 1;
    const studentId = 3;
    const response = { message: 'Student associated successfully' };
    axios.put.mockResolvedValue({ data: response });

    // Act
    const result = await SubjectService.associateStudent(subjectId, studentId);

    // Assert
    expect(result).toEqual(response);
    expect(axios.put).toHaveBeenCalledWith(
      `https://sistema-academico-api-ezbw.onrender.com/subjects/${subjectId}/student/${studentId}`
    );
  });

  it('should handle errors when fetching subjects', async () => {
    // Arrange
    axios.get.mockRejectedValue('Internal Server Error');
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    try {
      await SubjectService.getSubjects();
    } catch (error) {
      // Assert
      expect(error).toEqual('Internal Server Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', 'Internal Server Error');
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });

  it('should handle errors when creating a subject', async () => {
    // Arrange
    const subjectToCreate = { name: 'New Subject' };
    axios.post.mockRejectedValue('Internal Server Error');
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    try {
      await SubjectService.createSubject(subjectToCreate);
    } catch (error) {
      // Assert
      expect(error).toEqual('Internal Server Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', 'Internal Server Error');
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });

  it('should handle errors when associating a student with a subject', async () => {
    // Arrange
    const subjectId = 1;
    const studentId = 3;
    axios.put.mockRejectedValue('Internal Server Error');
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    try {
      await SubjectService.associateStudent(subjectId, studentId);
    } catch (error) {
      // Assert
      expect(error).toEqual('Internal Server Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', 'Internal Server Error');
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });
});
