"use client";
import { useEffect } from "react";
// components/Layout.js

import { useRouter } from "next/navigation";
import Footer from "./Footer";
import Header from "@/components/Navigation/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("user_info");
    if (!user) {
      alert("É necessario estar logado para ver essa pagina");
      router.push("/login");
    }
  }, []);
  return (
    <div className="">
      <Header clientName="Jaora" valorConta={300.0} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
