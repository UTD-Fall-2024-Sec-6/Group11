import mongoose from "mongoose";


const recipeSchema = mongoose.Schema(
    {
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
        },
        image: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


export const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);