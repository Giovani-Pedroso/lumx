import prisma from "@/utils/db";
import { createWallet, getWallet } from "@/utils/manegeWallet";
import bcrypt from "bcrypt";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
  success: boolean;
  error?: any;
};

export async function GET(req: NextRequest, res: NextApiResponse) {
  const query = req.nextUrl;
  const walletId = query.searchParams.get("walletID") as string;
  console.log();
  console.log("executando");

  const walletData = await getWallet(walletId);
  console.log(walletData);
  // return Response.json({ mess: "ok" });
  //
  return NextResponse.json({ mss: "tsar" }, { status: 200 });
}

export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { password, email, name } = await req.json();
  console.log("the email is", email);
  console.log("the name is", name);
  console.log("the password is", email);
  const saltRounds = 14;
  const hash_password = await bcrypt.hash(password, saltRounds);

  const walletData = await createWallet();
  const walletDataString = JSON.stringify(walletData);
  console.log(walletDataString);

  try {
    const newUser = await prisma.user.create({
      data: {
        id: walletData.data.id,
        name,
        wallet: walletDataString,
        email,
        hash_password,
      },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "User alread exist", success: false },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "User created", success: true },
    { status: 201 },
  );
}
