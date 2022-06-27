import React from "react";
import { Movie } from "../typings";

interface Props {
  Data: Movie[];
  // movies: Movie[];
}
function Rows({ Data }: Props) {
  // Filter out trending shows
  const shows = Data.filter((show) => !show.isTrending);

  return (
    <div className="mt-6 m-5 font-light gap-4 flex flex-col md:gap-6 md:mt-10 md:m-6">
      <h1 className="text-xl tracking-[-0.31px] md:text-3xl md:tracking-[-0.5px] lg:text-[32px]">
        Recommended for you
      </h1>
      <div className="grid grid-cols-2  gap-6 md:grid-cols-3 lg:grid-cols-4">
        {shows.map((show) => {
          return (
            <div className="relative cursor-pointer flex flex-col gap-1 mb-1">
              <img
                src={show.thumbnail.regular.large}
                alt=""
                className="rounded-lg mb-1"
              />
              <div className="text-[11px] text-white/[0.75] flex items-center gap-2 md:text-[13px]">
                <p>{show.year}</p>
                <p>&#183;</p>
                <p className="flex items-center gap-1">
                  <img
                    src={
                      show.category === "Movie"
                        ? "./icon-category-movie.svg"
                        : "./icon-category-tv.svg"
                    }
                    className=""
                    alt=""
                  />
                  {show.category}
                </p>
                <p>&#183;</p>
                <p>{show.rating}</p>
              </div>
              <h2 className="text-[14px] md:text-[18px]">{show.title}</h2>
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

export default Rows;
