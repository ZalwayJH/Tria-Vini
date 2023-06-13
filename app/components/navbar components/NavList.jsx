import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const NavList = ({ navItem, isMenuOpen, setIsMenuOpen }) => {
  const [activePage, setActivePage] = useState("Home");
  return (
    <div className="max-w-1xl mx-auto w-full justify-between px-10">
      <ul className="hidden list-none flex-row justify-end gap-10 lg:flex ">
        {navItem.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className=" inline-flex flex-col-reverse gap-1 items-center font-semibold"
                href={item.href}
                onClick={() => {
                  setActivePage(item.title);
                }}
              >
                <p
                  className={
                    item.title === activePage
                      ? `text-tria-gold text-xl `
                      : `text-white hover:text-tria-gold text-xl`
                  }
                >
                  {item.title}
                </p>
                <Image
                  className="invert w-5 h-5"
                  width={20}
                  height={20}
                  src={`/images/${item.img}`}
                  alt={`${item.img}`}
                />
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
