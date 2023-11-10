import React from 'react';
import { useUserAuth } from './_utils/auth-context';

const Login = () => {
  const { gitHubSignIn } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <style>
        {`
          .text-teal {
            color: #14b8a6; /* This is your custom teal color */
          }
          .signInButton {
            background-color: white;
            color: #14b8a6;
            border-color: #14b8a6;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          .signInButton:hover {
            background-color: #14b8a6;
            color: white;
          }
        `}
      </style>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-3xl tracking-tight font-bold text-teal md:text-4xl">
            Sign In
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Please sign in to view the requested page.
          </p>
          <button
            onClick={handleSignIn}
            className="inline-flex items-center justify-center border signInButton font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
