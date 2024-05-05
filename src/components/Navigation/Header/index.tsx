import React from "react";
import Drawer from "./Drawer";

type Props = {
  clientName: string;
  valorConta: number;
};

function Header(props: Props) {
  return (
    <div className="flex flex-col bg-primary">
      <div className="bg-headerBg px-6 text-white text- ">
        Olá {props.clientName}
      </div>
      <div className="flex   items-center justify-between     p-6">
        <div>
          <Drawer />
        </div>
        <div className="flex md:text-[30px] flex-col">
          <div className="w-full">Meu patrimonio</div>
          <div>R${props.valorConta}</div>
        </div>
        <img className="w-[20%]" alt="logo" src="/logo.webp" />
      </div>
    </div>
  );
}

export default Header;
