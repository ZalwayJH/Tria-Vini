"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./navbar components/NavList";
import SearchBar from "./navbar components/SearchBar";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ subsets: ["latin"], variable: "--display-font" });

const navItem = [
  { title: "Home", href: "/", img: "Home-icon.png" },
  { title: "My Account", href: "/account", img: "my-account-icon.jpg" },
  { title: "Basket", href: "/cart", img: "basket-cart-icon.png" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  return (
    <header className={cormorant.variable}>
      <nav className="w-full">
        <div className=" h-24 bg-zinc-900 flex  items-center justify-between mx-auto p-4">
          <Link
            className="flex items-center"
            href="/"
            onClick={() => {
              setActivePage("Home");
            }}
          >
            <Image
              className="mr-3"
              priority="true"
              src="/images/Tria-Vini-Logo.svg"
              width={75}
              height={75}
              // fill={true}
              alt="Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-tria-gold font-display">
              TRIA VINI
            </span>
          </Link>
          <SearchBar />
          <NavList
            navItem={navItem}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
