import React, { Component } from 'react';
import header from "../images/badge-header.svg";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";


class BadgeNew extends Component {
  render() {
    return (
    <>
      <Navbar />
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo"/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge 
              firstName="José Luis"
              lastName="García"
              jobTitle="Software Engineer"
              twitter="Solej77"
              avatar="https://s.gravatar.com/avatar/6371f4360f3fd7260fce4b90deebbe73?s=80"
            />
          </div>
          <div className="col-6">
            <BadgeForm />
          </div>
        </div>
      </div>

    </>
    )
  }
}

export default BadgeNew;
