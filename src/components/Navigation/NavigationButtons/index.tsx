import Link from "next/link";
import React from "react";
import Buttons from "./Buttons";

const pages = [
  { pageName: "Depositar", href: "depositar" },
  { pageName: "Transferir", href: "transferir" },
  { pageName: "Negociar", href: "negociar" },
];
function NavigationButtons() {
  return (
    <div className="flex w-full justify-around">
      {pages.map((page) => {
        return (
          <Buttons
            namePage={page.pageName}
            href={page.href}
            key={page.pageName}
          />
        );
      })}
    </div>
  );
}

export default NavigationButtons;
