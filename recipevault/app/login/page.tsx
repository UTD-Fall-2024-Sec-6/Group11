"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/init';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      // Use Firebase's signInWithEmailAndPassword method
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Successfully logged in
      console.log("Logged in user:", userCredential.user);
      
      // Redirect to home or dashboard page
      router.push('/'); // Adjust the route as needed
    } catch (error: any) {
      // Handle specific Firebase authentication errors
      switch (error.code) {
        case 'auth/invalid-email':
          setError("Invalid email address.");
          break;
        case 'auth/user-disabled':
          setError("This account has been disabled.");
          break;
        case 'auth/user-not-found':
          setError("No account found with this email.");
          break;
        case 'auth/wrong-password':
          setError("Incorrect password.");
          break;
        default:
          setError("An error occurred. Please try again.");
          console.error(error);
      }
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl w-full px-6 py-8 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#031749]">Welcome Back</h1>
        <h2 className="text-sm font-bold text-center mb-8">Discover and Share Amazing Recipes</h2>
        
        {error && (
          <div className="mb-4 text-center text-red-600">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#031749] text-white py-2 px-4 rounded hover:bg-transparent hover:border hover:border-[#031749] hover:text-[#031749] transition-all"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="text-black hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;