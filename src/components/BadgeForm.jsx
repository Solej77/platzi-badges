import React, { Component } from "react";

class BadgeForm extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  };

  handleChange = (e) => {
   this.setState({
    [e.target.name]: e.target.value,
   });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
  }

  render() {
    return (
      <div>
        <h1>New Attendent</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control" 
              onChange={this.handleChange} 
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control" 
              onChange={this.handleChange} 
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control" 
              onChange={this.handleChange} 
              type="text"
              name="email"
              id="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              className="form-control" 
              onChange={this.handleChange} 
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              className="form-control" 
              onChange={this.handleChange} 
              type="text"
              name="twitter"
              id="twitter"
              value={this.state.twitter}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
