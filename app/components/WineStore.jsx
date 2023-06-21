import React from "react";
import Image from "next/image";

const WineStore = () => {
  const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 1, 1, 1];

  return (
    <div className="flex min-h-full gap-2 justify-center flex-wrap bg-zinc-900">
      {arr.map((element) => {
        return (
          <div className="card m-5 static border-[0.4px] border-zinc-600 overflow-hidden card-side bg-zinc-800 h-80 w-[23em] shadow-xl">
            <figure className="flex-shrink-0 ">
              <Image
                className="w-full h-full p-2 rounded-xl"
                src="/images/winePlaceholder.png"
                width={194}
                height={390}
                alt="wine"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-center flex-col">
                <button className="btn">View</button>
                <button className="btn btn-primary justify-end">Watch</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WineStore;
