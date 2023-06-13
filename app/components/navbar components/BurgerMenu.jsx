import React from "react";
import Link from "next/link";
import Image from "next/image";

const BurgerMenu = ({ navItem, isMenuOpen, setIsMenuOpen, setActivePage }) => {
  return (
    <div className="flex flex-1 items-center justify-end lg:hidden ">
      <Image
        className="cursor-pointer"
        priority="true"
        src={isMenuOpen ? "/images/Exit-Icon.png" : "/images/Menu-Icon.png"}
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
                <Link
                  href={item.href}
                  onClick={() => {
                    setActivePage(item.title);
                  }}
                >
                  <button className="rounded-md hover:bg-zinc-600 w-full py-3 text-center hover:text-tria-gold ">
                    <p>{item.title}</p>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
