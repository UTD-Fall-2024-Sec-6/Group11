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

      <main className="container mx-auto px-4 mt-5">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="flex items-center justify-between gap-8">
                <div className="w-1/2">
                  <h1 className="text-7xl font-bold tracking-tight mb-4 text-gray-950">
                    RECIPE
                    <br />
                    VAULT
                  </h1>
                  <p className="text-gray-900 text-lg mb-8">
                    Explore a wide variety of recipes
                  </p>
                </div>
                <div className="w-1/2">
                  <img 
                    src="/static/images/Group 4913.png" 
                    alt="Recipe Vault"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-black"></div>
            </div>
          </div>

          <section className="mt-20 text-center">
            <h5 className="text-gray-600 text-sm uppercase tracking-wider mb-2">About Recipe Vault</h5>
            <h1 className="text-4xl font-bold mb-16">Why Choose Recipe Vault?</h1>
            
            <div className="flex items-center justify-between gap-12 mb-20">
              <div className="w-full">
                <img 
                  src="/static/images/brooke-lark-C1fMH2Vej8A-unsplash 1.png" 
                  alt="About Recipe Vault"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="w-1/2 text-left">
                <h2 className="text-3xl font-bold mb-4">Your Perfect Recipe Companion</h2>
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

      <footer className="bg-gray-100 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Recipe Vault</h3>
              <p className="text-gray-600 text-sm">
                Your perfect companion for discovering and organizing recipes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/recipes" className="hover:text-gray-900">Browse Recipes</Link></li>
                <li><Link href="/my-recipes" className="hover:text-gray-900">My Recipes</Link></li>
                <li><Link href="/categories" className="hover:text-gray-900">Categories</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-gray-900">FAQ</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Recipe Vault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
