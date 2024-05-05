"use client";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { getServerAuthSession } from "../../lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/hero.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Transforme seu futuro financeiro
            </h1>
            <p className="mb-5">nastr asrtn asrtnoe arstno sratneoi tsra o</p>
            <button className="btn btn-primary">
              <Link href={"/login"}> Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
