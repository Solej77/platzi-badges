import React, { Component } from "react";

class BadgeForm extends Component {

  render() {
    return (
      <div>
        <h1>New Attendent</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control" 
              onChange={this.props.onChange} 
              type="text"
              name="firstName"
              id="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control" 
              onChange={this.props.onChange} 
              type="text"
              name="lastName"
              id="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control" 
              onChange={this.props.onChange} 
              type="text"
              name="email"
              id="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              className="form-control" 
              onChange={this.props.onChange} 
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              className="form-control" 
              onChange={this.props.onChange} 
              type="text"
              name="twitter"
              id="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
