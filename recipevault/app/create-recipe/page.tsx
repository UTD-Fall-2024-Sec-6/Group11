import Link from "next/link"

export default function Page () {
    return (
        <div className="min-h-screen flex flex-col">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-navy-blue mb-4">New Recipe</h1>
          <p className="text-gray-600 mb-8">
            Add your recipe description, ingredients, and images
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="recipe-name" className="font-medium">
                Recipe Name
              </label>
              <input
                id="recipe-name"
                placeholder="Enter Recipe title"
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
                className="min-h-[150px] w-full bg-gray-100 p-2 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="ingredients" className="font-medium">
                Ingredients List
              </label>
              <textarea
                id="ingredients"
                placeholder="Enter your ingredients list"
                className="min-h-[150px] w-full bg-gray-100 p-2 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Photos</label>
              <div className="border-2 border-dashed rounded-lg p-12 text-center">
                <p className="text-gray-500">Add Images Here</p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-navy-blue hover:bg-navy-blue/90">
                Save
              </button>
              <button
                className="w-full border-gray-200 text-gray-700"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold">Logo</div>
            
            <nav className="flex gap-6">
              <Link href="/recipes" className="hover:text-gray-600">
                Recipes
              </Link>
              <Link href="/my-recipes" className="hover:text-gray-600">
                My Recipes
              </Link>
              <Link href="/login" className="hover:text-gray-600">
                Login
              </Link>
              <Link href="/signup" className="hover:text-gray-600">
                Sign Up
              </Link>
              <Link href="/create-recipe" className="hover:text-gray-600">
                Create Recipe
              </Link>
            </nav>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2023 Created with love by RecipeApp. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/privacy" className="hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-600">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-gray-600">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}