import React, { useState, useTransition } from "react";
// import { addItemToBasket } from "@/app/api/getWineList";
import { addItemToBasket } from "./actions";

const AddToBasket = ({ inter, wine }) => {
  let [isPending, startTransition] = useTransition();

  return (
    <form
      type="submit"
      action={() => {
        addItemToBasket(wine);
      }}
    >
      <button
        // onClick={() => {
        //   addItemToBasket(wine);
        // }}
        className={`${inter.className}  mt-2 flex flex-shrink-0 py-2 rounded  px-4 bg-cyan-700 font-medium text-white text-xl   xs:text-lg shadow-md shadow-slate-900/50 btn normal-case btn-ghost border-none hover:bg-cyan-600 mb-1`}
      >
        Add to Basket
      </button>
    </form>
  );
};

export default AddToBasket;
