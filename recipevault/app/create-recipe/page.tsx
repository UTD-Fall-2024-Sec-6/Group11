"use client";
import React, { useState } from 'react'
import Link from "next/link"

export default function Page() {
  const [ingredients, setIngredients] = useState([''])
  const [recipeName, setRecipeName] = useState('')
  const [recipeDescription, setRecipeDescription] = useState('')
  const [recipeImage, setRecipeImage] = useState("");

  const handleAddIngredient = () => {
    if (ingredients.length >= 40) {
      alert("You cannot add more than 40 ingredients.");
      return;
    }
    setIngredients([...ingredients, ''])
  }

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index)
    setIngredients(newIngredients)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    // Validation for recipe name
    const alphanumericRegex = /^[a-zA-Z0-9 ]*$/;
    if (!recipeName.trim()) {
      alert("Recipe name is required.");
      console.log("Recipe name is required.");
      return;
    }
    if (recipeName.length > 100) {
      alert("Recipe name cannot exceed 100 characters.");
      return;
    }
    if (!alphanumericRegex.test(recipeName)) {
      alert("Recipe name must only contain alphanumeric characters.");
      return;
    }

    // Filter out empty ingredients
    const filteredIngredients = ingredients.filter(ingredient => ingredient.trim() !== '')
    
    // Validation for ingredients
    if (filteredIngredients.length === 0) {
      alert("At least one ingredient is required.");
      return;
    }
    if (filteredIngredients.length > 40) {
      alert("You cannot have more than 40 ingredients.");
      return;
    }
    for (const ingredient of filteredIngredients) {
      if (ingredient.length > 50) {
        alert("Each ingredient cannot exceed 50 characters.");
        return;
      }
    }
    
    console.log({
      recipeName,
      recipeDescription,
      ingredients: filteredIngredients,
      image: recipeImage
    })
    // Add your submission logic here
    const res = await fetch("/api/recipe", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: recipeImage,
        recipe_name: recipeName,
        ingredients: filteredIngredients,
        instructions: recipeDescription
      })
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-navy-blue mb-4">New Recipe</h1>
          <p className="text-gray-600 mb-8">
            Add your recipe description, ingredients, and images
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="recipe-image" className="font-medium">
                Recipe Image URL
              </label>
              <input
                id="recipe-image"
                placeholder="Enter Image URL"
                value={recipeImage}
                onChange={(e) => setRecipeImage(e.target.value)}
                className="w-full bg-gray-100 p-2 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="recipe-name" className="font-medium">
                Recipe Name
              </label>
              <input
                id="recipe-name"
                placeholder="Enter Recipe title"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                className="w-full bg-gray-100 p-2 rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="recipe-description" className="font-medium">
                Recipe Description
              </label>
              <textarea
                id="recipe-description"
                placeholder="Tell us about your recipe"
                value={recipeDescription}
                onChange={(e) => setRecipeDescription(e.target.value)}
                className="min-h-[150px] w-full bg-gray-100 p-2 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="font-medium">
                  Ingredients List
                </label>
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="w-fit bg-black text-white text-sm p-2 rounded-md mt-2"
                >
                  Add Ingredient
                </button>
              </div>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    placeholder={`Ingredient ${index + 1}`}
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    className="flex-1 bg-gray-100 p-2 rounded-md"
                  />
                  {ingredients.length > 1 && (
                    <button 
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className="bg-white border-2 text-gray-500 px-2 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button 
                type="submit"
                className="w-full bg-navy-blue text-white bg-black rounded-full font-bold px-2 py-4 mt-8"
              >
                Create Recipe
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
