import { useState } from "react";
import DashBoard from "../DashBoard/DashBoard";
import Deposito from "../Deposito/Deposito";
import Negociacao from "../Negociacao/Negociacao";
import Sacar from "../Deposito/Deposito";

type Props = {
  title: string;
  children: any;
};

export default function BoxContainer(props: Props) {
  const date = new Date(Date.now());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return (
    <div className="flex flex-col rounded-t-[24px] rounded-b-[24px]  bg-box w-[450px]">
      <div className="p-15 justify-around flex">
        <h1 className="text-[36px]">
          FBLOCK <br />
          <strong>{props.title}</strong>
        </h1>

        <p>
          <strong>Data</strong> <br />
          {`${day}/${month}/${year}`}
        </p>
      </div>
      <div className="bg-white p-4 rounded-b-[24px] rounded-t-[20px]">
        {props.children}
      </div>
    </div>
  );
}
