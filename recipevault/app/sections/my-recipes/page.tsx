import React from 'react';

const MyRecipesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Recipes</h1>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            Add New Recipe
          </button>
        </div>
        {/* Personal recipe grid will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Personal recipe cards will be mapped here */}
        </div>
      </main>
    </div>
  );
};

export default MyRecipesPage; 