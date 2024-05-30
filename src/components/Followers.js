import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import { Row, Col } from "react-bootstrap";

function Followers() {
  const { followers } = useContext(GithubContext);

  return (
    <div>
      <div className="overflow-scroll" style={{ height: "300px" }}>
        {followers.map((follower, index) => {
          const { avatar_url, login, html_url } = follower;

          return (
            <div key={index}>
              <Row>
                <Col>
                  <img
                    src={avatar_url}
                    alt={login}
                    className="img-fluid img-thumbnail rounded-circle mb-2"
                    style={{ width: "80px", height: "80px" }}
                  />
                </Col>
                <Col>
                  <span>
                    <h4>{login}</h4>
                    <a href={html_url}>{html_url}</a>
                  </span>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Followers;
