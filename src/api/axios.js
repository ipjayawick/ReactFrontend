import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',  // Your backend API URL
  withCredentials: true,  // Send cookies with every request (important for session-based auth)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example of sending a request
export const fetchTasks = async () => {
  try {
    const response = await axiosInstance.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export default axiosInstance;
