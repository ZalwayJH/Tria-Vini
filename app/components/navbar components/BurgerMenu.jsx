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
      <div>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute right-0 top-24 z-10 mx-4 my-1 min-w-[190px] menu rounded-box bg-zinc-800 p-2 drop-shadow-lg flex list-none flex-col gap-1 text-white `}
        >
          {navItem.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  className="gap-7  py-3 text-xl font-semibold "
                  href={item.href}
                  onClick={() => {
                    setActivePage(item.title);
                  }}
                >
                  <Image
                    className="invert w-5 h-5 "
                    width={5}
                    height={5}
                    src={`/images/${item.img}`}
                    alt={`${item.img}`}
                  />

                  {item.title === "Cart" ? (
                    <p className="text-white hover:text-tria-gold">
                      {item.title}
                      <span className="text-tria-gold badge badge-lg text-xl ml-4 ">
                        0
                      </span>
                    </p>
                  ) : (
                    <p className="text-white  hover:text-tria-gold ">
                      {item.title}
                    </p>
                  )}
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
