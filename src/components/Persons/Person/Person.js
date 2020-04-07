import classes from "../Persons.sass";
import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // this.inputRef.focus();
    this.inputRef.current.focus();
  }

  render() {
    const style = {
      border: "1px solid" + this.props.color,
    };
    return this.props.persons.map((person, index) => (
      <div key={person.key} className={classes.person} style={style}>
        <button
          onClick={() => this.props.delete(index)}
          className={classes["person-remove"]}
        >
          x
        </button>
        Name: {person.name} <br />
        Age: {person.age} <br />
        ID: {person.key} <br />
        Index: {index} <br />
        <input
          type="text"
          // ref={(inputRef) => {this.inputRef = inputRef}}
          ref={this.inputRef}
          value={person.name}
          onChange={(event) => this.props.changed(event, person.key)}
        />
      </div>
    ));
  }
}
export default Person;
