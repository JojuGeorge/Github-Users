import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import { Row, Col } from "react-bootstrap";
import "../styles/css/followers.css";

function Followers() {
  const { followers } = useContext(GithubContext);

  return (
    <div>
      <div className="overflow-scroll">
        {followers.map((follower, index) => {
          const { avatar_url, login, html_url } = follower;

          return (
            <div key={index} className="follower-wrapper">
              <span className="follower-row">
                <span className="follower-col">
                  <img
                    src={avatar_url}
                    alt={login}
                    className="img-fluid img-thumbnail rounded-circle mb-2"
                  />
                </span>
                <span className="follower-col">
                  <span>
                    <h5>{login}</h5>
                    <a href={html_url}>{html_url}</a>
                  </span>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Followers;
