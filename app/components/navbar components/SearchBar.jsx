import React from "react";

const SearchBar = () => {
  return (
    <form className=" mx-auto w-6/12 justify-center px-3 md:px-auto ">
      <div className="input-group">
        <input
          id="Search"
          type="text"
          placeholder="Search wines"
          className="input justify-center rounded-3xl w-full bg-zinc-800 border-zinc-500"
        />
      </div>
    </form>
  );
};

export default SearchBar;
