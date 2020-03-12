import React from "react";

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <>
        <div>
          <img src={confLogo} alt="Logo de la conferencia"/>
        </div>

        <div>
          <img src="" alt="Avatar"/>
          <h1>José Luis <br/> García</h1>
        </div>

        <div>
          <p>Software Engineer</p>
          <p>@Solej77</p>
        </div>

        <div>
          #platziconf
        </div>
      </>
    )
  }
}

export default Badge;
