import Results from "@/Components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const resp = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 43200 } }
  );

  if (!resp.ok) {
    console.error(
      `Error: Failed to fetch data. Status code: ${resp.status}. Error message: ${resp.statusText}`
    );
    throw new Error("Failed to Fetch Data");
  }

  const data = await resp.json();

  const results = data.results;

  return (
    <div>
      <Results results={results}></Results>
    </div>
  );
}
