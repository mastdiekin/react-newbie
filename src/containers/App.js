import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.sass";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Persons />
      </div>
    );
  }
}

export default App;
