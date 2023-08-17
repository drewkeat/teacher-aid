import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from "./firebase"

export const signUp = async(data) => {
  try{
    const {email, password, ...rest} = data
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await updateProfile(user, {
      displayName: rest.firstName + " " + rest.lastName
    })
    console.log(user)
  } catch(e){
    console.log("something went wrong", e)
  }

}

export const signIn = async (data) => {
  if(data.email && data.password){
    const {email, password} = data
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error.message)
    });
  }
}