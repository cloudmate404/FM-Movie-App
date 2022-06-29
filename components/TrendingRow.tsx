import React from "react";
import { Movie } from "../typings";

interface Props {
  Data: Movie[];
  // movies: Movie[];
}

function TrendingRow({ Data }: Props) {
  const shows = Data.filter((show) => show.isTrending);
  return (
    <div className="mt-[24px] ml-4 font-light gap-4 flex flex-col md:gap-6 md:ml-6">
      <h1 className="text-xl tracking-[-0.31px] md:text-3xl md:tracking-[-0.5px] lg:text-[32px]">
        Trending
      </h1>
      <div className="flex overflow-x-scroll gap-4 md:gap-10">
        {shows.map((show) => {
          return (
            <div
              className={`background-image w-[64vw] relative p-4 flex justify-end md:p-6  cursor-pointer `}
              style={{
                backgroundImage: `url(${show.thumbnail.trending.large})`,
              }}
            >
              <div>
                <div className="min-w-[500px] flex relative text-xs gap-2 text-white/[0.75] md:text-base">
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
                <h2 className="text-base font-medium md:text-2xl">
                  {show.title}
                </h2>
              </div>
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

export default TrendingRow;
