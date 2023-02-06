"use client";

import { useRouter } from "next/navigation";
import { React, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      className="flex mx-auto max-w-6xl items-center justify-between px-5 mb-8"
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search movie"
        className="w-full p-4 rounded-sm placeholder-slate-400 bg-transparent"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-500 font-semibold disabled:text-slate-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
