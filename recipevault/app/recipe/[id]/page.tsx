import Image from "next/image"
import Link from "next/link"

export default function Page () {
    return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex gap-6">
            <Link className="text-sm hover:text-gray-600" href="/">
              Home
            </Link>
            <Link className="text-sm hover:text-gray-600" href="/my-recipes">
              My Recipes
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link className="text-sm hover:text-gray-600" href="/login">
              Login
            </Link>
            <Link className="text-sm hover:text-gray-600" href="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Charcuterie board with grapes and appetizers"
            className="object-cover"
            fill
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Recipe Name</h1>
            <button className="bg-black px-4 py-2 rounded-full text-white hover:bg-gray-800">
              Share Recipe
            </button>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">This is a sample description of a recipe</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
              <li>Ingredient 4</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Cooking Instructions</h2>
            <p className="text-gray-600">This is a detailed instruction guide on how to cook this recipe.</p>
          </section>
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold">Logo</div>
            <nav className="flex gap-6">
              <Link className="text-sm hover:text-gray-600" href="/recipes">
                Recipes
              </Link>
              <Link className="text-sm hover:text-gray-600" href="/my-recipes">
                My Recipes
              </Link>
              <Link className="text-sm hover:text-gray-600" href="/login">
                Login
              </Link>
              <Link className="text-sm hover:text-gray-600" href="/sign-up">
                Sign Up
              </Link>
              <Link className="text-sm hover:text-gray-600" href="/create-recipe">
                Create Recipe
              </Link>
            </nav>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8">
            © 2024 Created with love by RecipeApp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    )
}
