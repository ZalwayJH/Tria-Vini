"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./navbar components/NavList";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ subsets: ["latin"], variable: "--display-font" });

const navItem = [
  { title: "Home", href: "/", img: "my-account-icon.jpg" },
  { title: "My Account", href: "/account", img: "my-account-icon.jpg" },
  { title: "Cart", href: "/cart", img: "basket-cart-icon.png" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  return (
    <header className={cormorant.variable}>
      <nav className="z-20 flex h-32 w-full items-center bg-zinc-900">
        <div className="flex flex-row items-center h-32 ">
          <Link
            className="relative w-[120px] h-[120px] ml-3"
            href="/"
            onClick={() => {
              setActivePage("Home");
            }}
          >
            <Image
              priority="true"
              src="/images/Tria-Vini-Logo.svg"
              fill={true}
              alt="Logo"
            />
          </Link>
          <h1 className="ml-2 font-display whitespace-nowrap text-4xl text-tria-gold lg:block hidden">
            TRIA VINI
          </h1>
        </div>
        <NavList
          navItem={navItem}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </nav>
    </header>
  );
};

export default Navbar;
