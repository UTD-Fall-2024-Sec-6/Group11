"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use this for navigation in the app directory

export default function EditRecipePage({ params }: { params: { id: string } }) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipeImage, setRecipeImage] = useState("");
  const router = useRouter(); // Correctly use next/navigation's useRouter

  useEffect(() => {
    // Fetch the recipe details by ID
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`/api/recipe?id=${params.id}`);
        if (!res.ok) {
          throw new Error("Failed to load recipe details.");
        }
        const data = await res.json();
        const recipe = data.recipe;
        setRecipeName(recipe.recipe_name);
        setRecipeDescription(recipe.instructions);
        setIngredients(recipe.ingredients || []);
        setRecipeImage(recipe.image || "");
      } catch (error) {
        alert("Failed to load recipe details.");
        router.push("/"); // Redirect to the home page on error
      }
    };
    fetchRecipe();
  }, [params.id, router]);

  const handleAddIngredient = () => {
    if (ingredients.length >= 40) {
      alert("You cannot add more than 40 ingredients.");
      return;
    }
    setIngredients([...ingredients, ""]);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation logic
    if (!recipeName.trim()) {
      alert("Recipe name is required.");
      return;
    }

    const filteredIngredients = ingredients.filter((ing) => ing.trim() !== "");
    if (filteredIngredients.length === 0) {
      alert("At least one ingredient is required.");
      return;
    }

    try {
      // Update the recipe via PUT request
      const res = await fetch(`/api/recipe`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: params.id,
          recipe_name: recipeName,
          ingredients: filteredIngredients,
          instructions: recipeDescription,
          image: recipeImage,
        }),
      });

      if (res.ok) {
        alert("Recipe updated successfully!");
        router.push(`/recipe/${params.id}`); // Redirect to the recipe page
      } else {
        throw new Error("Failed to update recipe.");
      }
    } catch (error) {
      alert("Failed to update recipe. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Edit Recipe</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="recipe-image" className="font-medium">
                Recipe Image URL
              </label>
              <input
                id="recipe-image"
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
                value={recipeDescription}
                onChange={(e) => setRecipeDescription(e.target.value)}
                className="w-full bg-gray-100 p-2 rounded-md min-h-[150px]"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Ingredients</label>
              <button
                type="button"
                onClick={handleAddIngredient}
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                Add Ingredient
              </button>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) =>
                      handleIngredientChange(index, e.target.value)
                    }
                    className="flex-1 bg-gray-100 p-2 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
