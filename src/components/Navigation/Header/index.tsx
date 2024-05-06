import React from "react";
import Drawer from "./Drawer";

type Props = {
  clientName: string;
  valorConta: number;
};

function Header(props: Props) {
  return (
    <div className="flex flex-col bg-primary">
      <div className="flex   items-center justify-between     p-6">
        <div>
          <Drawer />
        </div>
        <div className="flex md:text-[30px] flex-col">
          <input
            className="flex rounded-lg w-450 justify-between p-25 mx-auto"
            id="input-supeior-inicial"
            type="text"
          />
        </div>
        <img className="w-[10%]" alt="logo" src="/logo.webp" />
      </div>
    </div>
  );
}

export default Header;
