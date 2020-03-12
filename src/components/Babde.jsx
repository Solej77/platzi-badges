import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia"/>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://s.gravatar.com/avatar/6371f4360f3fd7260fce4b90deebbe73?s=80" alt="Avatar"/>
          <h1>José Luis <br/> García</h1>
        </div>

        <div className="Badge__section-info">
          <h3>Software Engineer</h3>
          <div>@Solej77</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;
