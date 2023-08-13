import User from "../../classes/User"

//TODO: edit this to handle custom User objects without firebase logic
export default async function handler(req, res){
  if(req.method === "GET"){
    const users = await User.getAll()
    res.json(users)
  }
  if(req.method === "POST"){
    const data = JSON.parse(req.body)
    const user = new User(data)
    res.json(user)
  }
}