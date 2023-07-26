"use client";
import React, { useState, useEffect, useCallback } from "react";

import Link from "next/link";
import Image from "next/image";
import Drawer from "./Drawer";
import { getBasketLength } from "../route";

const NavList = ({ navItem }) => {
  const [basketNumber, setBasketNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchBasket = async () => {
    try {
      const number = await getBasketLength();

      console.log({ basket: number });

      setBasketNumber(number);
      setLoading(false);
    } finally {
      return;
    }
  };

  // const fetchBasket = useCallback(async () => {
  //   const number = await getBasketLength();
  //   console.log(number);
  //   setBasketNumber(number);
  // }, []);

  // const fetchBasket = async () => {
  //   const data = await getBasketLength();
  //   const number = data;
  //   console.log(data);
  //   console.log(number);
  //   setBasketNumber(number);
  //   setLoading(false);
  // };
  useEffect(() => {
    // fetchBasket().catch((err) => {
    //   console.error(err);
    // console.log(data);
    // setBasketNumber();
    // setLoading(false);
    fetchBasket().catch((err) => {
      console.error(err);
    });
  }, [basketNumber]);

  return (
    <div className="flex min-w-fit items-center justify-end ">
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
                <div className="indicator">
                  <Image
                    className="invert w-7 h-8"
                    width={25}
                    height={25}
                    src={`/images/${item.img}`}
                    alt={`${item.img}`}
                  />
                  {item.title === "Cart" ? (
                    <span className="badge badge-lg z-0 text-black p-2 bg-tria-gold font-semibold text-xl indicator-item">
                      {basketNumber}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Drawer navItem={navItem} />
    </div>
  );
};

export default NavList;
