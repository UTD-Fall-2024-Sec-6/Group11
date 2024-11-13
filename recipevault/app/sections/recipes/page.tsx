import React from 'react';

const RecipesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">All Recipes</h1>
        {/* Recipe grid will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recipe cards will be mapped here */}
        </div>
      </main>
    </div>
  );
};

export default RecipesPage; 