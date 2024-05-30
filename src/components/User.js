import React from "react";
import UserCard from "./UserCard";
import Followers from "./Followers";
import { Row, Col } from "react-bootstrap";

function User() {
  return (
    <div>
      <Row>
        <Col className="card" style={{ height: "300px" }}>
          <UserCard></UserCard>
        </Col>
        <Col className="card" style={{ height: "300px" }}>
          <Followers></Followers>
        </Col>
      </Row>
    </div>
  );
}

export default User;
