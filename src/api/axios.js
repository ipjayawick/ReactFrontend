import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/tasks'; 

// Fetch all tasks
export const fetchTasks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Add a new task
export const addTask = async (task) => {
  const response = await axios.post(API_BASE_URL, task);
  return response.data;
};

// Update an existing task
export const updateTask = async (taskId, updatedTask) => {
  const response = await axios.put(`${API_BASE_URL}/${taskId}`, updatedTask);
  return response.data;
};

// Delete a task
export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_BASE_URL}/${taskId}`);
  return response.data;
};


// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8080',  // Your backend API URL
//   withCredentials: true,  // Send cookies with every request (important for session-based auth)
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

