import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchStudents = () => API.get('/students');
export const fetchStudentsBySearch = (searchQuery) => API.get(`/students/search?searchQuery=${searchQuery.search || 'none'}`);
export const createStudent = (newStudent) => API.post('/students', newStudent);
export const updateStudent = (id, updatedStudent) => API.patch(`/students/${id}`, updatedStudent);
export const deleteStudent = (id) => API.delete(`/students/${id}`);