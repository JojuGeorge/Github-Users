import React, { useState, useContext } from "react";
import { GithubContext } from "../context/context";
import { Row, Col } from "react-bootstrap";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import "../styles/css/userCard.css";

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
    <div className="userCard-wrapper">
      <div>
        <span className="userCard-row">
          <span className="userCard-col">
            <img
              src={avatar_url}
              alt={name}
              className="img-fluid img-thumbnail rounded-circle mb-2 userCard-img"
            />
          </span>
          <span className="userCard-col">
            <h4>{name || "John Doe"}</h4>
            <p>@{twitter_username || "John Doe"}</p>
          </span>
          <span className="userCard-col">
            <a href={html_url} className="btn btn-outline-primary ">
              follow
            </a>
          </span>
        </span>
      </div>

      <div className="userCard-info">
        <span>{bio} </span>
        <span>
          <MdBusiness />
          {company || "indie"}
        </span>
        <span>
          <MdLocationOn /> {location || "earth"}
        </span>
        <a href={`${blog}`}>
          <MdLink /> {blog}{" "}
        </a>
      </div>
    </div>
  );
}

export default UserCard;
