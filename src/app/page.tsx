"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { stringify } from "querystring";
import { randomUUID } from "crypto";
import Pedidos from "./models/IPedidos";




export default function Home() {


    const [pedidos, setPedidos]  = useState([]);
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
      <div className="text-white">
        <h1 className="text-3xl font-bold underline text-white">Pedidos</h1>
        <div className=" flex justify-around">
        
        {

          pedidos.pedidos.map((ped:Pedidos) => (
            <div key={ped.id} className="text-white justify-center mr-6">

              <p>{ped.id}</p>
              <p>{ped.solicitante}</p>
              <p>{ped.descricao}</p>
              <p>{ped.servico}</p>
              <p>{ped.status}</p>
              <p>{ped.data_criacao}</p>

          </div>
          ))
        }
        
        
        </div>

  </div>
      
    );
  }

