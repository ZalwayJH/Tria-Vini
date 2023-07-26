"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Loading from "./loading";
import getWineList from "./api/getWineList";
import WineCards from "./WineCards";

export default function Home() {
  const [wineList, setWineList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await getWineList();
    const wines = structuredClone(data);

    setWineList(wines);
    setLoading(false);
  };

  useEffect(() => {
    fetchData().catch((err) => {
      console.error(err);
    });
  }, [loading]);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="flex min-h-screen justify-center bg-zinc-900">
      <div className="min-w-full">
        <WineCards wineList={wineList} />

        {/* <div className="w-full">
          <ul className="flex justify-center sm:mx-11 flex-wrap p-5 bg-zinc-900">
            {arr.map((element, i) => {
              let sale = element > 2 ? true : false;
              return (
                <li key={i} className="w-auto  m-7 flex ">
                  <div className="group bg-zinc-800 shadow-md shadow-black/50 rounded-md ring-zinc-700 ring-[0.9px] overflow-hidden  flex flex-row h-80  xs:w-[21em] ">
                    <div className="flex-none relative">
                      <Image
                        className="w-full h-full z-0 "
                        src="/images/1.png"
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
                        <p>Merlot</p>
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
                      <div className="place-self-center w-full border-t-2 border-b-2 border-tria-gold p-1 text-center ">
                        <StarRating element={element} />
                      </div>
                      <div className="card-actions flex-col whitespace-nowrap flex-end inline place-self-center text-center ">
                        <span
                          className={`${
                            sale ? "static" : "hidden"
                          } nline-through mr-1  text-2xl text-red-700 line-through`}
                        >
                          £112
                        </span>
                        <span className="text-5xl ml-1  text-tria-gold ">
                          £96
                        </span>
                        <AddToBasket inter={inter} />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </main>
  );
}
