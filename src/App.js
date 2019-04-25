import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Erreur from "./components/Erreur";
const styles = {
  root: {
    textAlign: "center",
    height: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
class App extends Component {
  render() {
    return (
      <div className="App" style={styles.root}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route component={Erreur} />
        </Switch>
      </div>
    );
  }
}

export default App;
