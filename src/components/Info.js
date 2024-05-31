import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import { GoRepo, GoCodeSquare } from "react-icons/go";
import { FiUserPlus, FiUsers, FiuserPlus } from "react-icons/fi";
import { Row, Col, Card } from "react-bootstrap";
import "../styles/css/info.css";

function Info() {
  const { githubUser } = useContext(GithubContext);

  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo />,
      label: "repos",
      value: public_repos,
      iconColor: "info-icon-purple",
    },
    {
      id: 2,
      icon: <FiUsers />,
      label: "followers",
      value: followers,
      iconColor: "info-icon-green",
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      label: "following",
      value: following,
      iconColor: "info-icon-pink",
    },
    {
      id: 4,
      icon: <GoCodeSquare />,
      label: "gists",
      value: public_gists,
      iconColor: "info-icon-yellow",
    },
  ];

  return (
    <section>
      <span className="info-wrapper">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </span>
    </section>
  );
}

const Item = ({ icon, label, value, iconColor }) => {
  return (
    <span>
      <Card className="info-card-container" body border="light">
        <span className="info-icon-row">
          <span className="info-icon-col">
            <span className={`${iconColor} fs-2 info-icons`}>{icon}</span>
          </span>
          <span>
            <h3>{value}</h3>
            <p>{label}</p>
          </span>
        </span>
      </Card>
    </span>
  );
};

export default Info;
