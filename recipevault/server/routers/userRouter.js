import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../models/userModel.js";
import { authenticateToken, authorizeAdmin } from "../middleware/authMiddleware.js";
import { JWT_AUTH_SECRET, JWT_USER_SECRET } from "../config.js";
const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
    const { userName, Password, Email, role } = req.body;
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
            role: role || "user", // Default role is "user"
        });

        res.status(201).json({
            message: 'User created successfully',
            user: { id: newUser._id, Email: newUser.Email, role: newUser.role },
        });
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
        const secret = user.role === "admin" ? JWT_ADMIN_SECRET : JWT_USER_SECRET;
        const token = jwt.sign(
            { id: user._id, Email: user.Email, role: user.role },
            secret,
            { expiresIn: '1h' }
        );
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

userRouter.get('/all', authenticateToken, authorizeAdmin, async (req, res) => {
    try {
        const users = await User.find().select('-Password'); // Exclude passwords
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

userRouter.get('/:id', authenticateToken, authorizeAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select('-Password');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});

userRouter.put('/:id', authenticateToken, authorizeAdmin, async (req, res) => {
    const { id } = req.params;
    const { userName, Email, role } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { userName, Email, role },
            { new: true, runValidators: true }
        ).select('-Password');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

userRouter.delete('/:id', authenticateToken, authorizeAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

userRouter.post('/logout', (req, res) => {
    // In a real app, invalidate the token or handle session logout
    res.status(200).json({ message: 'Logged out successfully' });
});

export default userRouter;