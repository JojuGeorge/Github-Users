import React, { useContext } from "react";
import { ExampleChart, Column2D, Pie2D, Bar2D, Doughnut2D } from "./Charts";
import { GithubContext } from "../context/context";
import { Row, Col } from "react-bootstrap";
import "../styles/css/repos.css";

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

  // stars, forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;

      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };

      return total;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <div>
      <section className="repo-wrapper">
        <span className="repo-row">
          <span className="repo-col">
            <Pie2D data={mostUsed} />
          </span>
          <span className="repo-col">
            <Column2D data={stars} />
          </span>
        </span>
        <span className="repo-row">
          <span className="repo-col">
            <Doughnut2D data={mostStars} />
          </span>
          <span className="repo-col">
            <Bar2D data={forks} />
          </span>
        </span>
      </section>
    </div>
  );
}

export default Repos;
