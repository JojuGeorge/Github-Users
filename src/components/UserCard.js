import React, { useState, useContext } from "react";
import { GithubContext } from "../context/context";
import { Row, Col } from "react-bootstrap";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

function UserCard() {
  const { githubUser } = useContext(GithubContext);

  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <div>
      <div>
        <Row>
          <Col>
            <img
              src={avatar_url}
              alt={name}
              className="img-fluid img-thumbnail rounded-circle mb-2"
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <h4>{name}</h4>
              <p>@{twitter_username || "John Doe"}</p>
            </div>
          </Col>
          <Col>
            <a href={html_url}>follow</a>
          </Col>
        </Row>
      </div>
      <p>{bio}</p>

      <div>
        <p>
          {" "}
          <MdBusiness />
          {company || "indie"}{" "}
        </p>
        <p>
          {" "}
          <MdLocationOn /> {location || "earth"}{" "}
        </p>
        <a href={`https://${blog}`}>
          {" "}
          <MdLink /> {blog}{" "}
        </a>
      </div>
    </div>
  );
}

export default UserCard;
