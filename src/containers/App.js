import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Content from "../containers/Content/Content";
import classes from "./App.sass";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Content>
          <Persons />
        </Content>
      </div>
    );
  }
}

export default App;
