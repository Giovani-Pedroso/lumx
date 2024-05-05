import React from "react";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import ButtonPayment from "@/components/UI/ButtonPayments";
import { FaWallet } from "react-icons/fa";
const paymentMethods = [
  { name: "Pix", icon: <FaPix /> },
  { name: "Cartão", icon: <FaRegCreditCard /> },
  { name: "Boleto", icon: <FaBarcode /> },
  { name: "Wallet", icon: <FaWallet /> },
];
function page() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] ">
      <div className="m-auto bg-sectionBg md:w-[50%] p-8 rounded-lg">
        <div className="">
          <p>Valor para depositar:</p>
          <input
            className="bg-none my-4 text-black p-4 w-full border-white rounded-lg "
            type="number"
            placeholder="Valor para depositar R$"
          />
        </div>
        <div>
          <p>Meios de pagamento:</p>
          {paymentMethods.map((method) => (
            <ButtonPayment
              key={method.name}
              name={method.name}
              icon={method.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
