"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const navItem = [
    { title: "Account", href: "/account" },
    { title: "Cart", href: "/cart" },
  ];

  return (
    <header>
      <nav className="z-20 flex h-32 w-full items-center bg-zinc-900">
        <Link className="absolute w-[150px] h-[150px] " href="/">
          <Image
            priority="true"
            src="/images/Tria-Vini-Logo.svg"
            fill={true}
            alt="Logo"
          />
        </Link>
        <div className="max-w-1xl mx-auto w-full justify-between px-10">
          <ul className="hidden list-none flex-row justify-end gap-10 sm:flex ">
            {navItem.map((item, i) => {
              return (
                <li key={i}>
                  <Link className=" text-white font-semibold" href={item.href}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className="flex flex-1 items-center justify-end sm:hidden"
            onBlur={() => {
              setisMenuOpen(false);
            }}
          >
            <Image
              priority="true"
              src={
                isMenuOpen ? "/images/Exit-Icon.png" : "/images/Menu-Icon.png"
              }
              height={35}
              width={35}
              alt="Burger menu"
              onClick={() => {
                setisMenuOpen(!isMenuOpen);
              }}
            />
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } absolute right-0 top-24 z-10 mx-4 my-2 min-w-[140px] rounded-xl bg-zinc-800 p-6 drop-shadow-lg`}
            >
              <ul className="flex list-none flex-col items-start justify-end gap-4">
                {navItem.map((item, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setisMenuOpen(false);
                      }}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
