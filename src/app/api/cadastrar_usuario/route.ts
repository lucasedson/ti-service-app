import cadastrarUsuario from "@/app/services/dataAcess/cadastrarUsuario"
import { NextResponse } from 'next/server'


export async function POST(request: Request, response: Response) {
    const info = await request.json()
    await cadastrarUsuario(info.email, info.password)

    // console.log("EMAIL: " + info.email)
    // console.log("PASSWORD: " + info.password)


    return NextResponse.json({ message: 'Hello,' + info.email })
}