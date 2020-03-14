import React, { Component } from 'react';

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";
import md5 from 'md5';

class BadgeNew extends Component {
  state = { 
    loading:false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    }
  };

  getAvatarUrl = (email) => {
    const hash = md5(email);
    return `https://s.gravatar.com/avatar/${hash}?s=80`;
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      const avatarUrl = this.getAvatarUrl(this.state.form.email);
      this.state.form.avatarUrl = avatarUrl;

      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
    <>
      <div className="BadgeNew__hero">
        <img className="img-fluid BadgeNew__hero-image" src={header} alt="Logo"/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge 
              firstName={this.state.form.firstName || 'FIRST_NAME'}
              lastName={this.state.form.lastName || 'LAST_NAME'}
              jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
              twitter={this.state.form.twitter || 'TWIITER'}
              email={this.state.form.email || 'EMAIL'}
            />
          </div>
          <div className="col-6">
            <BadgeForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
              />
          </div>
        </div>
      </div>

    </>
    )
  }
}

export default BadgeNew;
