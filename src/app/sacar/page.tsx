"use client";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { getServerAuthSession } from "../../lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BoxContainer from "@/components/UI/ButtonPayments/Box";
import ButtonG from "@/components/ButtonG";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <BoxContainer title={"Sacar"}>
        <div>
          <div className="inputDeposito">
            <input
              className="border border-secondary p-2 rounded-lg mb-2 text-secondary"
              type="text"
              placeholder="Valor para sacar"
            />
            <div>
              <ButtonG title={"Sacar"} />
              <ButtonG title={"Voltar"} />
            </div>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}
