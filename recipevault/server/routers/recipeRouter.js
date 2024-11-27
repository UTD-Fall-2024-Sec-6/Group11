import express from 'express';
import { Recipe } from '../models/recipeModel.js';

const recipeRouter = express.Router();


// Create a Recipe
recipeRouter.post('/', async (req, res) => {
    const { id, recipe_name, ingredients, instructions, image } = req.body;
    try {
        const newRecipe = await Recipe.create({ id, recipe_name, ingredients, instructions, image });
        res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Error creating recipe', error });
    }
});

// Read All Recipes
recipeRouter.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes', error });
    }
});

// Read Single Recipe
recipeRouter.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findOne({ id: req.params.id });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found.' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipe', error });
    }
});

// Update Recipe
recipeRouter.put('/:id', async (req, res) => {
    const { recipe_name, ingredients, instructions } = req.body;
    try {
        const updatedRecipe = await Recipe.findOneAndUpdate(
            { id: req.params.id },
            { recipe_name, ingredients, instructions, image},
            { new: true }
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found.' });
        }

        res.status(200).json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Error updating recipe', error });
    }
});

// Delete Recipe
recipeRouter.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findOneAndDelete({ id: req.params.id });
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found.' });
        }

        res.status(200).json({ message: 'Recipe deleted successfully', recipe: deletedRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting recipe', error });
    }
});

export default recipeRouter;