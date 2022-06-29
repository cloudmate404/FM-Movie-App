import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Rows from "../components/Rows";
import Search from "../components/Search";
import TrendingRow from "../components/TrendingRow";
import Data from "../data.json";
import { Movie } from "../typings";
import { v4 as uuid } from "uuid";
import { Dispatch, SetStateAction, useState } from "react";
import HomePage from "../components/HomePage";
import MoviePage from "../components/MoviePage";
import TvSeriesPage from "../components/TvSeriesPage";

export interface Props {
  Data: Movie[];
}

export interface Page {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

interface PageType {
  type: "Home" | "Movies" | "TV Series" | "Bookmarked" | "Search";
}

const Home = () => {
  const [data, setData] = useState(Data);
  const [page, setPage] = useState("Home");

  return (
    <div className="flex flex-col lg:flex-row ">
      <Navbar page={page} setPage={setPage} />
      <div className="lg:max-w-[86vw]">
        {page === "Home" && <HomePage Data={Data} />}
        {page === "Movies" && <MoviePage Data={Data} />}
        {page === "TV Series" && <TvSeriesPage Data={Data} />}
      </div>
    </div>
  );
};

export default Home;

//From Data.json
