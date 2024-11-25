import mongoose from "mongoose";
import { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema({
    Role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    userName: {
        type: String,
        unique: [true, "An account with this username already exists."],
        required: [true, "A username is required."]
    },
    Email: {
        type: String,
        unique: [true, "An account with this email already exists."],
        required: [true, "An email is required."]
    },
    Password: {
        type: String,
        required: [true, "A password is required."]
    }
}, {timestamps: true});

export default mongoose.models.User || mongoose.model("User", UserSchema);
