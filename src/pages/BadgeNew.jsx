import React, { Component } from 'react';
import header from "../images/badge-header.svg";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";


class BadgeNew extends Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  };

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
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              jobTitle={this.state.form.jobTitle}
              twitter={this.state.form.twitter}
              email={this.state.form.email}
              avatar="https://s.gravatar.com/avatar/6371f4360f3fd7260fce4b90deebbe73?s=80"
            />
          </div>
          <div className="col-6">
            <BadgeForm
              onChange={this.handleChange}
              formValues={this.state.form}
              />
          </div>
        </div>
      </div>

    </>
    )
  }
}

export default BadgeNew;
