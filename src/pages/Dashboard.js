import React, {useContext} from "react";
import { Navbar, Search, Info, User, Repos } from "../components";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "../styles/css/dashboard.css";
import { GithubContext } from "../context/context";

export default function Dashboard() {

  const {isLoading} = useContext(GithubContext)
  return (
    <div>
      <Container>
        <span className="dashboard-wrapper">
          <Navbar />
          <Search />
          {isLoading ? (<h3>Loading... </h3>):
          (
            <>
            <Info />
            <User />
            <Repos />
            </>
          )}
     
        </span>
      </Container>
    </div>
  );
}
