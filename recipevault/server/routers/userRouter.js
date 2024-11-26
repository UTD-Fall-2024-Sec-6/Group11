import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import { isAuthenticated, isAdmin } from "../middleware/authMiddleware.js";

const userRouter = express.Router();


userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find().select("-Password");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});


userRouter.post("/signup", async (req, res) => {
    const { userName, Password, Email, role } = req.body;
    try {
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        const newUser = await User.create({
            userName,
            Password: hashedPassword,
            Email,
            role: role || "user", // Default role is "user"
        });

        res.status(201).json({
            message: "User created successfully",
            user: { id: newUser._id, Email: newUser.Email, role: newUser.role },
        });
    } catch (error) {
        res.status(500).json({ message: "Error signing up user", error });
    }
});


userRouter.post("/login", async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        console.log("Logging in user with role:", user.role);
        
        req.session.userId = user._id;
        req.session.role = user.role;

        res.status(200).json({
            message: "Login successful",
            user: { id: user._id, Email: user.Email, role: user.role },
        });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
});


userRouter.get("/:id", isAuthenticated, isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select("-Password");
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
});


userRouter.put("/:id", isAuthenticated, isAdmin, async (req, res) => {
    const { id } = req.params;
    const { userName, Email, role } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { userName, Email, role },
            { new: true, runValidators: true }
        ).select("-Password");
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
});


userRouter.delete("/:id", isAuthenticated, isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
});


userRouter.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Error logging out", error: err });
        }
        res.clearCookie("connect.sid"); // Clearing the session cookie
        res.status(200).json({ message: "Logged out successfully" });
    });
});

export default userRouter;
