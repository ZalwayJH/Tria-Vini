import React from "react";

const Cart = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      Cart
      <button
        className="btn btn-ghost bg-blue-900"
        onClick={() => {
          insertDocument("big ol wine bottle");
        }}
      >
        send
      </button>
    </div>
  );
};

export default Cart;
