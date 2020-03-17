import React from "react";
import { Link } from "react-router-dom"

import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound__container">
      <div className="row">
        <div className="col-2">

        </div>
        <div className="col-8">
          <h1>Error 404:</h1>
          <Link className="btn btn-primary" to="/badges">
            Start
          </Link>
        </div>
      </div>
  
      </div>
    </div>
  );
}

export default NotFound;
