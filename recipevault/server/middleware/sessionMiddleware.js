import session from "express-session";
import MongoStore from "connect-mongo";
import { MONGO_URL, SESSION_SECRET } from "../config.js";

const sessionMiddleware = session({
    secret: SESSION_SECRET, // Replace with your secure secret
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
        maxAge: 1000 * 60 * 60, // 1 hour
    },
    store: MongoStore.create({
        mongoUrl: MONGO_URL,
        collectionName: "sessions",
    }),
});

export default sessionMiddleware;
