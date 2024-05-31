import React from "react";
import UserCard from "./UserCard";
import Followers from "./Followers";
import { Row, Col, Card, Tab } from "react-bootstrap";
import "../styles/css/user.css";

function User() {
  return (
    <div className="user-wrapper">
      <span className="user-row">
        <Card className="user-info-card" border="light">
          <UserCard></UserCard>
        </Card>
        <Card className="user-follower-card" border="light">
          <Followers></Followers>
        </Card>
      </span>
    </div>
  );
}

export default User;
