import axios from "axios";

export const createWallet = async () => {
  const options = {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.LUMX_PROJECT_API_KEY}` },
  };

  const data = await fetch(
    "https://protocol-sandbox.lumx.io/v2/wallets",
    options,
  );
  const dataJson = await data.json();
  console.log(dataJson);
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .catch((err) => console.error(err));

  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${process.env.LUMX_PROJECT_API_KEY}`,
  // };
  //
  try {
    const data = await fetch(
      "https://protocol-sandbox.lumx.io/v2/wallets",
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
