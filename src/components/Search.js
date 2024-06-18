import React, { useState, useContext } from "react";
import { GithubContext } from "../context/context";
import '../styles/css/search.css'

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
            <p className="error-msg">{error.msg}</p>
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
           <div className=" search-wrapper">
            <span>
            <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className="form-control" placeholder="Enter Github User" aria-label="Github username" aria-describedby="button-addon2"/>
            {/* {(requests > 0 && !isLoading) && <button type="submit" className="btn btn-primary"  id="button-addon2">Search</button>} */}
            <button type="submit" disabled={!(requests > 0 && !isLoading)} className="btn btn-primary"  id="button-addon2">Search</button>
            </span>
            
            <h3>Requests : {requests} / 60</h3>
          </div>

          </form>

      </div>
    </div>
  );
}

export default Search;
