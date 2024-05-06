"use client";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";

const pages = [
  { pageName: "Depositar", href: "/depositar" },
  { pageName: "Sacar", href: "sacar" },
  { pageName: "Negociar", href: "negociar" },
  { pageName: "Acompanhar carteira", href: "carteira" },
];

function Drawer() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.setItem("user_info", "");
    router.push("/login");
  };
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {pages.map((page) => (
            <li key={page.pageName}>
              <a href={page.href}>{page.pageName}</a>
            </li>
          ))}
          {/* <li onClick={handleLogout}> */}
          {/*   <a>Logout</a> */}
          {/* </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
