import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../firebase/firebase"

export default async function handler(req, res){
  if(req.method === "GET"){
    const querySnapshot = await getDocs(collection(db, 'testUsers'))
    res.json(querySnapshot)
  }
}