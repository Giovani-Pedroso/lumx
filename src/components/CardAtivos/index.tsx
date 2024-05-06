import React from "react";

type Props = {
  name: string;
  icon: any;
  value: number;
  sym: string;
};

function CardAtivos(props: Props) {
  return (
    <div className="flex mb-2 flex-row text-black items-center">
      <div className="text-3xl mr-2">{props.icon}</div>
      <div className="mr-2">{props.name}:</div>
      <div>
        {props.sym} {props.value}
      </div>
    </div>
  );
}

export default CardAtivos;
