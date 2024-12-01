"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin (e: any) {
    e.preventDefault();
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          username: username,
          password: password, 
      })
    })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl w-full px-6 py-8 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#031749]">Welcome Back</h1>
        <h2 className="text-sm font-bold text-center mb-8">Discover and Share Amazing Recipes</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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