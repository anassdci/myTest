import React, { Component } from "react";
import Particle from "./Particle";
import Navigation from "./Navigation";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  render() {
    return (
      <div>
        <Particle />
        <Navigation />
        <div className="logo">
          <img
            src="anass.svg"
            alt=""
            id="logo"
            className={this.props.isOpen ? "logoEffectBasic" : "logoEffect"}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isOpen: state.isOpen
  };
};
export default connect(mapStateToProps)(Home);
