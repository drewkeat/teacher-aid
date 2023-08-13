import { collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore'
import { db } from "../firebase/firebase"

const usersCollection = collection(db, 'users')

export default class User{
  constructor({id=null, firstName, lastName, email, password}) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
  }

  //TODO: move this to another class that is responsible for converting Firestore data to custome classes
  static async getAll() {
    const usersSnapshot = await getDocs(usersCollection)
    const users = []
    usersSnapshot.forEach(doc => {
      const u = new User({id: doc.id, ...doc.data()})
      users.push(u)
    })
    return users
  }
}