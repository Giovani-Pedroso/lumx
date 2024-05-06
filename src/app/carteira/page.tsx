"use client";
import CardAtivos from "@/components/CardAtivos";
import BoxContainer from "@/components/UI/ButtonPayments/Box";
import { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";
import { FaMonero } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

function Carteira() {
  const [priceBitcoin, setPriceBitcon] = useState("loading");
  const [priceFBlock, setPriceFBlock] = useState("loading");
  const [priceEth, setEthFBlock] = useState("loading");
  const [priceMonero, setPriceMonero] = useState("loading");

  useEffect(() => {
    const getBitcoinPrice = async () => {
      try {
        const apiUrl =
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl";

        const rest = await fetch(apiUrl);
        const data = await rest.json();
        const price = data.bitcoin.brl.toString();
        setPriceBitcon(price);
      } catch (e: any) {
        console.log(e.message);
      }
    };
    const getEthPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl",
        );
        if (!response.ok) {
          throw new Error("Erro ao obter os dados do Ethereum");
        }
        const data = await response.json();
        const ethereumPriceBRL = data.ethereum.brl;
        setEthFBlock(ethereumPriceBRL);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    };

    const getMoneroPrice = async () => {
      const brlToXmrRate = 0.0002;
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl",
        );
        if (!response.ok) {
          throw new Error("Erro ao obter os dados do Ethereum");
        }
        const data = await response.json();
        const ethereumPriceBRL = data.ethereum.brl;
        const ethereumPriceXmr = ethereumPriceBRL * brlToXmrRate;
        setPriceMonero(ethereumPriceXmr);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    };

    const getFBlockTokens = async () => {
      const apiKey =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiNDBjYzljMGItNGVmMS00NDY0LWIyNTAtN2NjZTM3NjRkNzgzIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDkxMTI1OH0.uOTDMIcmVkg7stPak51vlbIJmnSj4eSIa4TG-LNJe15b5PFFJCd8DEo0BiEKIQKqVCs94iJcoIrSqN-TIWEfBDjWxb052uNtL1djfA5HSKCI-Fh7kSyRqb0PAg19kIdyREspPmyvRJh-OsRAQULTwFnDgvvd7TiGnS8yz7c21xJwup2pHdve0gy1C15xRCFbonYAM57wWXCPtBIL9oRf7ZFqlf6m1RaJVStfP8JgdRwPPNbNvRtppldyfRJMZ94bI2wZXfyN8jDYwXuSsNZpb1Gpym5IFMCIzn4zNItpQo9QyKEc3pxE5A4Jii5W-uneYW01z3qAMs7WPjcbntunWNQSofPWtgOELIDZL3uZoSfBhWHlVJBWoRRH4cYTdcPP0A_LVmG_V9h2O8eYsGs-RggVda6KDSTqYvD1dgVzcYlGwRe0wdSCYRq3mxXuV3MrYgQeiwq-zGJkGwOsxGohaBjv-6muCllvjHAyMxQdhWVhC6XFyMY5R1n4XgQ_PPwE1zcQPFqkwVVZIiybV7sqUVrMs3QP_EMHQ5QtA66dD0TE8Mxh-mObweNq4i9I3Ur5Aeg3f7qEd2vNasmds3jG2smbvYgorkxv_78CYjtuNMkiK8fMyB0QzuBQivLGdDYp70rf1MbQsvWEg7MU-3Gh7rVUa_1mIlaAQd8OBc1RpEY";

      const walletId = "5e9cf802-151f-4062-a9ca-004851181945";
      const contractId = "2e58242e-5ef8-4f8a-9c2e-899d1d8d29dd";
      try {
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        };
        const data = await fetch(
          `https://protocol-sandbox.lumx.io/v2/wallets/${walletId}`,
          options,
        );

        const dataJson = await data.json();
        const quantityTokensF = dataJson.tokens[0].quantity;
        const quantityTokensFString = quantityTokensF
          .toString()
          .split("")
          .splice(0, 3)
          .join("");
        console.log(quantityTokensFString);
        setPriceFBlock(quantityTokensFString);
      } catch (err: any) {
        // O Servidor da Lumx esta com erro 500
        setPriceFBlock("500");

        console.log(err.message);
      }
    };

    getEthPrice();
    getBitcoinPrice();
    getFBlockTokens();
    getMoneroPrice();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <BoxContainer title={"Dashboard"}>
        <CardAtivos
          sym="BTC$"
          name="Bitcoin"
          value={priceBitcoin}
          icon={<FaBitcoin />}
        />
        <CardAtivos
          sym="ETH$"
          name="Ethereum"
          value={priceEth}
          icon={<FaEthereum />}
        />
        <CardAtivos
          sym="MTX$"
          name="Monero"
          value={priceMonero}
          icon={<FaMonero />}
        />
        <CardAtivos
          sym="FBT$"
          name="FBlock token"
          value={priceFBlock}
          icon={<FaBox />}
        />
      </BoxContainer>
    </div>
  );
}

export default Carteira;
