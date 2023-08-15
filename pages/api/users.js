import User from "../../classes/User"
import { UsersController } from "@/firebase/firestore"

//TODO: edit this to handle custom User objects without firebase logic
export default async function handler(req, res){
  const controller = new UsersController()
  if(req.method === "GET"){
    const users = await controller.getAll()
    res.json(users)
  }
  if(req.method === "POST"){
    const data = JSON.parse(req.body)
    const init = new User(data)
    const user = await controller.create(init)
    res.json(user)
  }
}