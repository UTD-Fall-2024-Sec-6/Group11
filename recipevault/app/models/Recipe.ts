import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },        
    recipe_name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    }
}, {timestamps: true})

export default mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);