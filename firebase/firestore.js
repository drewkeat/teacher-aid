import { db } from "./firebase"
import { collection, doc, addDoc, setDoc, getDoc, getDocs, query, where } from 'firebase/firestore'

import User, {userConverter} from "../classes/User"

export class UsersController {
  async getAll(){
    const usersRef = collection(db, 'users').withConverter(userConverter)
    const snapshot = await getDocs(usersRef)
    const users = []
    snapshot.forEach( doc => users.push(doc.data()))
    return users
  }

  async create(user){
    const usersRef = collection(db, 'users').withConverter(userConverter)
    const userRef = await addDoc(usersRef, user)
    const userDoc = await getDoc(userRef)
    const persistedUser = new User({...userDoc.data(), id: userDoc.id})
    return persistedUser
  }
}
