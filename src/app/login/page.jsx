"use client";
import Link from "next/link";
import React, { useRef } from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email"
            className="p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-right mt-4">
          <Link href="/register">
            <span className="text-xs text-blue-500 hover:underline">
              Don't have an account? Register
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
