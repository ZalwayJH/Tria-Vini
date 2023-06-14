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
    <div className="max-w-1xl mx-auto w-full justify-end px-10">
      <ul className="hidden list-none flex-row justify-end gap-10 lg:flex ">
        {navItem.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className={`btn hover:bg-tria-gold flex-col-reverse gap-1 items-center font-semibold ${
                  activePage === item.title && "bg-zinc-600"
                }`}
                href={item.href}
                onClick={() => {
                  setActivePage(item.title);
                }}
              >
                {item.title === "Cart" ? (
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <Image
                        className="invert w-8 h-8"
                        width={25}
                        height={25}
                        src={`/images/${item.img}`}
                        alt={`${item.img}`}
                      />
                      <span className="badge badge-lg text-white p-2 bg-tria-gold font-semibold text-xl indicator-item">
                        8
                      </span>
                    </div>
                  </label>
                ) : (
                  <Image
                    className="invert w-8 h-8"
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
