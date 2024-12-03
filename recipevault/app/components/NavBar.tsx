"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth } from '../firebase/init'
import { signOut, onAuthStateChanged, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-900">
          <Link href="/recipes" className="hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">|</span>
          <Link href="/create-recipe" className="hover:text-gray-900">
            New Recipe
          </Link>
        </div>
        <div className="space-x-4 text-sm flex items-center">
          {user ? (
            <>
              <span className="text-gray-800 mr-4 text-opacity-60">
                Signed in as: {user.email}
              </span>
              <button 
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-3 py-1 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link href="/signup" className="text-gray-600 hover:text-gray-900">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar