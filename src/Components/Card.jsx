import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export const Card = ({ result }) => {
  return (
    <div className="cursor-pointer  sm:hover:shadow-slate-600 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          } `}
          className="sm:rounded-t-lg group-hover:opacity-90 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="loader.svg"
          width={500}
          height={300}
          alt="image not available"
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "auto",
          }}
        ></Image>
        <div className="p-2">
          <h2 className="truncate text-lg font-bold text-amber-500">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-sm my-1 text-slate-400">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
          <p className="line-clamp-3 text-sm">{result.overview}</p>
        </div>
      </Link>
    </div>
  );
};
