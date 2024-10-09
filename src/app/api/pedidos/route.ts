import { getPedidos } from '@/app/services/dataAcess/pedidosAcess'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const pedidos = await getPedidos()
  console.log(pedidos)
  return NextResponse.json({pedidos})
}