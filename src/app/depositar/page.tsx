"use client";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { getServerAuthSession } from "../../../lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BoxContainer from "@/components/UI/ButtonPayments/Box";
import ButtonG from "@/components/ButtonG";
import handler from "../api/test_prisma";

export default function Home() {
  const [value, setValeu] = useState("");

  const handleDeposito = async () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiNDBjYzljMGItNGVmMS00NDY0LWIyNTAtN2NjZTM3NjRkNzgzIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDkxMTI1OH0.uOTDMIcmVkg7stPak51vlbIJmnSj4eSIa4TG-LNJe15b5PFFJCd8DEo0BiEKIQKqVCs94iJcoIrSqN-TIWEfBDjWxb052uNtL1djfA5HSKCI-Fh7kSyRqb0PAg19kIdyREspPmyvRJh-OsRAQULTwFnDgvvd7TiGnS8yz7c21xJwup2pHdve0gy1C15xRCFbonYAM57wWXCPtBIL9oRf7ZFqlf6m1RaJVStfP8JgdRwPPNbNvRtppldyfRJMZ94bI2wZXfyN8jDYwXuSsNZpb1Gpym5IFMCIzn4zNItpQo9QyKEc3pxE5A4Jii5W-uneYW01z3qAMs7WPjcbntunWNQSofPWtgOELIDZL3uZoSfBhWHlVJBWoRRH4cYTdcPP0A_LVmG_V9h2O8eYsGs-RggVda6KDSTqYvD1dgVzcYlGwRe0wdSCYRq3mxXuV3MrYgQeiwq-zGJkGwOsxGohaBjv-6muCllvjHAyMxQdhWVhC6XFyMY5R1n4XgQ_PPwE1zcQPFqkwVVZIiybV7sqUVrMs3QP_EMHQ5QtA66dD0TE8Mxh-mObweNq4i9I3Ur5Aeg3f7qEd2vNasmds3jG2smbvYgorkxv_78CYjtuNMkiK8fMyB0QzuBQivLGdDYp70rf1MbQsvWEg7MU-3Gh7rVUa_1mIlaAQd8OBc1RpEY"}`,
        "Content-Type": "application/json",
      },

      body: `{"walletId":"5e9cf802-151f-4062-a9ca-004851181945","contractId":"2e58242e-5ef8-4f8a-9c2e-899d1d8d29dd","quantity":${parseInt(value)}}`,
    };

    try {
      const data = await fetch(
        "https://protocol-sandbox.lumx.io/v2/transactions/mints",
        options,
      );
      const dataJson = await data.json();
      console.log(dataJson);
    } catch (err: any) {
      console.log(err);
    }
    alert("Desositado o dinheiro foi depositado na sua carteira cripto");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <BoxContainer title={"Depositar"}>
        <div>
          <div className="inputDeposito">
            <input
              className="border border-secondary p-2 rounded-lg mb-2 text-secondary"
              value={value}
              onChange={(e) => setValeu(e.target.value)}
              type="number"
              placeholder="Valor do deposito"
            />
            <div>
              <ButtonG onClick={handleDeposito} title={"Depositar"} />
              <ButtonG title={"Voltar"} />
            </div>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}
