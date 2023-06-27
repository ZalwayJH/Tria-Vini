"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Rating } from "react-simple-star-rating";

const inter = Inter({ subsets: ["latin"] });

// <div className="flex  m-5 border-[0.4px] border-zinc-600 overflow-hidden flex-row bg-zinc-800 h-80 w-[23em] shadow-xl">
//   <figure className=" flex-none">
//     <Image
//       className="w-full  h-full p-2 rounded-xl static"
//       src="/images/winePlaceholder.png"
//       width={194}
//       height={390}
//       alt="wine"
//     />
//     <button className="btn absolute w-[9em] bg-tria-gold text-black">
//       View
//     </button>
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">New movie is released!</h2>
//     <p>Click the button to watch on Jetflix app.</p>
//     <div className="card-actions justify-center flex-col">
//       <button className="btn btn-primary justify-end">Watch</button>
//     </div>
//   </div>
// </div>

const WineStore = () => {
  const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="w-full">
      <ul className="flex justify-center sm:mx-11 flex-wrap p-5 bg-zinc-900">
        {arr.map((element, i) => {
          let sale = element > 2 ? true : false;
          return (
            <li key={i} className="w-auto  m-7 flex ">
              <div className="group bg-zinc-800 shadow-md shadow-black/50 rounded-md ring-zinc-700 ring-[0.9px] overflow-hidden  flex flex-row h-80  xs:w-[21em] ">
                <div className="flex-none relative">
                  <Image
                    className="w-full h-full z-0 "
                    src="/images/winePlaceholder.png"
                    width={194}
                    height={390}
                    alt="wine"
                  />
                  <button
                    className={`${inter.className}
                     justify-center  lg:hidden group-hover:flex flex-shrink-0  rounded absolute mb-2 z-0  bottom-0 left-5 right-5 bg-zinc-700 font-bold text-tria-gold text-xl shadow-md shadow-slate-900/80 hover:bg-zinc-600 btn whitespace-nowrap normal-case border-none`}
                  >
                    View
                  </button>
                </div>
                <div className="card-body justify-between mx-auto p-1">
                  <h2 className="card-title text-2xl place-self-center">
                    Umbra
                  </h2>

                  <div>
                    <p className="">Merlot</p>
                    <p>Semi-sweet</p>
                  </div>
                  <div>
                    <p>
                      12%<span className="text-tria-gold">ABV</span>
                    </p>
                    <p>
                      750<span className="text-tria-gold">ml</span>
                    </p>
                  </div>
                  <div className="place-self-center  w-full border-t-2 border-b-2 border-tria-gold p-1 text-center ">
                    <Rating
                      size={25}
                      transition
                      allowFraction
                      readonly
                      initialValue={element}
                      fillColor="#D32748"
                    />
                  </div>
                  <div className="card-actions flex-col whitespace-nowrap flex-end inline place-self-center text-center ">
                    <span
                      className={`${
                        sale ? "static" : "hidden"
                      } nline-through mr-1  text-2xl text-red-700 line-through`}
                    >
                      £112
                    </span>
                    <span className="text-5xl ml-1  text-tria-gold ">£96</span>

                    <button
                      className={`${inter.className}  mt-2 flex flex-shrink-0 py-2 rounded  px-4 bg-cyan-700 font-medium text-white text-xl   xs:text-lg shadow-md shadow-slate-900/50 btn normal-case btn-ghost border-none hover:bg-cyan-600 mb-1`}
                    >
                      Add to Basket
                    </button>
                  </div>
                  {/* <div className="flex-row ">
              <h2 className="text-3xl  my-2">Umbra</h2>
              <div className="flex-row">
                <h3>Merlot</h3>
              </div>
            </div> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WineStore;
