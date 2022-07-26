import Link from "next/link";
import React, { useState } from "react";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";

function login() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <div className="flex flex-col items-center  w-screen h-screen justify-center gap-14 ">
      <header>
        <Link href="/">
          <img src="/logo.svg" className="cursor-pointer" alt="" />
        </Link>
      </header>
      <main>
        {isLogin ? (
          <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <SignUpPage isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </main>
    </div>
  );
}

export default login;
