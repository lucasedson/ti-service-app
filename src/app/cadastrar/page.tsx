'use client';

import axios from "axios";
import { useState, useEffect } from "react";

// import signIn from "../services/dataAcess/sigin";

export default function Cadastrar() {
  const [status, setStatus] = useState("")

  useEffect(() => {
    console.log(status)
  }, [status])

  function cadastrar(email: string, password: string) {

      axios.post("http://localhost:3000/api/cadastrar_usuario", {
        email: email,
        password: password
      }).then((response) => {
        setStatus("Cadastrado com sucesso")
        // console.log(response.data)
        
      }).catch((error) => {
        setStatus("Erro ao cadastrar")
        
      })
      
  }

  

  


  return <div className="flex justify-center h-full items-center ">
  
    <div className="ml-4 mr-4 w-1/3">
      <form>
        <h1 className="text-3xl font-bold underline ml-4 mt-6 align-middle text-center text-white">Cadastrar</h1>
        <div className="ml-4 mr-4 mt-6">
        <label className="block">
          <span className="block text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium">Password</span>
          <input
            type="password"
            name="password"
            id="password"
            className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
        </div>
        <div className="ml-4 mr-4 mt-6">
        <button
        
          onClick={async (e) => {
            e.preventDefault();
            const email = document.getElementById("email") as HTMLInputElement;
            const password = document.getElementById("password") as HTMLInputElement;
            cadastrar(email.value, password.value);
          }}
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
        </div>
      </form>
        <div className="align-middle text-center bg-yellow-500 rounded-lg ml-4 mr-4 mt-6">
          <p className="text-black font-bold">{status}</p>
        </div>
        </div>
  </div>
}