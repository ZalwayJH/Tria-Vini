import React from "react";

const DrawerSearchBar = () => {
  return (
    <form className="flex join justify-center items-center mt-3">
      <input
        className="input flex-shrink-0   bg-zinc-700 join-item "
        placeholder="Search.."
      />

      <button className="btn btn-ghost btn-square bg-zinc-700 hover:bg-zinc-600 join-item ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#F1AC6D"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};

export default DrawerSearchBar;
