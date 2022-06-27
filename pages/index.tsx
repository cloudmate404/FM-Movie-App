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

interface Props {
  Data: Movie[];
}

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="  ">
        <Navbar />
      </div>
      <div className="lg:max-w-[86vw]">
        <div className="w-screen  ">{/* <Search /> */}</div>
        <TrendingRow Data={Data} />
        <Rows Data={Data} />
      </div>
    </div>
  );
};

export default Home;

//From Data.json
