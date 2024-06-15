import React, { useState } from "react";

function Search() {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Github User"
          />
          <button type="submit">Search</button>
        </form>
        <h3>requests : 60 / 60</h3>
      </div>
    </div>
  );
}

export default Search;
