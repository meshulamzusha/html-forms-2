import express from 'express';
import { Student } from '../models/student.model.js';

const router = express.Router();


router.post('/register', async (req, res) => {
    const accept = req.body.termsAccepted == 'on' ? true : false
    try {
        const newStudent = new Student({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            gender: req.body.gender,
            course: req.body.course,
            termsAccepted: accept,
        });
        await newStudent.save();
        res.status(201).send("Registered successfully.")
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error.")
    }
})


router.get('/students', async (req, res) => {
    try {
        const students = await User.find();
        res.status(200).json(students)
    } catch (err) {
        console.log('Error fetching user data:', err);
        res.status(500).send("Internal server error.");
    }
})

export default router