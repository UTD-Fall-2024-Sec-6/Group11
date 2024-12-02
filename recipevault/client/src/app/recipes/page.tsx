"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

type Recipe = {
  id?: number; // Optional if the API doesn't guarantee it
  title: string;
  description: string;
  image: string;
};

export default function Page() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/api/recipes/")
      .then((response) => {
        setRecipes(response.data.data || []); // Safely handle undefined
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

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
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <div
                key={recipe.id || index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                  <p className="text-sm text-gray-600">{recipe.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No recipes were found. Try again later.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
