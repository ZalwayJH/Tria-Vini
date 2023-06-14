import React from "react";

const SearchBar = () => {
  return (
    <form className=" mx-auto w-6/12 justify-center px-3 md:px-auto ">
      <input
        type="text"
        placeholder="Search wines"
        className="input justify-center rounded-3xl w-full bg-zinc-800 border-zinc-500"
      />
    </form>
  );
};

export default SearchBar;
