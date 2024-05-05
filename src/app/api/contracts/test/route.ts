import prisma from "@/utils/db";
import { createWallet, getWallet } from "@/utils/manegeWallet";
import bcrypt from "bcrypt";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const body = req.json;
  return NextResponse.json(
    { message: "stareio oneisrat ", success: false },
    { status: 200 },
  );
}
