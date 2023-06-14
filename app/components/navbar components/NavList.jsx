import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const NavList = ({
  navItem,
  isMenuOpen,
  setIsMenuOpen,
  activePage,
  setActivePage,
}) => {
  return (
    <div className="flex min-w-fit items-center justify-end mr-3">
      <ul className="hidden list-none flex-row justify-end gap-10 lg:flex ">
        {navItem.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className={`btn border-none mx-0 hover:bg-tria-gold flex-col-reverse items-center font-semibold ${
                  activePage === item.title ? "bg-zinc-600" : "bg-zinc-900"
                }`}
                href={item.href}
                onClick={() => {
                  setActivePage(item.title);
                }}
              >
                {item.title === "Basket" ? (
                  <div className="indicator">
                    <Image
                      className="invert w-8 h-9"
                      width={25}
                      height={25}
                      src={`/images/${item.img}`}
                      alt={`${item.img}`}
                    />
                    <span className="badge badge-lg text-black p-2 bg-tria-gold font-semibold text-xl indicator-item">
                      8
                    </span>
                  </div>
                ) : (
                  <Image
                    className="invert w-8 h-9"
                    width={25}
                    height={25}
                    src={`/images/${item.img}`}
                    alt={`${item.img}`}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <BurgerMenu
        navItem={navItem}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setActivePage={setActivePage}
      />
    </div>
  );
};

export default NavList;
