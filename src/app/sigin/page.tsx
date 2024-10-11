// 'use client';

import signIn from "../services/dataAcess/cadastrarUsuario";

export default async function SignIn() {
  return <div>
    <h1>SignIn</h1>
    <div>
      <form>
        <h1 className="text-3xl font-bold underline ml-4 mt-6 align-middle text-center text-white">Login</h1>
        <div className="ml-4 mr-4 mt-6">
        <label className="block">
          <span className="block text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium">Password</span>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
        </div>
        <div className="ml-4 mr-4 mt-6">
        <button
        
        //   onClick={async (e) => {
        //     e.preventDefault();
        //     const email = document.getElementById("email") as HTMLInputElement;
        //     const password = document.getElementById("password") as HTMLInputElement;
        //     await signIn(email.value, password.value);
        //   }}
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
        </div>
      </form>
        </div>
  </div>
}