import { get } from "http";
import db from "../firebaseConfig";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

function getPedidos() {
    const pedidosRef = collection(db, "pedidos")


    onSnapshot(pedidosRef, (snapshot) => {
        const pedidos = snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        return pedidos
    })
}

function getPedidosBySolicitante(solicitante: string) {
    const pedidosRef = collection(db, "pedidos")



}
    

export { getPedidos }