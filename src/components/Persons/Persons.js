import React, { Component } from "react";
import classes from "./Persons.sass";
import makeid from "../makeid/makeid";
import Person from "./Person/Person";

class Persons extends Component {
  state = {
    persons: [
      {
        name: "Alex",
        age: 21,
        key: makeid(10)
      },
      {
        name: "Vasya",
        age: 29,
        key: makeid(10)
      }
    ],
    mainColor: "#39aaa1",
    showPersons: true,
    buttonText: "Hide persons"
  };

  tooglePersons = () => {
    const doesShow = this.state.showPersons;
    const buttonTextDefault = this.state.buttonText;
    this.setState({
      showPersons: !doesShow,
      buttonText: !doesShow ? "Hide persons" : "Show persons"
    });
  };

  deletePerson = index => {
    const currentStatePersons = [...this.state.persons];
    currentStatePersons.splice(index, 1);
    this.setState({ persons: currentStatePersons });
  };

  changeNamePerson = (event, key) => {
    // console.log(event.target.value);

    const personIndex = this.state.persons.findIndex(p => {
      return p.key === key;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const currentStatePersons = [...this.state.persons];
    currentStatePersons[personIndex] = person;

    this.setState({
      persons: currentStatePersons
    });
  };

  componentDidMount() {
    console.log("[Persons.js] componentDidMount()");
  }

  render() {
    let persons = (
      <div className={classes[("persons-hidden", "persons")]}>
        Персоны скрыты
      </div>
    );

    if (this.state.showPersons) {
      persons = (
        <div className={classes.persons}>
          <Person
            color={this.state.mainColor}
            persons={this.state.persons}
            delete={this.deletePerson}
            changed={this.changeNamePerson}
          />
        </div>
      );
    }

    if (this.state.persons.length === 0) {
      persons = <div className={classes.persons}>Записей не найдено</div>;
    }

    return (
      <div className={classes["persons-wrap"]}>
        <button
          className={classes["persons-toggle"]}
          onClick={this.tooglePersons}
        >
          {this.state.buttonText}
        </button>
        {persons}
      </div>
    );
  }
}

export default Persons;
