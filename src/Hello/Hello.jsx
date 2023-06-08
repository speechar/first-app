import "./Hello.css";
import React from "react";

function template() {
  return (
    <div className="hello">
      <h1>Hello {this.props.name}, How are you doing..?</h1>
    </div>
  );
};

export default template;
