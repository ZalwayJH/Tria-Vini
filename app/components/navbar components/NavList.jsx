import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from "./Drawer";

const NavList = ({ navItem, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="flex min-w-fit items-center justify-end mr-3 ">
      <ul className="hidden list-none mx-5 flex-row justify-end gap-10 lg:flex ">
        {navItem.map((item, i) => {
          return (
            <li
              key={i}
              className="tooltip tooltip-bottom"
              data-tip={item.title}
            >
              <Link
                className="btn btn-ghost btn-circle  border-none mx-0 hover:bg-tria-gold flex-col-reverse items-center font-semibold "
                href={item.href}
                scroll={true}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {item.title === "Cart" ? (
                  <div className="indicator">
                    <Image
                      className="invert w-7 h-8"
                      width={25}
                      height={25}
                      src={`/images/${item.img}`}
                      alt={`${item.img}`}
                    />
                    <span className="badge badge-lg z-0 text-black p-2 bg-tria-gold font-semibold text-xl indicator-item">
                      8
                    </span>
                  </div>
                ) : (
                  <Image
                    className="invert w-7 h-8"
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
      <Drawer navItem={navItem} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default NavList;
