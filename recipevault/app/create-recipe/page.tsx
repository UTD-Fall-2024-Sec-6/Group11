"use client";
import React, { useState } from 'react'
import Link from "next/link"

export default function Page() {
  const [ingredients, setIngredients] = useState([''])
  const [recipeName, setRecipeName] = useState('')
  const [recipeDescription, setRecipeDescription] = useState('')

  const handleAddIngredient = () => {
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

  async function handleSubmit(e: any) {
    e.preventDefault()
    // Filter out empty ingredients
    const filteredIngredients = ingredients.filter(ingredient => ingredient.trim() !== '')
    
    console.log({
      recipeName,
      recipeDescription,
      ingredients: filteredIngredients
    })
    // Add your submission logic here
    const res = await fetch("/api/recipe", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: "",
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
              <label htmlFor="recipe-name" className="font-medium">
                Recipe Name
              </label>
              <input
                id="recipe-name"
                placeholder="Enter Recipe title"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                className="w-full bg-gray-100 p-2 rounded-md"
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
              <label className="font-medium">
                Ingredients List
              </label>
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
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddIngredient}
                className="w-full bg-green-500 text-white p-2 rounded-md mt-2"
              >
                Add Ingredient
              </button>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Photos</label>
              <div className="border-2 border-dashed rounded-lg p-12 text-center">
                <p className="text-gray-500">Add Images Here</p>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                type="submit"
                className="w-full bg-navy-blue text-white hover:bg-navy-blue/90 p-2 rounded-md"
              >
                Save
              </button>
              <button
                type="button"
                className="w-full border-gray-200 text-gray-700 p-2 rounded-md"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}