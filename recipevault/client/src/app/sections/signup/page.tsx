import React, { useState } from "react";
import Link from "next/link";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "user", // Default role
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          Password: formData.password,
          Email: formData.email,
          role: formData.role,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage("Account created successfully!");
      } else {
        const error = await response.json();
        setMessage(error.message || "Error creating account");
      }
    } catch (err) {
      setMessage("An unexpected error occurred");
    }
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-2xl w-full px-6 py-8 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[#031749]">Create an Account</h1>
        <h2 className="text-sm font-bold text-center mb-8">Join our Recipe Community</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="userName"
              value={formData.userName}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-black focus:ring-black"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#031749] text-white py-2 px-4 rounded hover:bg-transparent hover:text-[#031749] hover:border hover:border-[#031749] transition-all"
          >
            Create Account
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-black hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
