import React from "react";
import { Props } from "../pages";

function MoviePage({ Data }: Props) {
  const filteredMovie = Data.filter((movie) => {
    return movie.category === "Movie";
  });
  return (
    <div className="mt-6 m-5 font-light gap-4 flex flex-col md:gap-6 md:mt-10 md:m-6">
      <h1 className="text-xl tracking-[-0.31px] md:text-3xl md:tracking-[-0.5px] lg:text-[32px]">
        Movie
      </h1>
      <div className="grid grid-cols-2  gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovie.map((movie) => {
          return (
            <div className="relative cursor-pointer flex flex-col gap-1 mb-1">
              <img
                src={movie.thumbnail.regular.large}
                alt=""
                className="rounded-lg mb-1"
              />
              <div className="text-[11px] text-white/[0.75] flex items-center gap-2 md:text-[13px]">
                <p>{movie.year}</p>
                <p>&#183;</p>
                <p className="flex items-center gap-1">
                  <img
                    src={
                      movie.category === "Movie"
                        ? "./icon-category-movie.svg"
                        : "./icon-category-tv.svg"
                    }
                    className=""
                    alt=""
                  />
                  {movie.category}
                </p>
                <p>&#183;</p>
                <p>{movie.rating}</p>
              </div>
              <h2 className="text-[14px] md:text-[18px]">{movie.title}</h2>
              <div className="p-2 rounded-full bg-[#10141e]/[0.5] absolute top-2 right-2 cursor-pointer">
                <img src="./icon-bookmark-empty.svg" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviePage;
