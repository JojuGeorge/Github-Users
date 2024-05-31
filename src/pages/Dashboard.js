import React from "react";
import { Navbar, Search, Info, User, Repos } from "../components";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "../styles/css/dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <span className="dashboard-wrapper">
          <Navbar />
          <Search />
          <Info />
          <User />
          <Repos />
        </span>
      </Container>
    </div>
  );
}
