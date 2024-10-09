"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { stringify } from "querystring";




export default function Home() {


    const [pedidos, setPedidos] = useState([]);
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
        
        {/* {String(pedidos.map((pedido) => (
          <div key={p}>
        ))} */}
      </div>
    );
  }

