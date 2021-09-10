import express from 'express';

import { getStudentsBySearch, getStudents, createStudent, updateStudent, deleteStudent } from '../controllers/students.js';

const router = express.Router();

router.get('/', getStudents);
router.get('/search', getStudentsBySearch);
router.post('/', createStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;