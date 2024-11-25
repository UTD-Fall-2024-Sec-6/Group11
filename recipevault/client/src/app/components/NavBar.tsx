import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
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
  )
}

export default NavBar