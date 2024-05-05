import prisma from "@/utils/db";
import { createContract } from "@/utils/manegeContracts";
import { createWallet, getWallet } from "@/utils/manegeWallet";
import bcrypt from "bcrypt";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  //
  console.log("tar atsr ");
  const contractId = req.url.split("/").slice(-1)[0];
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LUMX_PROJECT_API_KEY}`,
      "Content-Type": "application/json",
    },
    // body: `{"name":"${body.name}","description":"${body.description}","maxSupply":${parseInt(body.maxSupply)},"}`,
    body: `{"name":"${body.name}","description":"${body.description}","maxSupply":${body.maxSupply}}`,
    // body: `{"name":"${body.name}","description":"${body.description}","maxSupply":${parseInt(body.maxSupply)},"}`,
  };

  try {
    const data = await fetch(
      `https://protocol-sandbox.lumx.io/v2/contracts/${contractId}/token-types`,
      options,
    );
    const dataJson = await data.json();
    return NextResponse.json(
      { data: dataJson, message: "Token created", success: false },

      { status: 201 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { data: null, message: "aoaoao a", success: false },

      { status: 500 },
    );
  }
  // console.log(body);
  // const data = await createContract(name, symbol, description, type);
}
