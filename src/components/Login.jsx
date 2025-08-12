import React, { useState } from 'react';

const AuthForm = ({ isLogin, toggleAuthMode }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Sign In to Mihu' : 'Create Your Account'}
      </h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:black focus:black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:black"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-600">
        {isLogin ? (
          <>
            Don’t have an account?{' '}
            <button onClick={toggleAuthMode} className="text-black hover:underline">
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button onClick={toggleAuthMode} className="text-black hover:underline">
              Log in
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
