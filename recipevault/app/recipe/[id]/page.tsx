"use client";
import { Suspense, useState, useEffect } from "react"

async function fetchRecipe(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/recipe?id=${id}`, {
      method: "GET",
      cache: 'no-store', // Use this for dynamic data
    })
    // const { recipe } = await fetchRecipe(params?.id)

    if (!res.ok) {
      throw new Error("Failed to fetch recipe.")
    }
    
    return await res.json()
  } catch (e) {
    console.error("Error fetching recipe: ", e)
    return { recipe: null }
  }
}

export default function RecipePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const [recipe, setRecipe] = useState<any>(null);
  const [showShareLink, setShowShareLink] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const data = await fetchRecipe(resolvedParams.id);
      setRecipe(data.recipe);
    };
    fetchData();
  }, [params]);

  // Handle case where recipe is not found
  if (!recipe) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-white">Recipe Not Found</h1>
      </div>
    )
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<div>Loading recipe...</div>}>
        <div className="max-w-2xl mx-auto">
          
          {/* Recipe Image */}
          {recipe.image && (
            <img 
              src={recipe.image} 
              alt={recipe.recipe_name} 
              className="w-full h-96 object-cover rounded-lg mb-6 bg-gray-100"
            />
          )}

          <h1 className="text-3xl font-bold mb-4">{recipe.recipe_name}</h1>

          {/* Recipe Details */}
            <section className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside">
                {recipe.ingredients?.map((ingredient: string, index: number) => (
                  <li key={index} className="mb-1">{ingredient}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
              <p className="text-sm">{recipe.instructions}</p>
            </section>

          {/* Share Link Button */}
          <div className="mt-8">
            <button
              onClick={() => setShowShareLink(!showShareLink)}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              {showShareLink ? "Hide Share Link" : "Share Recipe"}
            </button>

            {showShareLink && (
              <div className="mt-4">
                <input
                  type="text"
                  readOnly
                  value={currentUrl}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            )}
          </div>
        </div>
      </Suspense>
    </div>
  )
}
