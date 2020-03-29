import React, { Component } from "react";
import "./Person.sass";

class Person extends Component {
  state = {
    persons: [
      {
        name: "Alex",
        age: 21,
        key: Math.floor(Math.random() * 30)
      },
      {
        name: "Vasya",
        age: 29,
        key: Math.floor(Math.random() * 30)
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

  render() {
    const style = {
      border: "1px solid" + this.state.mainColor
    };

    let persons = <div className="persons-hidden persons">Персоны скрыты</div>;

    if (this.state.showPersons) {
      persons = (
        <div className="persons">
          {this.state.persons.map((person, index) => (
            <div
              key={person.key}
              // onClick={() => this.deletePerson(index)}
              className="person"
              style={style}
            >
              Name: {person.name} <br />
              Age: {person.age} <br />
              ID: {person.key} <br />
              Index: {index} <br />
              <input
                type="text"
                value={person.name}
                onChange={event => this.changeNamePerson(event, person.key)}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="persons-wrap">
        <button className="persons-toggle" onClick={this.tooglePersons}>
          {this.state.buttonText}
        </button>
        {persons}
      </div>
    );
  }
}

export default Person;
