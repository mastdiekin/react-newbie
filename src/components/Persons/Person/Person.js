import classes from "../Persons.sass";
import React, { Component } from "react";

class Person extends Component {
  render() {
    const style = {
      border: "1px solid" + this.props.color
    };
    return this.props.persons.map((person, index) => (
      <div
        key={person.key}
        //   onClick={() => this.props.delete(index)}
        className={classes.person}
        style={style}
      >
        Name: {person.name} <br />
        Age: {person.age} <br />
        ID: {person.key} <br />
        Index: {index} <br />
        <input
          type="text"
          value={person.name}
          onChange={event => this.props.changed(event, person.key)}
        />
      </div>
    ));
  }
}
export default Person;
