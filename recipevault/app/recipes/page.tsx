import { Suspense } from "react";
import RecipeCard from "../components/RecipeCard";

async function fetchRecipes() {
  try {
    const res = await fetch("http://localhost:3000/api/recipes", {method: "GET"})
    if (!res?.ok) {
      throw new Error("Failed to fetch recipes.")
    }
    return res?.json()
  } catch (e) {
    console.error("Error fetching recipes: ", e)
    return { recipes: [] }
  }
}

export default async function Page() {
  const { recipes } = await fetchRecipes();

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <form className="flex">
            <input
              type="text"
              placeholder="Search For A Recipe..."
              className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Suspense fallback={<div>Loading recipes...</div>}>
            {recipes.map((recipe: any) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </Suspense>
        </div>
      </main>
    </div>
  );
}