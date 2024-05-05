import prisma from "@/utils/db";
import { createContract } from "@/utils/manegeContracts";
import { createWallet, getWallet } from "@/utils/manegeWallet";
import bcrypt from "bcrypt";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const { name, symbol, description, type } = await req.json();
  const data = await createContract(name, symbol, description, type);
  return NextResponse.json(
    { message: "Contract created", data, success: false },
    { status: 201 },
  );
}
