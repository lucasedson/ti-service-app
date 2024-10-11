import {auth} from "../firebaseConfig"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default async function cadastrarUsuario(email: string, password: string) {
//   const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user)
      // ...
    })
}