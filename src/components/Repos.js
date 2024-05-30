import React, { useContext } from "react";
import { ExampleChart, Column3D, Pie3D, Bar3D, Doughnut2D } from "./Charts";
import { GithubContext } from "../context/context";

function Repos() {
  const { repos } = useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language } = item;

    if (!language) return total; // removes null values
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <div>
      <section>
        <Pie3D data={languages}></Pie3D>
      </section>
    </div>
  );
}

export default Repos;
