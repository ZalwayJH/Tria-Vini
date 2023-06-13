"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./navbar components/NavList";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ subsets: ["latin"], variable: "--display-font" });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItem = [
    { title: "Home", href: "/", img: "my-account-icon.jpg" },
    { title: "My Account", href: "/account", img: "my-account-icon.jpg" },
    { title: `Cart (${0})`, href: "/cart", img: "basket-cart-icon.png" },
  ];

  return (
    <header className={cormorant.variable}>
      <nav className="z-20 flex h-32 w-full items-center bg-zinc-900">
        <div className="flex flex-row items-center h-32 ">
          <Link className="relative w-[120px] h-[120px] ml-3" href="/">
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
        />
      </nav>
    </header>
  );
};

export default Navbar;
