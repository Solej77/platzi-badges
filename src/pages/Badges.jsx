import React from "react";
import { Link } from "react-router-dom"
import "./styles/Badges.css";
import confLogo from "../images/conf-logo.svg"

import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor");
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  fetchData = async () => {
    this.setState({ loading:true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  componentDidMount() {
    console.log("3. Render");
    this.intervalId = setInterval(this.fetchData(), 5000);
  }

  render() {
    console.log("2/4. Render");
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if(this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="Conf Logo"
                className="Badges_conf-logo"
              />
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link
                to="/badges/new"
                className="btn btn-primary"
              >
                Badge New
              </Link>
            </div>
          </div>
          
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />

             {this.state.loading && <MiniLoader />} 
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState){
    console.log("5. componentDidUpdate(prevProps, prevState)");

    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount(){
    console.log("6. componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }
}

export default Badges;