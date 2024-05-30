import React, { useContext } from "react";
import { ExampleChart, Column3D, Pie3D, Bar3D, Doughnut2D } from "./Charts";
import { GithubContext } from "../context/context";

function Repos() {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    if (!language) return total; // removes null values
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  // most used language
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // most stars per language
  const mostStars = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.start;
    })
    .map((item) => {
      return { label: item.label, value: item.stars };
    })
    .slice(0, 5);

  console.log(mostUsed);
  console.log(mostStars);

  return (
    <div>
      <section>
        <Pie3D data={mostUsed}></Pie3D>
        <div></div>
        <Doughnut2D data={mostStars} />
      </section>
    </div>
  );
}

export default Repos;
