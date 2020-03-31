import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.sass";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    );
  }
}

export default App;
