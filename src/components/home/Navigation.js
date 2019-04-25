import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { changeLog } from "../../action/changeLog";
import DelayLink from "./DelayLink";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.sidenaveffect = React.createRef();
    this.mySidenav = React.createRef();
  }
  toggleNav = () => {
    if (this.props.isOpen) {
      this.sidenaveffect.current.style.width = "100%";
      this.sidenaveffect.current.style.transition = "0.5s";
      this.mySidenav.current.style.width = "100%";
      this.mySidenav.current.style.transition = "1s";
      this.props.changeLog();
    } else {
      this.sidenaveffect.current.style.width = "0%";
      this.sidenaveffect.current.style.transition = "1s";
      this.mySidenav.current.style.width = "0";
      this.mySidenav.current.style.transition = "0.5s";
      this.props.changeLog();
    }
  };
  render() {
    return (
      <section className="sidemenu">
        <div
          id="mySidenavEffect"
          className="sidenaveffect"
          ref={this.sidenaveffect}
        />
        <div id="mySidenav" className="sidenav" ref={this.mySidenav}>
          <div
            className={
              this.props.isOpen
                ? "slidingTag "
                : "slidingTag slidingTag-modifier"
            }
          />
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.toggleNav}
          >
            &times;
          </a>
          <DelayLink
            delay={1500}
            to="/"
            className={this.props.isOpen ? "mySidenav1 " : "mySidenav1 fade-in"}
            data-text="HOME"
            onDelayStart={this.toggleNav}
            //onClick={this.toggleNav}
          >
            Home
          </DelayLink>
          <NavLink
            to="/about"
            className={this.props.isOpen ? "mySidenav2" : "mySidenav2 fade-in "}
            data-text="ABOUT"
            onClick={this.toggleNav}
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={this.props.isOpen ? "mySidenav3 " : "mySidenav3 fade-in"}
            data-text="WORK"
            onClick={this.toggleNav}
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className={this.props.isOpen ? "mySidenav4 " : "mySidenav4 fade-in"}
            data-text="CONTACT"
            onClick={this.toggleNav}
          >
            Contact
          </NavLink>
        </div>

        <div className="menu-button" onClick={this.toggleNav}>
          <img src="./list.svg" alt="" className="list" />
          <ul className="menu">
            <li>M</li>
            <li>E</li>
            <li>N</li>
            <li>U</li>
          </ul>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    isOpen: state.isOpen
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeLog: () => dispatch(changeLog())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
