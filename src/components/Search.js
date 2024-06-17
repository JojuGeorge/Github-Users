import React, { useState, useContext } from "react";
import { GithubContext } from "../context/context";

function Search() {
  const [user, setUser] = useState("");
  let {requests, error} = useContext(GithubContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
    }
  };

  return (
    <div>
      <div>
        {
          error.show && 
          <div>
            <p>{error.msg}</p>
          </div>
        }
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Github User"
          />
          {requests > 0 && <button type="submit">Search</button>}
        </form>
        <h3>requests : {requests} / 60</h3>
      </div>
    </div>
  );
}

export default Search;
