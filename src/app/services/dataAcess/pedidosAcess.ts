import db from "../firebaseConfig";
import { collection, onSnapshot, getDocsFromServer, } from "firebase/firestore";


async function getPedidos() {


    const pedidosRef = collection(db, "pedidos")

    const snapshot = await getDocsFromServer(pedidosRef);

    const pedidos = snapshot.docs.map(doc => doc.data())
    return pedidos

}


export { getPedidos }