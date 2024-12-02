"use client";

import { useRouter } from "next/navigation"

// Client Component for individual recipe cards
export default function RecipeCard({ recipe }: any) {
  const router = useRouter();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => router.push(`/recipe/${recipe._id}`)}
    >
    {!recipe.image ? 
      <img
        src="/" // You might want to use recipe.image if available
        alt={recipe.recipe_name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      :
      <img
        src={recipe.image} // You might want to use recipe.image if available
        alt={recipe.recipe_name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
    }
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.recipe_name}</h3>
        <p className="text-sm text-gray-600">{recipe.instructions}</p>
      </div>
    </div>
  );
}

