import React from "react";

function SideBar() {
  return (
    <div className="text-black min-h-screen w-[300px] bg-primary flex flex-col">
      <div className="flex justify-center  rounded-full">
        <img className=" w-[80%] rounded-full" src="/Face.jpeg" />
      </div>
      <ul className="flex flex-col px-3">
        <li className="btn btn-secondary my-2">Visão Geral</li>
        <li className="btn btn-secondary my-2">Desenpenho</li>
        <li className="btn btn-secondary my-2">Comparação</li>
        <li className="btn btn-secondary my-2">Diversificação</li>
      </ul>
    </div>
  );
}

export default SideBar;
