import prisma from "@/utils/db";
import { createWallet } from "@/utils/manegeWallet";
import bcrypt from "bcrypt";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
  success: boolean;
  error?: any;
};

export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { password, email, name } = await req.json();
  console.log("the email is", email);
  console.log("the password is", password);

  try {
    const dbUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!dbUser) {
      return NextResponse.json(
        {
          message: "Login failes cretae",
          data: null,
          success: false,
        },
        { status: 403 },
      );
    }

    // console.log("user", dbUser);
    const isPasswordCorrect = await bcrypt.compare(
      password,
      dbUser.hash_password,
    );

    if (dbUser && isPasswordCorrect) {
      const { hash_password, createAt, ...dbUserWithouPassword } = dbUser;

      return NextResponse.json(
        {
          message: "Login success ",
          data: dbUserWithouPassword,
          success: true,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        message: "Login failes cretae",
        data: null,
        success: false,
      },
      { status: 402 },
    );
  } catch (err) {
    console.log(err.message);
    return NextResponse.json(
      {
        message: "Login failes ",
        data: null,
        success: false,
      },
      { status: 201 },
    );
  }
}
