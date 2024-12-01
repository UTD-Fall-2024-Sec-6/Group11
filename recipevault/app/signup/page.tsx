"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const SignupPage = () => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp (e: any) {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        role: role,
        email: email,
        username: username,
        password: password
      })
  })
}

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-2xl w-full px-6 py-8 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#031749]">Create an Account</h1>
        <h2 className="text-sm font-bold text-center mb-8">Join our Recipe Community</h2>
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className="w-full bg-[#031749] text-white py-2 px-4 rounded hover:bg-transparent hover:text-[#031749] hover:border hover:border-[#031749] transition-all"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-black hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;