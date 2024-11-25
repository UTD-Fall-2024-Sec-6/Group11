import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../models/userModel.js";

const userRouter = express.Router();
const JWT_SECRET = 'insert_token_here';

userRouter.post('/signup', async (req, res) => {
    const { userName, Password, Email } = req.body;
    try {
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        const newUser = await User.create({
            userName,
            Password: hashedPassword,
            Email,
        });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up user', error });
    }
});


userRouter.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

userRouter.post('/logout', (req, res) => {
    // In a real app, invalidate the token or handle session logout
    res.status(200).json({ message: 'Logged out successfully' });
});

export default userRouter;