"use client";
import axios from "axios";
import { getUser } from "../../utils/getUser";
import Link from "next/link";
import React, { useState } from "react";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    // const asn = await getUser();
    // console.log(asn);
    // alert(password);
    const res = await axios.post("/api/user/x", { email, password });
    localStorage.setItem("user_info", JSON.stringify(res.data));
    router.push("/user/depositar");
  };

  return (
    <main className=" flex justify-center items-center min-h-screen">
      <div className="bg-primary p-4 rounded-md">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white ">Email:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input text-black input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white ">Password:</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type here"
            className="input text-black input-bordered w-full max-w-xs"
          />
        </label>
        <button onClick={handleLogin} className="btn btn-secondary w-full mt-3">
          {" "}
          Entrar
        </button>
        <Link className="underline  w-full justify-center " href={"/signup"}>
          <p className=" text-center mt-3">Criar conta</p>
        </Link>
      </div>
    </main>
  );
}

export default Login;
