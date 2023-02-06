import Results from "@/Components/Results";
import React from "react";

const SearchPage = async ({ params }) => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`
  );
  if (!resp.ok) {
    throw new Error("Error fetching data");
  }
  const data = await resp.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className=" text-center pt-6">Movie not found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
