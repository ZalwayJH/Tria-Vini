"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./navbar sub components/NavList";
import SearchBar from "./navbar sub components/SearchBar";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ subsets: ["latin"], variable: "--display-font" });

const navItem = [
  { title: "Home", href: "/", img: "Home-icon.png" },
  { title: "My Account", href: "/account", img: "my-account-icon.jpg" },
  { title: "Cart", href: "/cart", img: "basket-cart-icon.png" },
];

const Navbar = () => {
  return (
    <header
      className={`${cormorant.variable} sticky z-10 top-0 border-b-[0.2px] border-zinc-700  backdrop-blur-md `}
    >
      <nav className="w-full ">
        <div className="  h-24 flex items-center justify-between mx-auto p-4">
          <Link
            className="flex items-center flex-shrink-0"
            href="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Image
              className="mr-3"
              priority="true"
              src="/images/Tria-Vini-Logo.svg"
              width={75}
              height={75}
              alt="Logo"
            />
            <span className="flex self-center text-3xl font-semibold whitespace-nowrap text-tria-gold font-display">
              TRIA VINI
            </span>
          </Link>
          <SearchBar />
          <NavList navItem={navItem} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
