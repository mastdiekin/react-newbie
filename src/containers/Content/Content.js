import React, { Component } from "react";
import classes from "./Content.sass";

class Content extends Component {
  render() {
    return <div className={classes.content}>{this.props.children}</div>;
  }
}

export default Content;
