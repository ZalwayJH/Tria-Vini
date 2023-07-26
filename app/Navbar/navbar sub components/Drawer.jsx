import React from "react";
import Link from "next/link";
import Image from "next/image";
import DrawerSearchBar from "./DrawerSearchBar";
const Drawer = ({ navItem }) => {
  return (
    <div className="drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-circle p-1 btn-ghost">
          <Image
            className="cursor-pointer"
            priority="true"
            src={"/images/Menu-Icon.png"}
            height={50}
            width={50}
            alt="Drawer menu"
            aria-label="Expand drawer button"
          />
        </label>
      </div>
      <div className="drawer-side lg:hidden">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-zinc-800 ">
          <div className="flex-row-reverse justify-between inline-flex">
            <span className="h-7 text-xl underline cursor-pointer whitespace-nowrap text-blue-300  ">
              Sign out
            </span>
            <Image
              className="mb-2"
              priority="true"
              src="/images/Tria-Vini-Logo.svg"
              width={75}
              height={75}
              alt="Logo"
            />
          </div>
          {navItem.map((item, i) => {
            return (
              <li key={i}>
                <div className="menu-title divider m-0"></div>
                <Link
                  className="gap-7 hover:bg-none  py-3 text-xl font-semibold "
                  href={item.href}
                  onClick={() => {
                    document.getElementById("my-drawer-3").click();
                    window.scrollTo(0, 0);
                  }}
                >
                  <Image
                    className="invert w-5 h-5 "
                    width={5}
                    height={5}
                    src={`/images/${item.img}`}
                    alt={`${item.img}`}
                  />

                  {item.title === "Basket" ? (
                    <p className="text-white hover:text-tria-gold">
                      {item.title}
                      <span className="text-black bg-tria-gold badge badge-lg text-xl ml-6 ">
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
          <DrawerSearchBar />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
