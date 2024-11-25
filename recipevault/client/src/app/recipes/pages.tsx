import Image from "next/image"
import Link from "next/link"

const recipes = Array(12).fill({
    title: 'Grilled Steak',
    description: 'This is a sample description of a recipe',
    image: '/placeholder.svg?height=200&width=300',
  })

export default function Page () {
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
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            Show More
          </button>
        </div>
      </main>
    </div>

    )
}