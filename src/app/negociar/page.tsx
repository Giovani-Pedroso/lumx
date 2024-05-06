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
      <BoxContainer title={"Negociar"}>
        <div>
          <div className="inputDeposito">
            <div className="flex justify-center">
              <ButtonG title={"Emprestar"} />
              <ButtonG title={"Tomar emprestimo"} />
              <ButtonG title={"Voltar"} />
            </div>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}
