import mongoose from 'mongoose';
import studentMessage from "../models/studentMessage.js";

export const getStudents = async (req, res)=>{
    try {
        const studentMessages = await studentMessage.find();

        res.status(200).json(studentMessages);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


export const getStudentsBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const firstName = new RegExp(searchQuery, "i");
        const lastName = new RegExp(searchQuery, "i");
        const grade = new RegExp(searchQuery, "i");

        const students = await studentMessage.find({ $or: [ { firstName },{ lastName },{grade} ]});

        res.json({ data: students });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;

    const newStudent = new studentMessage(student);

    try {

        await newStudent.save();

        res.status(201).json(newStudent);
        
    } catch (error) {

        res.status(409).json({ message: error.message});
        
    }
}

export const updateStudent = async (req, res) => {
    const { id: _id } = req.params;
    const student = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Student with that id');
    const updatedStudent = await studentMessage.findByIdAndUpdate(_id,{ ...student, _id}, {new: true});

    res.json(updatedStudent);
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Student with that id');

    await studentMessage.findByIdAndRemove(id);

    console.log('DELETE!');

    res.json ({ message: 'Student deleted Successfully '});


}