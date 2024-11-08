import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors);

app.use("/auth", userRouter);

mongoose.connect(
    "mongodb+srv://cheesyratpan:RamRanch69420@recipevault.vlm4w.mongodb.net/RecipeVault?retryWrites=true&w=majority&appName=RecipeVault"
);

app.listen(3001, () => console.log("SERVER STARTED!"));