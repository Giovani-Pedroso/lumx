"use client";
import React from "react";
type Props = {
  name: string;
  icon: any;
};
function ButtonPayment(props: Props) {
  const handelClick = () => {
    alert("Ainda não implementado");
  };
  return (
    <button
      onClick={handelClick}
      className=" flex  w-full my-4 items-center border border-white p-4 rounded-lg cursor-pointer"
    >
      {props.name}
      <span className="text-2xl ml-4">{props.icon}</span>
    </button>
  );
}

export default ButtonPayment;
