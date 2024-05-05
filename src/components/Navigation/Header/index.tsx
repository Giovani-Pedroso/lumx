import React from "react";

type Props = {
  clientName: string;
  valorConta: number;
};

function Header(props: Props) {
  return (
    <div className="flex flex-col">
      <div className="bg-headerBg px-6 text-white text- ">
        Olá {props.clientName}
      </div>
      <div className="flex   justify-between   justify-between  p-6">
        <div className="flex md:text-[30px] flex-col">
          <div className="">Meu patrimonio</div>
          <div>R${props.valorConta}</div>
        </div>
        <img className=" h-[50px] w-[50px]" alt="logo" src="./fbcoin.png" />
      </div>
    </div>
  );
}

export default Header;
