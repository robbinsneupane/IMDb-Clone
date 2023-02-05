import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-300 sm:shadow-md rounded-lg sm:border-solid border-1 sm:border-sky-400 sm:m-2 transition-shadow-duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          } `}
          width={500}
          height={300}
          alt="poster"
        ></Image>
      </Link>
    </div>
  );
};
