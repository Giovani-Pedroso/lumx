"use client";
import React, { useState } from "react";
import CardDashboard from "./CardDashboard/CardDashboard";
import { GoGraph } from "react-icons/go";
import { BsGraphDown } from "react-icons/bs";
// import { ResponsiveLine } from "@nivo/line";
import Graph from "./Graph/Graph";
import Graph2 from "./Graph2/Graph2";
import SideBar from "./SideBar";

const cards = [
  {
    title: "FinanLoan",
    value: 20.23,
    icon: <GoGraph />,
    link: { name: "link", href: "#" },
  },
  {
    title: "CashSwift",
    value: 20.23,
    icon: <BsGraphDown />,
    link: { name: "link", href: "#" },
  },
  {
    title: "CreditEase",
    value: 20.23,
    icon: <BsGraphDown />,
    link: { name: "link", href: "#" },
  },
  {
    title: "LendWise",
    value: 20.23,
    icon: <GoGraph />,
    link: { name: "link", href: "#" },
  },
  {
    title: "FundFlex",
    value: 20.23,
    icon: <BsGraphDown />,
    link: { name: "link", href: "#" },
  },
  {
    title: "QuickCredit",
    value: 20.23,
    icon: <GoGraph />,
    link: { name: "link", href: "#" },
  },
  {
    title: "CashFlow Solutions",
    value: 20.23,
    icon: <GoGraph />,
    link: { name: "link", href: "#" },
  },
  {
    title: "MoneyMettle",
    value: 20.23,
    icon: <GoGraph />,
    link: { name: "link", href: "#" },
  },
  {
    title: "CapitalBoost",
    value: 20.23,
    icon: <GoGraph />,
    link: { name: "link", href: "#" },
  },
];

const dataGraph2 = [
  {
    title: "tahe",
    data: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
    ],
  },
  {
    title: "atrs atrs",
    data: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
    ],
  },
];
// Status do emprestioms
// Proxima data de pagamento de parcela
// Quantidade de parcelas
//
// Dash credor
// Atuais investimentos novas oportunidades de indestimento
// Novas oportunidades
// Investimentos atuais

// Fundos recebidos
// fundos depositados
// Historico de saques
function Dashboard() {
  const [toShow, setToShow] = useState("Geral");
  const handleShowGraph = () => {};
  return (
    <div className="flex flex-row  min-w-screen bg-bgOne min-h-screen">
      <SideBar />
      <div className="text-black flex justify-center items-center">{} </div>
      {/* <div className="mb-12"> */}
      {/*   <h1 className="text-4xl mb-8 text-left">Resumo</h1> */}
      {/*   <div> */}
      {/*     <div className="text-2xl">Fundos Recebidos:R$ {"1230.02"}</div> */}
      {/*     <div className="text-2xl">Fundos Deposidados:R$ {"1230.02"}</div> */}
      {/*     <div className="text-2xl">Fundos Recebidos:R$ {"1230.02"}</div> */}
      {/*   </div> */}
      {/*   </div> */}
      {/*   <div className="mb-12"> */}
      {/*     <h1 className="text-4xl text-left">Emprestimos recomendados</h1> */}
      {/*     <div className=" px-4 flex flex-row flex-wrap justify-around w-full items-center "> */}
      {/*       {cards.map((card) => { */}
      {/*         return <CardDashboard key={card.title} {...card} />; */}
      {/*       })} */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="mb-12"> */}
      {/*     <h1 className="text-4xl mb-8 text-left">Historico de emprestimos</h1> */}
      {/*     <div className="flex justify-center w-full "> */}
      {/*       <Graph /> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="mb-12"> */}
      {/*     <h1 className="text-4xl mb-8 text-left"> */}
      {/*       Seus emprestimos em andamento */}
      {/*     </h1> */}
      {/*       <div className="flex flex-row justify-center"> */}
      {/*         {dataGraph2.map((data) => { */}
      {/*            console.log(data);  */}
      {/*            return (  */}
      {/*              <Graph2 key={data.title} title={data.title} data={data.data} />  */}
      {/*            ); */}
      {/*          })}  */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
