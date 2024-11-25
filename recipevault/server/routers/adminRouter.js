import express from "express";
import { User } from "../models/userModel.js";
import { authenticateToken, authorizeAdmin } from "../middleware/authMiddleware.js";

const adminRouter = express.Router();

adminRouter.get("/users", authenticateToken, authorizeAdmin, async (req, res) => {
    try {
        const users = await User.find().select("-Password");
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});


export default adminRouter;
