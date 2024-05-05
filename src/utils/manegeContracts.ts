import axios from "axios";

export const createContract = async (
  name: string,
  symbol: string,
  description: string,
  type: "fungible" | "non_fungible",
) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LUMX_PROJECT_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: `{"name":"${name}","symbol":"${symbol}","description":"${description}","type":"${type}"}`,
  };

  const data = await fetch(
    "https://protocol-sandbox.lumx.io/v2/contracts",
    options,
  );
  // console.log(data);
  const dataJson = await data.json();
  console.log(dataJson);
  return dataJson;
};

export const getWallet = async (id: string) => {
  const options = {
    method: "GET",
    headers: { Authorization: `Bearer ${process.env.LUMX_PROJECT_API_KEY}` },
  };

  try {
    const data = await fetch(
      `https://protocol-sandbox.lumx.io/v2/wallets/${id}`,
      options,
    );
    const dataJson = await data.json();
    // console.log(dataJson);
    return { data: dataJson, success: true };
  } catch (err: any) {
    console.log("manegeWallet", err.message);
    return { err, success: false };
  }
};
