import CourseService from '@/services/CourseService';
import axios from 'axios';

jest.mock('axios');

describe('CourseService', () => {
  it('should fetch courses successfully', async () => {
    // Arrange
    const expectedData = [{ id: 1, name: 'Course 1' }];
    axios.get.mockResolvedValue({ data: expectedData });

    // Act
    const courses = await CourseService.getCourses();

    // Assert
    expect(courses).toEqual(expectedData);
  });

  it('should handle errors when fetching courses', async () => {
    // Arrange
    axios.get.mockRejectedValue('Internal Server Error');
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Act
    try {
      await CourseService.getCourses();
    } catch (error) {
      // Assert
      expect(error).toEqual('Internal Server Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', 'Internal Server Error');
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });
});
