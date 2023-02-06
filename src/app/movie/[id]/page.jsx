import Image from "next/image";

async function getMovie(movieId) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await resp.json();
}
export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full my-10">
      <div className="p-4 md:pi-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:spaxe-6 gap-10">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          } `}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/loader.svg"
          width={500}
          height={300}
          alt="Movie Poster"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        ></Image>
        <div>
          <h1 className="text-2xl mb-3 font-bold text-amber-500">
            {movie.title || movie.name}
          </h1>
          <p className="my-2">
            <span className="text-amber-400 font-semibold">Plot: </span>
            {movie.overview}
          </p>
          <p className="my-2">
            <span className="text-amber-400 font-semibold">
              Released Date:{" "}
            </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="my-2">
            <span className="text-amber-400 font-semibold">Rating: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
