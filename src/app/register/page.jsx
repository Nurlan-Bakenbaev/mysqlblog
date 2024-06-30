"use client";
import { TextField } from "@mui/material";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg duration-300 shadow-lg hover:shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form className="flex flex-col space-y-4">
          <TextField id="username" label="Username" variant="outlined" />
          <TextField required id="outlined-required" label="Email" />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-right mt-4">
          <Link href="/login">
            <span className="text-xs text-blue-500">
              Already have an Account?
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
