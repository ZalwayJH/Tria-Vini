"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const NavItem = [
    { title: "Account", href: "/account" },
    { title: "Cart", href: "/cart" },
  ];

  return (
    <header>
      <nav className="z-20 flex h-32 w-full items-center bg-zinc-900 px-10">
        <Link className="absolute w-[150px] h-[150px] " href="/">
          <Image
            priority="true"
            src="/images/Tria-Vini-Logo.svg"
            fill={true}
            alt="Logo"
          />
        </Link>
        <div className="max-w-1xl mx-auto w-full justify-between">
          <ul className="hidden list-none flex-row-reverse gap-10 sm:flex ">
            {NavItem.map((item) => {
              return (
                <li key={item.id}>
                  <Link className=" text-white font-semibold" href={item.href}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
