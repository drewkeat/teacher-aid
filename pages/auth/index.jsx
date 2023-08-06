import LoginWrapper from "@/components/auth/LoginWrapper";
import SignupWrapper from "@/components/auth/SignupWrapper";
import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <LoginWrapper swapForm={() => setIsLogin(!isLogin)} />
      ) : (
        <SignupWrapper swapForm={() => setIsLogin(!isLogin)} />
      )}
    </>
  );
}
