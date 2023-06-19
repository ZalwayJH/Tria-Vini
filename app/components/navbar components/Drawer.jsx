import React from "react";
import Link from "next/link";
import Image from "next/image";
import DrawerSearchBar from "./DrawerSearchBar";
const Drawer = ({ navItem, isMenuOpen, setIsMenuOpen, setActivePage }) => {
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
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Expand drawer button"
          />
        </label>
      </div>
      <div className="drawer-side">
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
              <li
                key={i}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <div className="menu-title divider m-0"></div>
                <Link
                  className="gap-7 hover:bg-none py-3 text-xl font-semibold "
                  href={item.href}
                  onClick={() => {
                    setActivePage(item.title);
                    document.getElementById("my-drawer-3").click();
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
    // <div className="flex-1 items-center justify-end lg:hidden ">
    //   <Image
    //     className="cursor-pointer"
    //     priority="true"
    //     src={isMenuOpen ? "/images/Exit-Icon.png" : "/images/Menu-Icon.png"}
    //     height={50}
    //     width={50}
    //     alt="Burger menu"
    //     onClick={() => {
    //       setIsMenuOpen(!isMenuOpen);
    //     }}
    //   />

    //   <div>
    //     <ul
    //       className={`${
    //         isMenuOpen ? "flex" : "hidden"
    //       } absolute right-0 top-24 z-10 mx-4 my-1 min-w-[190px] menu rounded-box bg-zinc-800 p-2 drop-shadow-lg flex list-none flex-col gap-1 text-white `}
    //     >
    //       {navItem.map((item, i) => {
    //         return (
    //           <li
    //             key={i}
    //             onClick={() => {
    //               setIsMenuOpen(false);
    //             }}
    //           >
    //             <Link
    //               className="gap-7  py-3 text-xl font-semibold "
    //               href={item.href}
    //               onClick={() => {
    //                 setActivePage(item.title);
    //               }}
    //             >
    //               <Image
    //                 className="invert w-5 h-5 "
    //                 width={5}
    //                 height={5}
    //                 src={`/images/${item.img}`}
    //                 alt={`${item.img}`}
    //               />

    //               {item.title === "Basket" ? (
    //                 <p className="text-white hover:text-tria-gold">
    //                   {item.title}
    //                   <span className="text-black bg-tria-gold badge badge-lg text-xl ml-6 ">
    //                     0
    //                   </span>
    //                 </p>
    //               ) : (
    //                 <p className="text-white  hover:text-tria-gold ">
    //                   {item.title}
    //                 </p>
    //               )}
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Drawer;
