"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ subsets: ["latin"], variable: "--display-font" });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItem = [
    { title: "My Account", href: "/account", img: "my-account-icon.jpg" },
    { title: `Cart (${0})`, href: "/cart", img: "basket-cart-icon.png" },
  ];

  return (
    <header className={cormorant.variable}>
      <nav className="z-20 flex h-32 w-full items-center bg-zinc-900">
        <div className="flex flex-row items-center h-32 ">
          <Link
            className="relative w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] ml-3"
            href="/"
          >
            <Image
              priority="true"
              src="/images/Tria-Vini-Logo.svg"
              fill={true}
              alt="Logo"
            />
          </Link>
          <h1 className="font-display whitespace-nowrap text-4xl text-tria-gold lg:block hidden">
            TRIA VINI
          </h1>
        </div>
        <div className="max-w-1xl mx-auto w-full justify-between px-10">
          <ul className="hidden list-none flex-row justify-end gap-10 sm:flex ">
            {navItem.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    className=" text-white font-semibold inline-flex flex-col-reverse gap-1 items-center"
                    href={item.href}
                  >
                    <p> {item.title}</p>
                    <Image
                      className="invert"
                      width={20}
                      height={15}
                      src={`/images/${item.img}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className="flex flex-1 items-center justify-end sm:hidden "
            onBlur={() => {
              setIsMenuOpen(false);
            }}
          >
            <Image
              className="cursor-pointer"
              priority="true"
              src={
                isMenuOpen ? "/images/Exit-Icon.png" : "/images/Menu-Icon.png"
              }
              height={35}
              width={35}
              alt="Burger menu"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } absolute right-0 top-24 z-10 mx-4 my-1 min-w-[140px] rounded-xl bg-zinc-800 p-2 drop-shadow-lg`}
            >
              <ul className="flex list-none flex-col gap-2 w-full ">
                {navItem.map((item, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    >
                      <button className="rounded-md hover:bg-zinc-600 w-full py-3 text-center ">
                        <Link href={item.href}>
                          <p>{item.title}</p>
                        </Link>
                      </button>
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
