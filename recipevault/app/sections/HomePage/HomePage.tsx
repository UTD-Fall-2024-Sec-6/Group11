import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 mt-5">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="flex items-center justify-between gap-8">
                <div className="w-1/2">
                  <h1 className="text-7xl font-bold tracking-tight mb-4 text-[#031749]">
                    RECIPE
                    <br />
                    VAULT
                  </h1>
                  <p className="text-gray-900 text-lg mb-8">
                    Explore a wide variety of recipes
                  </p>
                </div>
                <div className="w-full">
                  <img 
                    src="/static/images/JumbotronImage.jpg" 
                    alt="Recipe Vault"
                    className="w-full h-[500px] object-cover opacity-85"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-black"></div>
            </div>
          </div>

          <section className="mt-20 text-center">
            <h5 className="text-gray-600 text-sm uppercase tracking-wider mb-2">About Recipe Vault</h5>
            <h1 className="text-4xl font-bold mb-16 text-[#031749]">Why Choose Recipe Vault?</h1>
            
            <div className="flex items-center justify-between gap-12 mb-20">
              <div className="w-full">
                <img 
                  src="/static/images/brooke-lark-C1fMH2Vej8A-unsplash 1.png" 
                  alt="About Recipe Vault"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-1/2 text-left">
                <h2 className="text-3xl font-bold mb-4 text-[#031749]">Your Perfect Recipe Companion</h2>
                <p className="text-gray-600 text-lg">
                  Recipe Vault helps you discover, save, and organize your favorite recipes. 
                  Whether you're a seasoned chef or just starting out, we've got everything 
                  you need to make your cooking journey enjoyable.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4">
                  {/* Replace with your icon */}
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-600">Simple and intuitive interface for managing your recipes</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4">
                  {/* Replace with your icon */}
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Organize Recipes</h3>
                <p className="text-gray-600">Keep all your favorite recipes in one place</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4">
                  {/* Replace with your icon */}
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Share & Discover</h3>
                <p className="text-gray-600">Connect with other food enthusiasts</p>
              </div>
            </div>
          </section>

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
