"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Pedidos from "./models/IPedidos";


export default function Home() {


  const [pedidos, setPedidos]: [Pedidos, any] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/pedidos");
        setPedidos(response.data);
      } catch (err) {
        setError([]);
        console.error("Erro ao carregar os pedidos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  

  return (
    <div className="ml-6 mr-6  mt-6 text-white flex flex-row justify-end">
      <div className=" flex flex-col justify-center w-[350px] bg-slate-900   rounded-lg">


        <h1 className="text-3xl font-bold underline ml-4 mt-6 align-middle text-center text-white">Pedidos</h1>

        {

          pedidos.pedidos.map((ped: Pedidos) => (

            <div key={ped.id} className="text-white justify-center ml-4 mr-6 mt-6 bg-slate-950 p-2 rounded-lg">

              <p className="font-light text-sm"><b>ID: </b> {ped.id}</p>
              <p><b>Solicitante: </b>{ped.solicitante}</p>
              <p><b>Descrição: </b> {ped.descricao}</p>
              <p><b>Serviço:</b>{ped.servico}</p>
              <p><b>Status:</b>{ped.status}</p>
              <p><b>Data de Criação:</b>{Date(ped.data_criacao).toLocaleLowerCase()}</p>

              <div className="mt-4 flex flex-row justify-between align-middle flex-1">

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
                  Concluir
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Editar
                </button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Excluir
                </button>
              </div>

            </div>
          ))
        }


      </div>

    </div>

  );
}

