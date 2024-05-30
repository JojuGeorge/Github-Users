import React, { useContext } from "react";
import { ExampleChart, Column3D, Pie3D, Bar3D, Doughnut2D } from "./Charts";
import { GithubContext } from "../context/context";

function Repos() {
  const { repos } = useContext(GithubContext);
  console.log(repos);
  return <div>Repos</div>;
}

export default Repos;
