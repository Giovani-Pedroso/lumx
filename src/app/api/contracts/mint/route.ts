import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  //
  console.log("tar atsr ");

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LUMX_PROJECT_API_KEY}`,
      "Content-Type": "application/json",
    },

    body: `{"walletId":"${body.walletId}","contractId":"${body.contractId}","quantity":${body.quantity}}`,
  };

  try {
    const data = await fetch(
      "https://protocol-sandbox.lumx.io/v2/transactions/mints",
      options,
    );
    const dataJson = await data.json();
    return NextResponse.json(
      { data: dataJson, message: "Contract deployed", success: true },

      { status: 201 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { data: null, message: "aoaoao a", success: false },

      { status: 500 },
    );
  }
}

/*
  *
,
    );
  }
}

/*
2e58242e-5ef8-4f8a-9c2e-899d1d8d29dd
5e9cf802-151f-4062-a9ca-004851181945
199
  */
