import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
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
  const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 1, 1, 1];

  return (
    <div>
      <ul className="flex justify-center flex-wrap  bg-zinc-900">
        {arr.map((element, i) => {
          return (
            <li key={i}>
              <div className="bg-zinc-800 rounded-xl ring-zinc-600 ring-[0.9px] overflow-hidden flex m-5 flex-row h-80 w-[23em]">
                <div className="flex-none relative">
                  <Image
                    className="w-full h-full z-0 "
                    src="/images/winePlaceholder.png"
                    width={194}
                    height={390}
                    alt="wine"
                  />
                  <button
                    className={`${inter.className}flex flex-shrink-0 py-2 rounded absolute mb-2 z-0  bottom-0 left-5 right-5 bg-zinc-700 font-bold text-tria-gold text-xl`}
                  >
                    View
                  </button>
                </div>
                <div className="card-body p-2">
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
                  <div readOnly className="rating">
                    <input
                      readOnly
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      readOnly
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      readOnly
                      name="rating-1"
                      className="mask mask-star"
                      type="radio"
                    />
                    <input readOnly className="mask mask-star" checked />
                    <input
                      readOnly
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                  <div className="card-actions items-center flex-col whitespace-nowrap flex-end">
                    <button
                      className={`${inter.className}   flex flex-shrink-0 py-2 rounded  px-4 bg-cyan-700 font-medium text-white text-xl`}
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
