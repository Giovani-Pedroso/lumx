import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiNDBjYzljMGItNGVmMS00NDY0LWIyNTAtN2NjZTM3NjRkNzgzIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDkxMTI1OH0.uOTDMIcmVkg7stPak51vlbIJmnSj4eSIa4TG-LNJe15b5PFFJCd8DEo0BiEKIQKqVCs94iJcoIrSqN-TIWEfBDjWxb052uNtL1djfA5HSKCI-Fh7kSyRqb0PAg19kIdyREspPmyvRJh-OsRAQULTwFnDgvvd7TiGnS8yz7c21xJwup2pHdve0gy1C15xRCFbonYAM57wWXCPtBIL9oRf7ZFqlf6m1RaJVStfP8JgdRwPPNbNvRtppldyfRJMZ94bI2wZXfyN8jDYwXuSsNZpb1Gpym5IFMCIzn4zNItpQo9QyKEc3pxE5A4Jii5W-uneYW01z3qAMs7WPjcbntunWNQSofPWtgOELIDZL3uZoSfBhWHlVJBWoRRH4cYTdcPP0A_LVmG_V9h2O8eYsGs-RggVda6KDSTqYvD1dgVzcYlGwRe0wdSCYRq3mxXuV3MrYgQeiwq-zGJkGwOsxGohaBjv-6muCllvjHAyMxQdhWVhC6XFyMY5R1n4XgQ_PPwE1zcQPFqkwVVZIiybV7sqUVrMs3QP_EMHQ5QtA66dD0TE8Mxh-mObweNq4i9I3Ur5Aeg3f7qEd2vNasmds3jG2smbvYgorkxv_78CYjtuNMkiK8fMyB0QzuBQivLGdDYp70rf1MbQsvWEg7MU-3Gh7rVUa_1mIlaAQd8OBc1RpEY"}`,
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
