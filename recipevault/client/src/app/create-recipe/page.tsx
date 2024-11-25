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
    </div>
    )
}