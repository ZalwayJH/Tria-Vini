"use client";
import React, { useState, useEffect } from "react";

import createUser from "../api/createUser.js";
// import { getWineList } from "../api/getWineList";

const Cart = () => {
  // const handleClick = async () => {
  //   const apple = await getWineList();
  //   console.log(apple);
  // };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      Cart
      {/* <MyButton handleClick={handleClick} /> */}
    </div>
  );
};

export default Cart;
