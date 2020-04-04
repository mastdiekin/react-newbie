import React, { Component } from "react";

const wrapContent = (WrappedComponent, classes) => {
  return (props) => (
    <div className={classes}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default wrapContent;
