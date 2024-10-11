import { createPedidos, getPedidos, getPedidosBySolicitante } from '@/app/services/dataAcess/pedidosAcess'
import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'


export async function GET(request: Request, response: Response) {
  const { searchParams } = new URL(request.url)

  if (!searchParams.has('solicitante')) {
    const pedidos = await getPedidos()
    return NextResponse.json({pedidos})
  }

  const solicitante = searchParams.get('solicitante')
  const pedidos = await getPedidosBySolicitante(String(solicitante))
  console.log(pedidos)
  return NextResponse.json({pedidos})
}

export async function POST(request: Request, response: Response) {
  const pedidos = await request.json()
  const pedidos_final = {...pedidos, "id": String(randomUUID()), "data_criacao": Date.now()}
  
  const result = await createPedidos(pedidos_final)
  return NextResponse.json({result})
}