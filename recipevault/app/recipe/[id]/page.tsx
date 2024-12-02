import { Suspense } from "react"

async function fetchRecipe(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/recipe?id=${id}`, {
      method: "GET",
      cache: 'no-store', // Use this for dynamic data
    })
    
    if (!res?.ok) {
      throw new Error("Failed to fetch recipe.")
    }
    
    return res?.json()
  } catch (e) {
    console.error("Error fetching recipe: ", e)
    return { recipe: null }
  }
}

export default async function RecipePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const { recipe } = await fetchRecipe(params?.id)

  // Handle case where recipe is not found
  if (!recipe) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-500">Recipe Not Found</h1>
      </div>
    )
  }

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
        </div>
      </Suspense>
    </div>
  )
}