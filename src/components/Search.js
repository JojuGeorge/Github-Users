import React, { useState, useContext } from "react";
import { GithubContext } from "../context/context";

function Search() {
  const [user, setUser] = useState("");
  let {requests, error, searchGithubUser, isLoading} = useContext(GithubContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user)
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
          {/* <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Github User"
          />
          {(requests > 0 && !isLoading) && <button type="submit">Search</button>} */}
           <div className="input-group mb-3">
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className="form-control" placeholder="Enter Github User" aria-label="Github username" aria-describedby="button-addon2"/>
            {(requests > 0 && !isLoading) && <button type="submit" className="btn btn-outline-secondary"  id="button-addon2">Search</button>}

            
            <h3>Requests : {requests} / 60</h3>
          </div>

          </form>

      </div>
    </div>
  );
}

export default Search;
