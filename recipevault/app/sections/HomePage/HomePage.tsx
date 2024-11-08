import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-900">
            <Link href="/recipes" className="hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link href="/my-recipes" className="hover:text-gray-900">
              My Recipes
            </Link>
          </div>
          <div className="space-x-4 text-sm">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link href="/signup" className="text-gray-600 hover:text-gray-900">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <h1 className="text-5xl font-bold tracking-tight mb-4 text-gray-950">
                RECIPE
                <br />
                VAULT
              </h1>
              <p className="text-gray-900 text-lg mb-8">
                Create, save, share recipes
              </p>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-black"></div>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <Link 
              href="/signup"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/recipes"
              className="border border-black px-6 py-3 rounded hover:bg-gray-50 transition-colors"
            >
              Browse Recipes
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
