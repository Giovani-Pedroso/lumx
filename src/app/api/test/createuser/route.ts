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
  const { name } = await req.json();
  console.log(process.env.LUMX_PROJECT_API_KEY);
  return Response.json({ mess: "ok" });
}
