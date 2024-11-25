import { PORT, MONGO_URL } from './config.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import recipeRouter from './routers/recipeRouter.js';
import adminRouter from './routers/adminRouter.js';
const app = express();
app.use(express.json());
app.use(cors());

// Routers
app.use('/api/users', userRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/admin', adminRouter)

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