import React, { useEffect, useState } from "react";

interface Recipe {
  id: string;
  recipe_name: string;
  ingredients: string[];
  instructions: string;
  image: string;
}

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data: Recipe[] = await response.json();
        setRecipes(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">All Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={recipe.image}
                alt={recipe.recipe_name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{recipe.recipe_name}</h2>
              <p className="text-gray-600 line-clamp-3">
                {recipe.ingredients.join(", ")}
              </p>
              <a
                href={`/recipes/${recipe.id}`}
                className="block mt-4 text-blue-500 hover:underline"
              >
                View Recipe
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RecipesPage;

