import prisma from "@/utils/db";
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(req: NextRequest) {
  console.log(req.nextUrl);
  console.log("executando");
  return Response.json({ mess: "ok" });
}

export async function POST(req: NextRequest) {
  const { password, email, name } = await req.json();
  console.log("the email is", email);
  console.log("the name is", name);
  console.log("the password is", email);

  // const newUser = await prisma.user.create({
  //   data: {
  //     id: 2,
  //     name,
  //     email,
  //     hash_password,
  //   },
  // });
  //
  return Response.json({ mess: "ok" });
}
