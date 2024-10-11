import Pedidos from "@/app/models/IPedidos";
import db from "../firebaseConfig";
import { collection, onSnapshot, getDocsFromServer, query, where, addDoc } from "firebase/firestore";


async function getPedidos() {


    const pedidosRef = collection(db, "pedidos")

    const snapshot = await getDocsFromServer(pedidosRef);

    const pedidos = snapshot.docs.map(doc => doc.data())
    return pedidos

}

async function getPedidosBySolicitante(solicitante: string) {
    const pedidosRef = collection(db, "pedidos")

    const q = query(pedidosRef, where("solicitante", "==", solicitante))

    const snapshot = await getDocsFromServer(q);

    const pedidos = snapshot.docs.map(doc => doc.data())
    return pedidos    
}

async function createPedidos(pedidos: Pedidos) {
    console.log(pedidos)
    const pedidosRef = collection(db, "pedidos")

    await addDoc(pedidosRef, pedidos)

    return pedidos

}

export { getPedidos, getPedidosBySolicitante, createPedidos }