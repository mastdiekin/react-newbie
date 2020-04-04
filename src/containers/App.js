import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import wrapContent from "../containers/Content/wrapContent";
import classes from "./App.sass";
import classes2 from "../containers/Content/Content.sass";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Persons />
      </div>
    );
  }
}

export default wrapContent(App, classes2.content);
