import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="text">
        <h1>
          Error <span>404</span>
        </h1>
        <h2>Page not found</h2>
      </div>
      <div className="button">
        <NavLink to="/browse">
          <button>Go to Homepage</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
