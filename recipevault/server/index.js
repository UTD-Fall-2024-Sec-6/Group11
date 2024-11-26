import { PORT, MONGO_URL } from './config.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import sessionMiddleware from "./middleware/sessionMiddleware.js";
import userRouter from './routers/userRouter.js';
import recipeRouter from './routers/recipeRouter.js';

const app = express();
app.use(express.json());
app.use(sessionMiddleware);
app.use(cors());

// Routers
app.use('/api/users', userRouter);
app.use('/api/recipes', recipeRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the RecipeVault Application");
});

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });