import LoginForm from "@/components/home/LoginForm"
import SignUpForm from "@/components/home/SignupForm"
import { useState } from "react"

export default function Auth(){
  const [isLogin, setIsLogin] = useState(true)
  return(
    <>{isLogin ? <LoginForm swapForm={() => setIsLogin(!isLogin)}/> : <SignUpForm swapForm={()=>setIsLogin(!isLogin)}/>}</>
  )
}