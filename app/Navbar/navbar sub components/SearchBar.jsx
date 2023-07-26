import React, { useState } from "react";
import getWineList from "@/app/api/getWineList";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWineList(inputValue);
  };
  return (
    <form
      type="submit"
      onSubmit={handleSubmit}
      className="lg:flex hidden join w-[25em] "
      role="search"
    >
      <input
        value={inputValue}
        onChange={handleChange}
        id="search"
        className="input flex-shrink-0 min-w-full  bg-zinc-600 join-item placeholder:text-white"
        placeholder="Search.."
        title="searchBar"
      />

      <button className="btn btn-ghost btn-square bg-zinc-600 hover:bg-zinc-600 join-item ">
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

export default SearchBar;
