import React from "react";

export default function CardDashboard(props) {
  return (
    <div className="my-4 bg-white  rounded-lg ">
      <div className="px-2 border-b-2 flex">{props.title}</div>
      <div className="p-2 flex items-center">
        <div className="text-black">R$ {props.value}</div>
        <div className="ml-2 text-[40px] text-colorOne">{props.icon}</div>
      </div>
      <div className="bg-[#6e05ff] px-2 rounded-b-lg">
        <a href={props.link.href}>{props.link.name}</a>
      </div>
    </div>
  );
}
