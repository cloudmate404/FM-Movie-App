import React from "react";
import { Movie } from "../typings";
import Rows from "./Rows";
import TrendingRow from "./TrendingRow";
interface Props {
  Data: Movie[];
}

export default function HomePage({ Data }: Props) {
  return (
    <>
      <div className="w-screen  ">{/* <Search /> */}</div>
      <TrendingRow Data={Data} />
      <Rows Data={Data} />
    </>
  );
}
